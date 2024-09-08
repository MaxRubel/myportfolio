<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Flower from "../graphics/Flower.svelte";

  export let windowScroll;
  export let isResizing;
  export let count;

  let containerHeight: number;
  let containerRef: HTMLElement;
  let blueHeight;

  let first = false;
  let second = false;
  let third = false;

  let time1: ReturnType<typeof setTimeout>;
  let time2: ReturnType<typeof setTimeout>;
  let time3: ReturnType<typeof setTimeout>;

  let opacity = 1;
  let blueOpacity = 0;

  $: if (count) containerHeight = containerRef?.offsetHeight;
  $: if (count) blueHeight = containerRef?.offsetHeight;

  onMount(() => {
    time1 = setTimeout(() => {
      first = true;
    }, 1);

    time2 = setTimeout(() => {
      second = true;
    }, 800);

    time3 = setTimeout(() => {
      third = true;
    }, 1400);
  });

  $: if (windowScroll || count) handleScroll();

  function scrollToElement(element: HTMLElement, duration: number) {
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top + start;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, target, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  function scrollToPortfolio() {
    const element = document.getElementById("portfolio-container-anchor");
    if (!element) return;
    scrollToElement(element, 3000);
  }

  function handleScroll() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeOut = 10;
    const endFadeOut = containerHeight - containerHeight * 0.25;

    if (windowScroll <= startFadeOut) {
      opacity = 1;
      blueOpacity = 0;
    } else if (windowScroll <= endFadeOut) {
      opacity = 1 - (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
      blueOpacity = (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
    } else {
      opacity = 0;
      blueOpacity = 1;
    }

    opacity = Math.max(0, Math.min(opacity, 1));
    blueOpacity = Math.max(0, Math.min(blueOpacity, 1));
  }

  onDestroy(() => {
    if (time1) clearInterval(time1);
    if (time2) clearInterval(time2);
    if (time3) clearInterval(time3);
  });

  $: console.log("height: ", containerRef?.offsetHeight);
</script>

<div class="fade" style="opacity: {blueOpacity}; height: {containerHeight}px" />
<div
  class="hero-wrapper roboto-medium"
  bind:this={containerRef}
  bind:clientHeight={containerHeight}
  class:isResizing
>
  <div class="hero-container" style="opacity: {opacity}">
    <div class="left-box">
      <div class="top-left">
        <h1 class="hide trans roboto-bold" class:isResizing class:first>Hi,</h1>
        <h1 class="hide trans roboto-bold" class:isResizing class:second>
          I'm Max.
        </h1>
      </div>
      <div class="top-left" style="margin-top: 2rem;">
        <p class="hide" style="font-size: 16pt;" class:isResizing class:third>
          I'm a musician, audio engineer, and aspiring software developer.
        </p>
      </div>
      <div class="hide marginTop" class:isResizing class:third>
        <button class="hero-button roboto-bold" on:click={scrollToPortfolio}>
          Checkout My Work
        </button>
      </div>
      <div class="mid-left"></div>
    </div>
    <div class="right-box hide" class:isResizing class:third>
      <!-- <div class="opaque"></div> -->
      <img class="myFace" src="myface.jpeg" alt="" />
    </div>
  </div>
</div>

<style>
  p {
    font-size: 14pt;
  }
  h1 {
    margin: 0.5rem 0rem;
    transition: all 3s ease;
  }

  .marginTop {
    margin-top: 4rem;
  }

  .hero-wrapper {
    position: relative;
    min-height: 100vh;
    height: auto;
    width: 100%;
  }

  .hero-container {
    width: 100%;
    max-width: 100vw;
    display: flex;
    position: relative;
    z-index: 1;
    background-color: white;
    box-sizing: border-box;
    min-height: 100vh;
    height: auto;
  }

  .fade {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 204, 255);
    z-index: 1;
    width: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .left-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5% 10%;
    box-sizing: border-box;
  }

  .right-box {
    flex: 1;
    position: relative;
    box-sizing: border-box;
    padding: 5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* .opaque {
    position: absolute;
    top: 5rem;
    left: 1rem;
    right: 1rem;
    bottom: 5rem;
    background-color: #330303;
    opacity: 0.2;
    z-index: 1;
  } */

  .myFace {
    position: relative;
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 0;
    min-height: 300px;
  }

  .hide {
    opacity: 0;
    transition: all 4s ease;
  }

  .first,
  .second,
  .third {
    opacity: 1;
  }

  .isResizing {
    transition: none !important;
  }

  @media screen and (max-width: 768px) {
    .hero-container {
      flex-direction: column;
      padding: 0.5em;
    }

    .left-box,
    .right-box {
      width: 100%;
    }

    .left-box {
      padding: 10% 5%;
      justify-content: center;
    }

    .right-box {
      padding-top: 0px;
    }

    .marginTop {
      margin-top: 3rem;
    }
  }
</style>
