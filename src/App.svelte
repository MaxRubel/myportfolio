<script lang="ts">
  import { onMount } from "svelte";
  import Hero from "./components/Hero.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Portfolio from "./components/portfolio/Portfolio.svelte";
  import MyWork from "./components/MyWork.svelte";

  let windowScroll = window.scrollY;

  function handleWindowScroll(e: Event) {
    windowScroll = window.scrollY;
  }

  onMount(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });
</script>

<main>
  <NavBar />
  <Hero {windowScroll} />
  <!-- <About {windowScroll} /> -->
  <MyWork {windowScroll} />
  <Portfolio {windowScroll} />
</main>
