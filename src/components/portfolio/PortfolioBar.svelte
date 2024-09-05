<script>
  import { get } from "svelte/store";
  import { addedStore } from "../../../stores/ProjectViewingStore";
  import { projectViewing } from "../../../stores/ProjectViewingStore";
  import ArrowRight from "../../graphics/arrowRight.svelte";
  import LeftArrow from "../../graphics/leftArrow.svelte";

  $: added = $addedStore;

  function handleTitle() {
    switch (get(addedStore)) {
      case 100:
        projectViewing.set("ZOOT");
        break;
      case 0:
        projectViewing.set("planChad");
        break;
      case -100:
        projectViewing.set("Group-Doodles");
    }
  }

  function moveLeft() {
    if (added === -100) return;
    addedStore.set(added - 100);
    handleTitle();
  }

  function moveRight() {
    if (added === 100) return;
    addedStore.set(added + 100);
    handleTitle();
  }

  let prevButton = false;

  $: {
    if ($projectViewing !== "ZOOT") {
      setTimeout(() => {
        prevButton = true;
      }, 200);
    } else {
      setTimeout(() => {
        prevButton = false;
      }, 200);
    }
  }
</script>

<div class="portfolio-bar">
  <div class="buttons-port">
    {#if prevButton}
      <button class="switch-buttons" on:click={moveRight}>
        <LeftArrow /> &nbsp; Prev</button
      >
    {/if}
    <button class="switch-buttons" on:click={moveLeft}>
      Next &nbsp; <ArrowRight />
    </button>
  </div>
</div>

<style>
  .portfolio-bar {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    font-size: 18pt;
    display: flex;
  }

  .switch-buttons {
    height: 34px;
    color: white;
    font-size: 12pt;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid rgb(23, 175, 162);
    transition: all 0.3s ease;
  }

  .switch-buttons:hover {
    border: 1px solid rgb(18, 112, 104);
    color: white;
  }

  .buttons-port {
    display: flex;
    gap: 1rem;
  }
</style>
