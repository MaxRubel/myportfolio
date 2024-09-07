<script lang="ts">
  import { onMount } from "svelte";

  export let windowScroll: number;

  let containerRef: HTMLElement;
  let opacity = 0;
  let heightdisplay = 900;
  $: heightdisplay = containerRef?.offsetTop;

  $: if (windowScroll) handleScroll();

  function handleScroll() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeIn = heightdisplay - heightdisplay * 0.75;
    const endFadeIn = heightdisplay;
    const startFadeOut = heightdisplay + 300;
    const endFadeOut = heightdisplay + heightdisplay;

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
</script>

<!-- <div class="placeholder" class:visible></div> -->
<div
  class="about-container roboto-regular"
  bind:this={containerRef}
  style="opacity: {opacity};"
>
  <div class="about-left centered">
    <img class="max-image" src="studioMax.jpg" alt="" />
  </div>
  <div class="about-right">
    <div class="about-content">
      <h1 style="margin-bottom: 2rem;">About Me</h1>
      <p>
        In 2014 I graduated from Berklee College of Music and moved to Nashville
        to pursue a career in music. I founded my own commercial recording
        studio called Wild Road Recording and have worked with hundreds of
        diverse artists including bands Rainbow Kitten Surprise, 99 Neighbors,
        and Ruel.
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
        <button class="hero-button">Check Out My Work</button>
      </div>
    </div>
  </div>
</div>

<style>
  /* .placeholder {
    height: 100vh;
    width: 100%;
    background-color: rgb(0, 204, 255);
    opacity: 0;
    transition: all 2s ease;
  } */

  .about-container {
    min-height: 100vh;
    height: 100%;
    z-index: 10;
    display: flex;
    box-sizing: border-box;
    /* width: 100vw; */
    z-index: 2;
    position: sticky;
    top: 0;
  }

  .about-left {
    width: 50%;
    padding: 5%;
    padding-right: 2.5%;
    box-sizing: border-box;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .about-right {
    width: 50%;
    box-sizing: border-box;
    padding: 5%;
    padding-left: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: 100%;
    /* padding-bottom: 20%; */
  }

  .max-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    .about-container {
      flex-direction: column;
      position: relative;
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
  }
</style>
