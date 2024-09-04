<script lang="ts">
  import { onMount } from "svelte";
  import About from "./components/About.svelte";
  import Hero from "./components/Hero.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Transition from "./components/Transition.svelte";
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

<main style="height: 100%; min-height: 200vh; ">
  <NavBar />
  <Hero {windowScroll} />
  <About {windowScroll} />
  <Transition {windowScroll} />
  <MyWork {windowScroll} />
</main>
