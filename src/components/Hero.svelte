<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Flower from "../graphics/Flower.svelte";

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
  let blueOpacity = 0;

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
    const startFadeOut = 10;
    const endFadeOut = containerHeight - containerHeight * 0.25;

    if (windowScroll <= startFadeOut) {
      opacity = 1;
      blueOpacity = 0;
    } else if (windowScroll <= endFadeOut) {
      // Linear fade out for white, fade in for blue
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
</script>

<div class="fade" style="opacity: {blueOpacity}"></div>
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
        <p class="hide" style="font-size: 16pt;" class:third>
          I'm a musician, audio engineer, and aspiring software developer.
        </p>
      </div>
      <div style="margin-top: 4rem;" class="hide" class:third>
        <button class="hero-button roboto-bold">Checkout My Work</button>
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
  .hero-wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
  }

  .hero-container {
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    z-index: 1;
    background-color: white;
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
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
  }
  .left-box {
    height: 100%;
    flex: 0 0 55%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 19% 10%;
    box-sizing: border-box;
  }

  .right-box {
    height: 100%;
    box-sizing: border-box;
    flex: 0 0 45%;
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
