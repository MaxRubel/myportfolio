<script lang="ts">
  import { projectViewing } from "../../../stores/ProjectViewingStore";
</script>

<section class="zoot-container">
  <div class="video-background-layer">
    <div class="video-container">
      <video
        src="lil-zoot.mp4"
        class="responsive-video"
        autoplay
        muted
        loop
        playsinline
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <div class="text-container roboto-medium">
    <div class="title-row">
      <div><h1>ZOOT</h1></div>
      <div>
        <a
          href="https://zooty.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="check hero-button"
            style="background-color: transparent; height: 55px"
          >
            Checkout the demo!
          </button>
        </a>
      </div>
    </div>
    <p>Zoot is a multi-room video conferencing app for a web browser.</p>
    <p style="margin-top: 2rem;">
      It uses Svelte for the front-end, and connects to a websocket server (GO).
      The server stores all of the active users' websocket connections organized
      by conference room. When a new user joins the room, they negotiate a peer
      to peer connection (WebRTC) with the other users via these websocket
      connections. Zoot also uses browser APIs to handle camera and audio
      streaming.
    </p>
    <div class="middle-text">
      <div class="col1">
        <h2>What I Learned</h2>
        <p>
          <li>How to negotiate WebRTC connections</li>
          <li>How to store websocket connections in Go</li>
          <li>Deploying with Docker!</li>
        </p>
      </div>
      <div class="col2">
        <h2>Skills I Used</h2>
        <p class="skills-container">
          <li>Javascript</li>
          <li>Svelte</li>
          <li>Go</li>
          <li>Websockets</li>
          <li>WebRTC</li>
          <li>Streaming Media</li>
          <li>Docker</li>
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .zoot-container {
    flex: 1;
    width: 100vw;
    height: 100%;
    color: white;
    box-sizing: border-box;
  }

  .text-container {
    padding: 0rem 4.5rem;
  }

  h1 {
    margin: 1rem 0;
  }

  h2 {
    margin: 0.5rem 0;
  }

  .title-row {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 3rem;
  }

  .video-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .middle-text {
    display: flex;
    gap: 1rem;
  }

  .col1,
  .col2 {
    flex: 0 0 50%;
    padding: 1em;
  }

  .col1 {
    padding-left: 0px;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
  }

  .video-background-layer {
    flex-shrink: 0;
  }

  .text-container {
    flex: 1;
  }

  .responsive-video {
    width: 100%;
    margin: -1rem 0;
    transform-origin: center center;
    object-fit: fill;
  }

  @media (max-width: 670px) {
    h1 {
      margin-bottom: 1rem;
    }
    .middle-text {
      flex-direction: column;
    }

    .title-row {
      flex-direction: column;
      align-items: center;
      gap: 0px;
      margin-bottom: 1rem;
    }

    .col1,
    .col2 {
      flex: 1 1 100%;
      padding-left: 0;
    }

    .col2 {
      margin-top: -1.6rem;
    }

    .text-container {
      flex: 1;
      padding: 0rem 5rem;
    }
  }
  .check {
    background-color: rgb(31, 33, 33);
    color: white;
    transition: all 0.3s ease;
    border: 1px solid rgb(77, 77, 77);
    z-index: 10;
    padding: 0 1rem;
  }

  .check:hover {
    background-color: rgb(38, 38, 38);
  }
</style>
