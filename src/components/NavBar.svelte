<script lang="ts">
  import { onMount } from "svelte";
  import { hideNavStore } from "../../stores/hideNavStore";

  let slideIn = false;
  let yValue = 0;
  let amHidden;

  $: amHidden = $hideNavStore;

  function handleMouseMove(e: MouseEvent) {
    yValue = e.clientY;
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
  style="top: {slideIn ? '0px' : '-63px'}; display: {amHidden
    ? 'none'
    : 'flex'};"
>
  <div class="left-nav">
    <div>MAX RUBEL</div>
  </div>
  <div class="right-nav roboto-thin" style="font-size: 12pt;">
    <div>PORTFOLIO</div>
    <div>CONNECT</div>
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
    height: 2.5em;

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
</style>
