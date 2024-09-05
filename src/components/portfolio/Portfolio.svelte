<script lang="ts">
  import { onMount } from "svelte";
  import PlanChad from "./PlanChad.svelte";
  import Zoot from "./Zoot.svelte";

  export let windowScroll: number;

  let position = 0;
  let opacity = 0;
  let containerRef: HTMLElement;
  let heightdisplay: number;
  let isResizing = false;
  let resizeTimeout: any;

  $: if (containerRef) {
    heightdisplay = containerRef.offsetTop;
  }

  $: if (containerRef) {
    heightdisplay = containerRef.offsetTop;
  }

  onMount(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleResize() {
    isResizing = true;
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      isResizing = false;
    }, 150) as unknown as number;
  }

  $: if (windowScroll) handleScroll();

  function handleScroll() {
    if (!containerRef) return;

    const startFadeIn = heightdisplay - heightdisplay * 0.5; //larger decimal is sooner
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
    if (position === -200) return;
    position -= 100;
  }

  function moveRight() {
    if (position === 0) return;
    position += 100;
  }
</script>

<div class="port" bind:this={containerRef} id="portfolio-container-anchor">
  <div
    class="carousel"
    class:no-transition={isResizing}
    style="transform: translateX({position}vw); 
    opacity: {opacity}"
  >
    <Zoot />
    <PlanChad />
  </div>
  <button class="left check hover" on:click={moveRight}>L</button>
  <button class="right check hover" on:click={moveLeft}>R</button>
</div>

<style>
  .port {
    position: relative;
    overflow: hidden;
    padding: 0;
    z-index: 5;
    box-sizing: border-box;
  }

  .carousel {
    display: flex;
    width: 200vw;
    height: 100%;
    transition: transform 1s ease;
  }

  .no-transition {
    transition: none !important;
  }

  .left,
  .right {
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
    z-index: 1;
    background-color: black;
    color: white;
    height: 70px;
    width: 2rem;
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    transition: all 0.3 ease;
  }

  .left {
    left: 1em;
  }

  .right {
    right: 1em;
  }

  .check {
    background-color: rgba(17, 23, 31, 0.755);
    color: white;
    transition: all 0.3s ease;
    /* border: 1px solid rgb(4, 51, 111); */
  }

  .hover:hover {
    background-color: rgb(10, 35, 57);
  }
</style>
