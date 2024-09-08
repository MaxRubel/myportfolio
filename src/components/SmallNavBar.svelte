<script lang="ts">
  import { onMount } from "svelte";
  import NavMenu from "../graphics/NavMenu.svelte";

  let navOpen = false;
  let hidden = true;

  function handleToggleNav() {
    navOpen = !navOpen;
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

  function scrollToAbout() {
    const element = document.getElementById("about-page-anchor");
    if (!element) {
      console.error("looking for about-page-anchor id for scroll");
      return;
    }
    scrollToElement(element, 2000);
    navOpen = false;
  }

  function scrollToPortfolio() {
    const element = document.getElementById("portfolio-container-anchor");
    if (!element) return;
    scrollToElement(element, 2000);
    navOpen = false;
  }

  function scrollToContactPage() {
    const element = document.getElementById("contact-page");
    if (!element) return;
    scrollToElement(element, 2000);
    navOpen = false;
  }

  function handleOffClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (target.id !== "nav-button" && navOpen) {
      navOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleOffClick);
    setTimeout(() => {
      hidden = false;
    }, 3000);
    return () => {
      document.removeEventListener("click", handleOffClick);
    };
  });
</script>

<div class="small-nav-container" style="opacity: {hidden ? '0' : '1'}">
  <button class="nav-button" id="nav-button" on:click={handleToggleNav}>
    <NavMenu />
  </button>
  {#if navOpen}
    <div class="menu-container roboto-thin">
      <ul class="no-bullets">
        <li>
          <button
            class="clear-button"
            id="nav-button"
            style="border-top-left-radius: 10px;
            border-top-right-radius: 10px;"
            on:click={scrollToAbout}
          >
            About
          </button>
        </li>
        <button
          id="nav-button"
          class="clear-button"
          on:click={scrollToPortfolio}
        >
          Portfolio
        </button>
        <li>
          <button
            class="clear-button"
            id="nav-button"
            style="border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;"
            on:click={scrollToContactPage}
          >
            Connect
          </button>
        </li>
      </ul>
    </div>
  {/if}
</div>

<style>
  .small-nav-container {
    top: 20px;
    left: 20px;
    position: fixed;
    z-index: 24;
    transition: all 4s ease;
  }

  .nav-button {
    background-color: rgba(255, 255, 255, 0.75);
    border: 2px solid black;
    transition: all 0.4s ease;
    height: 44px;
  }

  .nav-button:hover {
    background-color: rgb(196, 196, 196, 0.75);
  }

  .no-bullets {
    list-style-type: none;
  }

  .menu-container {
    position: fixed;
    z-index: 24;
    top: 80px;
    background-color: rgba(255, 255, 255);
    border: 2px solid black;
    border-radius: 10px;
    display: block;
  }

  .clear-button {
    background-color: transparent;
    border-radius: 0px;
    width: 150px;
    display: flex;
    transition: all 0.2s ease;
  }

  .clear-button:hover {
    background-color: rgba(203, 203, 203, 0.686);
  }
</style>
