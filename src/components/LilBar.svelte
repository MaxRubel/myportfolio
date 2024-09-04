<script lang="ts">
  import Calendar from "../graphics/Calendar.svelte";
  import Computer from "../graphics/Computer.svelte";
  import Palette from "../graphics/Palette.svelte";

  function handleHover(type: string) {
    console.log(type);
  }
</script>

<div class="lil-bar-container">
  <button class="lilbutton">Prev</button>
  <div class="lil-bar">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="icon"
      style="left: 20%;"
      on:mouseover={() => {
        handleHover("zoot");
      }}
    >
      <Computer />
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="icon"
      style="left: 50%;"
      on:mouseover={() => {
        handleHover("plan");
      }}
    >
      <Calendar />
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="icon"
      style="left: 80%;"
      on:mouseover={() => {
        handleHover("paint");
      }}
    >
      <Palette />
    </div>
  </div>
  <button class="lilbutton">Next</button>
</div>

<style>
  .lil-bar-container {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    border: 1px solid white;
    border-radius: 15px;
  }

  .lil-bar {
    position: relative;
    background-color: white;
    width: 200px;
    height: 1px;
    margin-right: 10px;
  }

  .lilbutton {
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
  }

  .icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(14, 0, 39);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon:hover {
    color: rgb(238, 189, 253);
  }
</style>
