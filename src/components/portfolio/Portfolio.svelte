<script lang="ts">
  import { hideNavStore } from "../../../stores/hideNavStore";
  import { projectViewing } from "../../../stores/ProjectViewingStore";
  import PlanChad from "./PlanChad.svelte";
  import Zoot from "./Zoot.svelte";

  export let windowScroll: number;

  let containerRef: HTMLElement;
  let containerHeight: number;
  let opacity = 0;
  let heightdisplay: number;
  let viewing: string;

  $: viewing = $projectViewing;

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

    const startFadeIn = heightdisplay - heightdisplay * 0.3;
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
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="portfolio-container"
  id="portfolio-container-anchor"
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
  <div class="project-container">
    <Zoot />
    <PlanChad />
  </div>
</div>

<style>
  .portfolio-container {
    width: 100%;
    height: 100%;
    position: sticky;
    box-sizing: border-box;
    z-index: 5;
    background-color: rgb(14, 0, 39);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    min-height: 100vh;
  }

  .portfolio-container {
    height: 100%;
    position: relative;
  }
</style>
