<script lang="ts">
  import { onMount } from "svelte";
  import PlanChad from "./PlanChad.svelte";
  import Zoot from "./Zoot.svelte";
  import GroupDoodles from "./GroupDoodles.svelte";
  import LeftArrow from "../../graphics/LeftArrow.svelte";
  import RightArrow from "../../graphics/RightArrow.svelte";

  export let windowScroll: number;
  export let count;

  let position = 0;
  let opacity = 0;
  let containerRef: HTMLElement;

  let containerHeight: number;
  let offsetTop: number;

  $: {
    if (containerRef && count) {
      offsetTop = containerRef.offsetTop;
      containerHeight = containerRef.offsetHeight;
    }
  }

  $: offsetTop = containerRef?.offsetTop;
  $: containerHeight = containerRef?.offsetHeight;

  let isResizing = false;
  let resizeTimeout: any;

  onMount(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleResize() {
    isResizing = true;
    handleScroll();
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      isResizing = false;
    }, 150) as unknown as number;
  }

  $: if (windowScroll) handleScroll();

  let buttonsVisible = false;

  function handleScroll() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeIn = offsetTop - containerHeight * 0.7;
    const endFadeIn = offsetTop;
    const startFadeOut = offsetTop + containerHeight * 0.7;
    const endFadeOut = offsetTop + containerHeight * 0.8;

    if (windowScroll <= startFadeIn) {
      opacity = 0; // Fully transparent before reaching startFadeIn
    } else if (windowScroll <= endFadeIn) {
      // Linear fade in
      opacity = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else if (windowScroll <= startFadeOut) {
      opacity = 1; // Fully opaque between endFadeIn and startFadeOut
    } else if (windowScroll <= endFadeOut) {
      // Linear fade out
      opacity = 1 - (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
    } else {
      opacity = 0; // Fully transparent after endFadeOut
    }

    if (opacity > 0.4) {
      buttonsVisible = true;
    } else {
      buttonsVisible = false;
    }

    opacity = Math.max(0, Math.min(opacity, 1));
  }
  function moveRight() {
    if (position === -200) return;
    position -= 100;
  }

  function moveLeft() {
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
    <GroupDoodles />
  </div>
  <div class="fixed" style:opacity={buttonsVisible ? 1 : 0}>
    <button
      class="left check hover"
      on:click={moveLeft}
      style="opacity: {position === 0 ? '0' : '1'};"
    >
      <LeftArrow />
    </button>
    <button
      class="right check hover"
      on:click={moveRight}
      style="opacity: {position === -200 ? '0' : '1'};"
    >
      <RightArrow />
    </button>
  </div>
</div>

<style>
  .port {
    position: relative;
    overflow: hidden;
    padding: 0;
    z-index: 5;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: rgb(14, 0, 39);
  }

  .carousel {
    display: flex;
    width: 300vw;
    height: 100%;
    transition: transform 1s ease;
  }

  .no-transition {
    transition: none !important;
  }

  .fixed {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    transition: opacity 1s ease;
    padding: 0px 1rem;
  }

  .left,
  .right {
    z-index: 18;
    color: white;
    height: 70px;
    border: none;
    cursor: pointer;
    /* background-color: transparent; */
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    transition: all 0.3 ease;
    color: white;
    padding: 0;
    width: 2.5rem;
    height: 90px;
  }

  .check {
    background-color: rgba(18, 17, 31, 0.755);
    color: white;
    transition: all 0.3s ease;
  }

  .hover:hover {
    background-color: rgb(10, 11, 57);
  }
</style>
