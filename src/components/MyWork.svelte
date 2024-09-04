<script lang="ts">
  import { hideNavStore } from "../../stores/hideNavStore";
  import Calendar from "../graphics/Calendar.svelte";
  import Computer from "../graphics/Computer.svelte";
  import Palette from "../graphics/Palette.svelte";
  import Zoot from "./Zoot.svelte";

  export let windowScroll: number;

  let containerRef: HTMLElement;
  let containerHeight: number;
  let opacity = 0;
  let heightdisplay: number;

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

  function handleHover(type: string) {
    console.log(type);
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
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div class="lil-bar">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="icon"
      style="left: 20%;"
      on:mouseover={() => {
        handleHover("zoot");
      }}
    >
      <Computer />
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="icon"
      style="left: 50%;"
      on:mouseover={() => {
        handleHover("plan");
      }}
    >
      <Calendar />
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="icon"
      style="left: 80%;"
      on:mouseover={() => {
        handleHover("paint");
      }}
    >
      <Palette />
    </div>
  </div>
  <Zoot />
</div>

<style>
  .portfolio-container {
    position: sticky;
    box-sizing: border-box;
    padding: 80px;
    z-index: 3;
    height: 100vh;
    background-color: rgb(14, 0, 39);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lil-bar {
    position: absolute;
    background-color: white;
    width: 350px;
    height: 1px;
    top: 75px;
  }

  .icon {
    cursor: pointer;
    position: absolute;
    top: -30px;
    transform: translateX(-50%);
    background-color: rgb(14, 0, 39);
    height: 60px;
  }

  .icon:hover {
    color: rgb(238, 189, 253);
  }
</style>
