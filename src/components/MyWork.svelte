<script lang="ts">
  import { onMount } from "svelte";

  export let windowScroll: number;

  let containerRef: HTMLElement;
  let containerHeight: number;
  let windowInnerHeight = 0;

  let opacityBG = 0;
  let opacityFont = 0;
  let offsetTop = 0;

  function handleScrollFont() {
    if (!containerRef) return;
    const startFadeIn = offsetTop - containerHeight * 0.8;
    const endFadeIn = offsetTop;
    const startFadeOut = offsetTop + 5;
    const endFadeOut = offsetTop + windowInnerHeight * 0.5;

    if (windowScroll <= startFadeIn) {
      opacityFont = 0;
    } else if (windowScroll < endFadeIn) {
      opacityFont = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else if (windowScroll <= startFadeOut) {
      opacityFont = 1;
      console.log("here");
    } else if (windowScroll <= endFadeOut) {
      opacityFont =
        1 - (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
    } else {
      opacityFont = 0;
    }

    opacityFont = Math.max(0, Math.min(opacityFont, 1));
  }

  function handleScrollBG() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeIn = offsetTop - containerHeight * 0.5;
    const endFadeIn = offsetTop;

    if (windowScroll <= startFadeIn) {
      opacityBG = 0;
    } else if (windowScroll <= endFadeIn) {
      opacityBG = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    }

    opacityBG = Math.max(0, Math.min(opacityBG, 1));
  }

  $: {
    if (windowScroll !== undefined || windowInnerHeight || offsetTop) {
      handleScrollFont();
      handleScrollBG();
    }
  }

  function handleResize() {
    windowInnerHeight = window.innerHeight;
    handleScrollFont();
    handleScrollBG();
  }

  onMount(() => {
    handleResize();

    offsetTop = containerRef.offsetTop;
    containerHeight = containerRef.offsetHeight;

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

<svelte:window
  on:resize={() => {
    if (containerRef) {
      containerRef.style.height = `${windowInnerHeight}px`;
      handleResize();
    }
  }}
/>

<div
  class="transition prata-regular centered"
  bind:this={containerRef}
  bind:clientHeight={containerHeight}
  style="opacity: {opacityBG}; height: {windowInnerHeight}px;"
>
  <div
    style="font-size: 72pt; opacity:{opacityFont}; background-color: transparent"
  >
    My Work
  </div>
</div>

<style>
  .transition {
    position: sticky;
    top: 0;
    z-index: 4;
    background-color: rgb(14, 0, 39);
    color: white;
    justify-content: center;
    align-items: center;
    height: 100vh;
    pointer-events: none;
  }
</style>
