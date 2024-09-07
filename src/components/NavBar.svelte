<script lang="ts">
  import { onMount } from "svelte";

  let slideIn = false;
  let yValue = 0;

  function handleMouseMove(e: MouseEvent) {
    yValue = e.clientY;
  }

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

  function scrollToContactPage() {
    const element = document.getElementById("contact-page");
    if (!element) return;
    scrollToElement(element, 2000);
  }

  $: {
    if (yValue < 120) {
      slideIn = true;
    } else {
      slideIn = false;
    }
  }

  onMount(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });
</script>

<div
  class="nav-container roboto-thin"
  style="top: {slideIn ? '0px' : '-63px'};"
>
  <div class="left-nav">
    <div>MAX RUBEL</div>
  </div>
  <div class="right-nav roboto-thin" style="font-size: 12pt;">
    <button class="none" on:click={scrollToPortfolio}>About</button>
    <button class="none" on:click={scrollToPortfolio}>Portfolio</button>
    <button class="none" on:click={scrollToContactPage}>Conncect</button>
  </div>
</div>

<style>
  .nav-container {
    display: flex;
    color: white;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    font-size: 12pt;
    background: rgba(15, 15, 15, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: 100;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: fixed;
    left: 0;
    right: 0;
    height: 3em;

    z-index: 1000;
    opacity: 1;
    transition: all 4s ease;
    transition: top 0.6s ease;
  }

  .left-nav {
    width: 55%;
    padding-left: 10%;
  }

  .right-nav {
    width: 45%;
    display: flex;
    justify-content: end;
    gap: 30px;
    padding-right: 3em;
  }

  .none {
    color: white;
    background-color: transparent;
    transition: all 0.4s ease;
    padding: 0px;
  }

  .none:hover {
    color: rgb(215, 215, 215);
  }
</style>
