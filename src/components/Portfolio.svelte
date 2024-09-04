<script lang="ts">
  import { hideNavStore } from "../../stores/hideNavStore";
  import Zoot from "./Zoot.svelte";

  export let windowScroll: number;

  let containerRef: HTMLElement;
  let containerHeight: number;
  let opacity = 0;
  let heightdisplay: number;
  let added = 0;

  $: if (containerRef) {
    heightdisplay = containerRef.offsetTop;
  }

  $: {
    if (windowScroll >= heightdisplay) {
      hideNavStore.set(true);
    } else {
      hideNavStore.set(false);
    }
    handleScroll();
  }

  function handleScroll() {
    if (!containerRef) return;

    const startFadeIn = heightdisplay - heightdisplay * 0.75;
    const endFadeIn = heightdisplay;
    const startFadeOut = heightdisplay + 300;
    const endFadeOut = heightdisplay + heightdisplay * 0.75;

    if (windowScroll <= startFadeIn) {
      opacity = 0;
    } else if (windowScroll <= endFadeIn) {
      // Linear fade in
      opacity = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else if (windowScroll <= startFadeOut) {
      opacity = 1;
    } else if (windowScroll <= endFadeOut) {
      // Linear fade out
      opacity = 1 - (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
    } else {
      opacity = 0;
    }

    opacity = Math.max(0, Math.min(opacity, 1));
  }

  function moveLeft() {
    if (added === -100) return;
    added = added - 100;
  }

  function moveRight() {
    if (added === 100) return;
    added = added + 100;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="portfolio-container prata-regular"
  bind:this={containerRef}
  bind:clientHeight={containerHeight}
  style="opacity: {opacity};"
  on:mouseenter={() => {
    hideNavStore.set(true);
  }}
  on:mouseleave={() => {
    hideNavStore.set(false);
  }}
>
  <button style="background-color: white" on:click={moveLeft}>Move Left</button>
  <button style="background-color: white" on:click={moveRight}
    >Move Right</button
  >
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <Zoot {added} />
  <!-- <Zoot {added} />
  <Zoot added={added + 100} /> -->
</div>

<style>
  .portfolio-container {
    width: 100%;
    height: 100%;
    position: sticky;
    box-sizing: border-box;
    padding: 3em;
    z-index: 3;
    background-color: rgb(14, 0, 39);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
