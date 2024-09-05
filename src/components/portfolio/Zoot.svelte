<script>
  import {
    projectViewing,
    addedStore,
  } from "../../../stores/ProjectViewingStore";
  import PortfolioBar from "../portfolio/PortfolioBar.svelte";
</script>

<div
  class="zoot-container"
  style="transform: translateX({$addedStore -
    100}vw); opacity: {$projectViewing === 'ZOOT' ? '1' : '0'}"
>
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
    <PortfolioBar />
    <div class="title-row">
      <div><h1>ZOOT</h1></div>
      <div>
        <a
          href="https://zooty.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="check">Check out the demo!</button>
        </a>
      </div>
    </div>
    <p>
      Zoot is a multi-room video conferencing app. It uses Svelte for the
      front-end, and a websocket server written in Go for the back-end. The
      server stores data in memory in the form of maps which hold pointers to
      all of the room member's websocket connections. When a new user joins the
      room, they receive the IDs of each user in the room, and the client
      negotiates a Web-RTC connection in a loop for every user. Zoot also makes
      use of several browser apis that handle camera and audio streaming.
    </p>
    <div class="middle-text">
      <div class="col1">
        <h2>What I Learned</h2>
        <p>
          <li>How to negotiate web-RTC connections</li>
          <li>How to store websocket connections in Go</li>
          <li>Deploying with Docker!</li>
        </p>
      </div>
      <div class="col2">
        <h2>Skills I Used</h2>
        <div class="skills-container">
          <li>Javascript</li>
          <li>Svelte</li>
          <li>Go</li>
          <li>Websockets</li>
          <li>Web-RTC</li>
          <li>Streaming Media</li>
        </div>
      </div>
    </div>
    <div class="middle-text">
      <div class="col1"></div>
    </div>
  </div>
</div>

<style>
  .zoot-container {
    flex-direction: column;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.7s ease;
    padding: 1rem 3em;
  }

  h1 {
    margin: 1rem 0rem;
  }

  h2 {
    margin: 0.5rem 0rem;
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
    margin-top: 40px;
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
    /* padding-left: 0px; */
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
    margin: -1rem 0px;
    /* max-height: 500px; */
    transform-origin: center center;
    object-fit: fill;
    /* object-position: center center; */
  }

  .check {
    background-color: rgb(136, 227, 243);
    color: black;
    transition: all 0.3s ease;
  }
  .check:hover {
    background-color: rgb(136, 202, 214);
  }

  @media (max-width: 670px) {
    .middle-text {
      flex-direction: column;
    }

    .col1,
    .col2 {
      flex: 1 1 100%;
      padding-left: 0px;
    }

    .col2 {
      margin-top: -1.6rem;
    }
  }
</style>
