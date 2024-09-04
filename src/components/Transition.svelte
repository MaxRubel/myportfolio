<script lang="ts">
  export let windowScroll;

  let containerRef: HTMLElement;
  let containerHeight: number;

  let opacityBG = 0;
  let opacityFont = 0;
  $: heightdisplay = containerRef?.offsetTop;

  function handleScrollFont() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeIn = heightdisplay - heightdisplay * 0.75;
    const endFadeIn = heightdisplay;
    const startFadeOut = heightdisplay + 5;
    const endFadeOut = heightdisplay + heightdisplay * 0.2;

    if (windowScroll <= startFadeIn) {
      opacityFont = 0; // Fully transparent before reaching startFadeIn
    } else if (windowScroll <= endFadeIn) {
      // Linear fade in
      opacityFont = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else if (windowScroll <= startFadeOut) {
      opacityFont = 1; // Fully opaque between endFadeIn and startFadeOut
    } else if (windowScroll <= endFadeOut) {
      // Linear fade out
      opacityFont =
        1 - (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
    } else {
      opacityFont = 0; // Fully transparent after endFadeOut
    }

    opacityFont = Math.max(0, Math.min(opacityFont, 1));
  }

  function handleScrollBG() {
    if (!containerRef) return;

    const windowScroll = window.scrollY;
    const startFadeIn = heightdisplay - heightdisplay * 0.75;
    const endFadeIn = heightdisplay - heightdisplay * 0.25;
    console.log("he", heightdisplay);

    if (windowScroll <= startFadeIn) {
      opacityBG = 0; // Fully transparent before reaching startFadeIn
    } else if (windowScroll <= endFadeIn) {
      // Linear fade in
      opacityBG = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else {
      opacityBG = 1; // Fully opaque after endFadeIn
    }

    opacityBG = Math.max(0, Math.min(opacityBG, 1));
  }

  $: {
    if (windowScroll) {
      handleScrollBG();
      handleScrollFont();
    }
  }
</script>

<div class="placeholder"></div>
<div
  class="transition prata-regular centered"
  bind:this={containerRef}
  bind:clientHeight={containerHeight}
  style="opacity: {opacityBG};"
>
  <div
    style="font-size: 72pt; opacity:{opacityFont}; background-color: transparent"
  >
    My Work
  </div>
</div>

<style>
  .transition {
    position: sticky;
    top: 0;
    z-index: 3;
    height: 100vh;

    background-color: rgb(14, 0, 39);
    color: white;
    display: flex;
  }
</style>
