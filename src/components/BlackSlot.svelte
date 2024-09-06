<script lang="ts">
  import { onMount } from "svelte";

  export let windowScroll;

  let containerRef: HTMLElement;
  let containerHeight: number;

  let opacityBG = 0;
  let opacityFont = 0;
  $: heightdisplay = containerRef?.offsetTop;

  function handleScrollFont() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeIn = 0;
    const endFadeIn = heightdisplay;
    const startFadeOut = heightdisplay + 5;
    const endFadeOut = heightdisplay + heightdisplay * 0.5;

    if (windowScroll <= startFadeIn) {
      opacityFont = 0; // Fully transparent before reaching startFadeIn
    } else if (windowScroll < endFadeIn) {
      opacityFont = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else if (windowScroll <= startFadeOut) {
      opacityFont = 1; // Fully opaque between endFadeIn and startFadeOut
    } else if (windowScroll <= endFadeOut) {
      // Linear fade out
      opacityFont =
        1 - (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
    } else {
      opacityFont = 0; // Fully transparent after endFadeOut
    }

    opacityFont = Math.max(0, Math.min(opacityFont, 1));
  }

  function handleScrollBG() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;

    const startFadeIn = 200;
    const endFadeIn = heightdisplay - heightdisplay * 0.25;

    if (windowScroll <= startFadeIn) {
      opacityBG = 0; // Fully transparent before reaching startFadeIn
    } else if (windowScroll <= endFadeIn) {
      // Linear fade in
      opacityBG = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else {
      opacityBG = 1; // Fully opaque after endFadeIn
    }

    opacityBG = Math.max(0, Math.min(opacityBG, 1));
  }

  $: {
    if (windowScroll) {
      handleScrollBG();
      handleScrollFont();
    }
  }
</script>

<div
  class="blank-slot"
  style="opacity: {opacityBG};"
  bind:this={containerRef}
  bind:clientHeight={containerHeight}
>
  <div class="prata-regular" style="font-size: 72pt;">hey</div>
</div>

<style>
  .blank-slot {
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    height: 100vh;
    width: 100vw;
    /* background-color: rgb(14, 0, 39); */
  }
</style>
