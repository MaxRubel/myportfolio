<script lang="ts">
  import { hideNavStore } from "../../stores/hideNavStore";
  import { projectViewing } from "../../stores/ProjectViewingStore";
  import PlanChad from "./PlanChad.svelte";
  import Zoot from "./Zoot.svelte";

  export let windowScroll: number;

  let containerRef: HTMLElement;
  let containerHeight: number;
  let opacity = 0;
  let heightdisplay: number;
  let added = 100;
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

  function handleTitle() {
    console.log(added);
    switch (added) {
      case 100:
        projectViewing.set("ZOOT");
        break;
      case 0:
        projectViewing.set("planChad");
        break;
      case -100:
        projectViewing.set("Group-Doodles");
    }
  }

  function moveLeft() {
    if (added === -100) return;
    added = added - 100;
    handleTitle();
  }

  function moveRight() {
    if (added === 100) return;
    added = added + 100;
    handleTitle();
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="portfolio-container"
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
  <div class="portfolio-bar">
    {$projectViewing}
    <div class="buttons-port">
      <button class="switch-buttons" on:click={moveRight}> Prev </button>
      <button class="switch-buttons" on:click={moveLeft}> Next </button>
    </div>
  </div>
  <div class="project-container">
    <Zoot {added} />
    <PlanChad {added} />
  </div>
</div>

<style>
  .portfolio-container {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: sticky;
    box-sizing: border-box;
    z-index: 3;
    background-color: rgb(14, 0, 39);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }

  .portfolio-bar {
    width: 100%;
    background-color: black;
    height: 50px;
    padding: 0em 3em;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-size: 18pt;
  }

  .switch-buttons {
    height: 34px;
    padding: 1rem;
    color: white;
    font-size: 12pt;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(42, 157, 165);
  }

  .buttons-port {
    display: flex;
    margin-left: 50px;
    gap: 1rem;
  }
</style>
