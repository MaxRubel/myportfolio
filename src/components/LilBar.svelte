<script lang="ts">
  import Calendar from "../graphics/Calendar.svelte";

  import Computer from "../graphics/Computer.svelte";
  import Palette from "../graphics/Palette.svelte";

  function handleHover(type: string) {
    console.log(type);
  }
</script>

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

<style>
  .lil-bar {
    position: absolute;
    background-color: white;
    width: 350px;
    height: 1px;
    top: 75px;
  }

  .icon {
    cursor: pointer;
    position: absolute;
    top: -30px;
    transform: translateX(-50%);
    background-color: rgb(14, 0, 39);
    height: 60px;
  }

  .icon:hover {
    color: rgb(238, 189, 253);
  }
</style>
