<script lang="ts">
  export let windowScroll: number;
  export let count;

  let containerRef: HTMLElement;
  let containerHeight: number;
  let windowInnerHeight = 0;

  let opacityBG = 0;
  let opacityFont = 0;
  let offsetTop = 0;

  $: {
    if (containerRef && count) {
      offsetTop = containerRef.offsetTop;
    }
  }

  function handleScrollFont() {
    if (!containerRef) return;
    const startFadeIn = offsetTop - windowInnerHeight * 0.2;
    const endFadeIn = offsetTop;
    const startFadeOut = offsetTop + windowInnerHeight * 0.2;
    const endFadeOut = offsetTop + windowInnerHeight * 0.4;

    if (windowScroll <= startFadeIn) {
      opacityFont = 0;
    } else if (windowScroll < endFadeIn) {
      opacityFont = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else if (windowScroll <= startFadeOut) {
      opacityFont = 1;
    } else if (windowScroll <= endFadeOut) {
      opacityFont =
        1 - (windowScroll - startFadeOut) / (endFadeOut - startFadeOut);
    } else if (windowScroll > endFadeOut) {
      opacityFont = 0;
    }

    opacityFont = Math.max(0, Math.min(opacityFont, 1));
  }

  function handleScrollBG() {
    if (!containerRef) return;

    const startFadeIn = offsetTop - windowInnerHeight * 0.5;
    const endFadeIn = offsetTop;
    const hide = endFadeIn + windowInnerHeight;

    if (windowScroll <= startFadeIn) {
      opacityBG = 0;
    } else if (windowScroll <= endFadeIn) {
      opacityBG = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
    } else if (windowScroll > endFadeIn && windowScroll <= hide) {
      opacityBG = 1;
    } else if (windowScroll > hide) {
      opacityBG = 0;
    }

    console.table([
      {
        startFadeIn,
        windowScroll,
        endFadeIn,
        opacityBG,
        windowInnerHeight,
        hide,
      },
    ]);

    opacityBG = Math.max(0, Math.min(opacityBG, 1));
  }

  $: {
    if (windowScroll || windowInnerHeight || offsetTop || count) {
      handleScrollFont();
      handleScrollBG();
      windowInnerHeight = window.innerHeight;
    }
  }
</script>

<div
  class="transition prata-regular centered"
  bind:this={containerRef}
  bind:clientHeight={containerHeight}
  style="opacity: {opacityBG}; 
  height: {windowInnerHeight}px;
  position: {windowScroll > offsetTop + containerHeight ? '' : 'sticky'}
  "
>
  <div
    style="font-size: 72pt;
    opacity:{opacityFont};
    background-color: transparent"
  >
    My Work
  </div>
</div>

<style>
  .transition {
    top: 0;
    z-index: 4;
    background-color: rgb(14, 0, 39);
    color: white;
    justify-content: center;
    align-items: center;
    height: 100vh;
    pointer-events: none;
  }
</style>
