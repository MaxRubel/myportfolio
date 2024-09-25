<section class="plan-chad-container">
  <div class="video-background-layer">
    <div class="video-container">
      <video
        src="paint-new-multi.mp4"
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
      <div><h1>Group Doodles</h1></div>
      <div>
        <a
          href="https://paint-ts.netlify.app"
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
    <p>
      Group Doodles is a collaborative whiteboarding tool. It uses WebRTC to
      facilitate a real time/multiplayer experience on the canvas.
    </p>
    <div class="middle-text">
      <div class="col1">
        <h2>Features</h2>
        <p>
          <li>HTML Canvas Drawing</li>
          <li>Moveable Text Boxes</li>
          <li>Undo/Redo System</li>
          <li>Color Palettes</li>
          <li>A Database for storing drawings and color palettes</li>
          <li>A multiplayer/collaboration feature</li>
        </p>
      </div>
      <div class="col2">
        <h2>Skills I Used</h2>
        <div class="skills-container">
          <li>Javascript/Typescript</li>
          <li>Svelte</li>
          <li>Python/Django</li>
          <li>Go</li>
          <li>Websockets</li>
          <li>WebRTC</li>
          <li>JS Libraries: Perfect-Freehand, Iro-Color</li>
        </div>
      </div>
    </div>
    <div class="middle-text" style="margin-top: 0px;">
      <div class="col1" style="padding-top: 0px;">
        <h2>What I Learned</h2>
        <p>
          <li>Typescript!</li>
          <li>The HTML Canvas API</li>
          <li>Integrating Google-Auth with Svelte</li>
          <li>Optimizing data transmission</li>
        </p>
      </div>
      <div class="col2"></div>
    </div>
  </div>
</section>

<style>
  .plan-chad-container {
    flex: 1;
    width: 100vw;
    height: 100%;
    color: white;
  }

  h1 {
    margin: 1rem 0rem;
  }

  h2 {
    margin: 0.5rem 0rem;
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
    gap: 0.5rem;
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
    padding: 0rem 4.5rem;
  }

  .responsive-video {
    width: 100%;
    margin: -1rem 0px;
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
      text-align: center;
    }

    .text-container {
      flex: 1;
      padding: 0rem 5rem;
    }

    .col1,
    .col2 {
      flex: 1 1 100%;
      padding-left: 0;
    }

    .col2 {
      margin-top: -1.6rem;
    }
  }
  /* .check {
    background-color: rgb(31, 33, 33);
    color: white;
    transition: all 0.3s ease;
    border: 1px solid rgb(77, 77, 77);
    z-index: 10;
  }

  .check:hover {
    background-color: rgb(38, 38, 38);
  } */
</style>
