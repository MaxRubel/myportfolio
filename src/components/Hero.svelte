<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let windowScroll;

  let containerHeight: number;
  let containerRef: HTMLElement;

  let first = false;
  let second = false;
  let third = false;

  let time1: ReturnType<typeof setTimeout>;
  let time2: ReturnType<typeof setTimeout>;
  let time3: ReturnType<typeof setTimeout>;

  let opacity = 1;

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

  $: if (windowScroll) handleScroll();

  function handleScroll() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeOut = 250;
    const endFadeOut = containerHeight; // Fully faded out by the time we've scrolled the height of the container

    if (windowScroll <= startFadeOut) {
      opacity = 1; // Fully opaque at the top
    } else if (windowScroll <= endFadeOut) {
      // Linear fade out
      opacity = 1 - (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
    } else {
      opacity = 0; // Fully transparent after scrolling past the container height
    }

    opacity = Math.max(0, Math.min(opacity, 1));
  }

  onDestroy(() => {
    if (time1) clearInterval(time1);
    if (time2) clearInterval(time2);
    if (time3) clearInterval(time3);
  });
</script>

<div class="fade"></div>
<div
  class="hero-wrapper roboto-medium"
  bind:this={containerRef}
  bind:clientHeight={containerHeight}
>
  <div class="hero-container" style="opacity: {opacity}">
    <div class="left-box">
      <div class="top-left">
        <h1 class="hide trans roboto-bold" class:first>Hi,</h1>
        <h1 class="hide trans roboto-bold" class:second>I'm Max.</h1>
      </div>
      <div class="top-left" style="margin-top: 2rem;">
        <p class="hide" class:third>
          I'm a music producer in Nashville, Tennessee. Last year, I decided to
          study web development at Nashville Software School where I discovered
          my passion for coding. This portfolio represents the work I am most
          proud of.
        </p>
      </div>
      <div style="margin-top: 4rem;" class="hide" class:third>
        <button class="hero-button roboto-bold">Explore My Work</button>
      </div>
      <div class="mid-left"></div>
    </div>
    <div class="right-box hide" class:third>
      <div class="opaque"></div>
      <img class="myface" src="myface.jpeg" alt="" />
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
  .hero-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    z-index: 1;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
  }

  .fade {
    position: absolute;
    z-index: 0;
    top: 1;
    left: 1;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0, 204, 255);
  }

  .left-box {
    height: 100%;
    flex: 0 0 55%; /* This sets the width to 40% and prevents growing or shrinking */
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 19% 10%;
    box-sizing: border-box; /* This ensures padding is included in the 40% width */
  }

  .right-box {
    height: 100%;
    background-color: rgb(52, 60, 60);
    flex: 0 0 45%; /* This sets the width to 60% and prevents growing or shrinking */
  }

  .myface {
    width: 100%; /* Change this */
    height: 100%; /* Change this */
    object-fit: cover; /* Change this */
  }

  .hide {
    opacity: 0;
    transition: all 4s ease;
  }

  .opaque {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #330303;
    opacity: 0.2;
  }

  .first,
  .second,
  .third {
    opacity: 1;
  }

  /* .fixed {
    position: fixed;
  } */
</style>
