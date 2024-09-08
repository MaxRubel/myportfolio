<script lang="ts">
  import { onMount } from "svelte";
  import Hero from "./components/Hero.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Portfolio from "./components/portfolio/Portfolio.svelte";
  import MyWork from "./components/MyWork.svelte";
  import Contact from "./components/Contact.svelte";
  import About from "./components/About.svelte";
  import SmallNavBar from "./components/SmallNavBar.svelte";

  let windowScroll = window.scrollY;
  let isResizing = false;
  let resizeTimeout: any;
  let count = 1;
  let windowWidth: number;

  function handleWindowScroll(e: Event) {
    windowScroll = window.scrollY;
  }

  function handleResize() {
    isResizing = true;
    clearTimeout(resizeTimeout);

    windowWidth = window.innerWidth;

    resizeTimeout = setTimeout(() => {
      isResizing = false;
    }, 150) as unknown as number;

    count = count + 1;
    windowScroll = window.scrollY;
  }

  onMount(() => {
    window.addEventListener("scroll", handleWindowScroll);
    window.addEventListener("resize", handleResize);
    if (resizeTimeout) clearTimeout(resizeTimeout);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

<main>
  {#if windowWidth >= 768}
    <NavBar />
  {:else}
    <SmallNavBar />
  {/if}
  <Hero {windowScroll} {isResizing} {count} />
  <About {windowScroll} {count} />
  <MyWork {windowScroll} {count} />
  <Portfolio {windowScroll} {count} />
  <Contact {windowScroll} {count} />
</main>
