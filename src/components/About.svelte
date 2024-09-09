<script lang="ts">
  import { onMount } from "svelte";

  export let windowScroll: number;
  export let count;

  let containerRef: HTMLElement;
  let opacity = 0;
  let offsetTop: number;
  let containerHeight: number;
  let windowWidth: number;

  $: if (count && containerRef) {
    offsetTop = containerRef.offsetTop;
    containerHeight = containerRef.offsetHeight;
    windowWidth = window.innerWidth;
  }

  $: if (windowScroll || count) handleScroll();

  function handleScroll() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeIn = offsetTop - containerHeight * 0.7;
    const endFadeIn = offsetTop - containerHeight * 0.2;
    const startFadeOut = offsetTop + containerHeight * 0.8;
    const endFadeOut = offsetTop + containerHeight + 200;

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

    opacity = Math.max(0, Math.min(opacity, 1));
  }

  function scrollToElement(element: HTMLElement, duration: number) {
    const start = window.scrollY;
    const target = element.getBoundingClientRect().top + start;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, target - start, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
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
    scrollToElement(element, 2000);
  }

  let position = "";

  $: {
    if (windowScroll > offsetTop + containerHeight) {
      position = "";
    } else {
      position = "sticky";
    }
    if (windowWidth < 510) {
      position = "";
    }
  }
</script>

<!-- <div class="placeholder" class:visible></div> -->
<div
  class="about-container roboto-regular"
  id="about-page-anchor"
  bind:this={containerRef}
  style="opacity: {opacity};
    position: {position}"
>
  <div class="about-left centered">
    <img class="max-image" src="studioMax.jpg" alt="" />
  </div>
  <div class="about-right">
    <div class="about-content">
      <h1 style="margin-bottom: 2rem;" class="row-top">About Me</h1>
      <p>
        In 2014, I graduated from Berklee College of Music and moved to
        Nashville to pursue a career in music. I founded my own commercial
        recording studio called Wild Road Recording and have worked with
        hundreds of diverse artists including Rainbow Kitten Surprise, 99
        Neighbors, and Ruel.
      </p>
      <p>
        My work has appeared in content by Warner Music, Sony Playstation, and
        Mercedes-Benz.
      </p>
      <p>
        In 2023, I enrolled in Nashville Software School, and over the course of
        that year until the present, I discovered my passion for coding. I have
        developed strong fundamental skills in Javascript/Typescript, Python,
        and Go over the course of developing several small apps, and I plan to
        continue learning by diving into C++ and lower level programming.
      </p>
      <div class="check-row" style="margin-top: 3rem;">
        <button class="hero-button" on:click={scrollToPortfolio}>
          Check Out My Work
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .about-container {
    min-height: 100vh;
    height: 100%;
    z-index: 10;
    display: flex;
    box-sizing: border-box;
    z-index: 2;
    top: 0;
    background-color: white;
    color: black;
  }

  .about-left {
    width: 50%;
    padding: 5%;
    padding-right: 2.5%;
    box-sizing: border-box;
  }

  .about-content {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .about-right {
    width: 50%;
    box-sizing: border-box;
    padding: 5%;
    padding-left: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .max-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    .about-container {
      flex-direction: column;
      position: relative;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .about-content {
      gap: 1rem;
      padding: 0px 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .about-right {
      width: 100%;
      padding: 1rem;
    }

    .check-row {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 2rem;
    }

    .about-left {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .max-image {
      display: none;
    }

    .row-top {
      width: 100%;
      text-align: center;
      padding-top: 2rem;
    }

    .about-left {
      padding: 0;
    }

    h1 {
      font-size: 3rem;
    }
  }
</style>
