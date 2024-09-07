<script lang="ts">
  import { onMount } from "svelte";
  import Hero from "./components/Hero.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Portfolio from "./components/portfolio/Portfolio.svelte";
  import MyWork from "./components/MyWork.svelte";
  import Contact from "./components/Contact.svelte";
  import BlackSlot from "./components/BlackSlot.svelte";
  import About from "./components/About.svelte";

  let windowScroll = window.scrollY;
  let isResizing = false;
  let resizeTimeout: any;

  function handleWindowScroll(e: Event) {
    windowScroll = window.scrollY;
  }

  function handleResize() {
    isResizing = true;
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      isResizing = false;
    }, 150) as unknown as number;

    // windowScroll = window.scrollY;
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
  <NavBar />
  <Hero {windowScroll} {isResizing} />
  <About {windowScroll} />
  <MyWork {windowScroll} />
  <Portfolio {windowScroll} />
  <Contact {windowScroll} />
</main>
