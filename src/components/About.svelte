<script lang="ts">
  import { onMount } from "svelte";

  export let windowScroll: number;

  let containerRef: HTMLElement;
  let opacity = 0;
  let heightdisplay = 900;
  $: heightdisplay = containerRef?.offsetTop;

  $: if (windowScroll) handleScroll();
  // $: if (windowScroll) handleFadeOut();

  function handleScroll() {
    console.log(containerRef);
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeIn = heightdisplay - heightdisplay * 0.75; // Start fading in 200px before heightdisplay
    const endFadeIn = heightdisplay; // End fading in 100px after heightdisplay
    const startFadeOut = heightdisplay; // Start fading out 300px after heightdisplay
    const endFadeOut = heightdisplay + heightdisplay * 0.75; // End fading out 600px after heightdisplay

    if (windowScroll <= startFadeIn) {
      opacity = 0; // Fully transparent before reaching startFadeIn
    } else if (windowScroll <= endFadeIn) {
      // Fade in
      const progress = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
      opacity = Math.sin((progress * Math.PI) / 2);
    } else if (windowScroll <= startFadeOut) {
      opacity = 1; // Fully opaque between endFadeIn and startFadeOut
    } else if (windowScroll <= endFadeOut) {
      // Fade out
      const progress =
        (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
      opacity = Math.cos((progress * Math.PI) / 2);
    } else {
      opacity = 0; // Fully transparent after endFadeOut
    }

    // Ensure opacity is between 0 and 1
    opacity = Math.max(0, Math.min(opacity, 1));
    console.log("opacity: ", opacity);
  }

  // function handleFadeOut() {
  //   const startFadeOut = heightdisplay + 400; // Scroll position where fading starts
  //   const endFade = 2000; // Scroll position where fading ends

  //   // Ensure scrollY is within our defined range
  //   const clampedScrollY = Math.max(startFadeOut, Math.min(scrollY, endFade));

  //   // Calculate the opacity
  //   const opacityCalc =
  //     1 - (clampedScrollY - startFadeOut) / (endFade - startFadeOut);

  //   // Ensure opacity is between 0 and 1
  //   opacity = Math.max(0, Math.min(opacityCalc, 1));
  // }
</script>

<!-- <div class="placeholder" class:visible></div> -->
<div
  class="about-container"
  bind:this={containerRef}
  style="opacity: {opacity};"
>
  <div class="about-left centered">
    <img class="max-image" src="studioMax.jpg" alt="" />
  </div>
  <div class="about-right">
    <div class="about-content">
      <h1>About Me</h1>
      <p>
        In 2014 I graduated from Berklee College of Music and moved to Nashville
        to pursue a career in music. I founded my own commercial studio called
        Wild Road Recording and have worked with hundreds of diverse artists
        including bands Rainbow Kitten Surprise, 99 Neighbors, and Rule.
      </p>
      <p>
        My work has appeared in content by Warner Music, Sony Playstation, and
        Mercedes-Benz.
      </p>
      <p>
        In 2023, I enrolled in Nashville Software School, and over the course of
        that year to the present, I discovered my love for coding. I have
        developed strong fundamental skills in Javascript/Typescript, Python,
        and Go over the course of developing several small apps, and I plan to
        continue learning by diving into C++ and lower level programming.
      </p>
      <div style="margin-top: 3rem;">
        <button class="hero-button">Explore My Work</button>
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
    height: 100vh;
    z-index: 10;
    display: flex;
    box-sizing: border-box;
    width: 100vw;
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

  .about-right {
    width: 50%;
    box-sizing: border-box;
    padding: 5%;
    padding-left: 2.5%;
    /* padding-bottom: 20%; */
  }

  .max-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
