<div class="plan-chad-container">
  <div class="video-background-layer">
    <div class="video-container">
      <video
        src="painttsdemo.mp4"
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
      <div><h1>Group-Doodles</h1></div>
      <div>
        <a
          href="https://planchad.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="check">Check out the demo!</button>
        </a>
      </div>
    </div>
    <p>
      Group-Doodles is a multiplayer whiteboarding tool. It uses an HTML canvas
      element to render brush strokes, and it has moveable textboxes. There is
      also an undo/redo system, and a system for creating color paletes.
    </p>
    <p style="margin-top: 2rem;">
      Multiplayer mode allows many users to access the same canvas in real time.
      It uses peer-to-peer WebRTC connections to handle the sharing of data.
    </p>
    <div class="middle-text">
      <div class="col1">
        <h2>What I Learned</h2>
        <p>
          <li>Typescript!</li>
          <li>The HTML Canvas API</li>
          <li>Integrating Google-Auth with Svelte</li>
          <li>Optimizing data transmission</li>
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
  </div>
</div>

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
    padding: 0px 4rem;
  }

  .responsive-video {
    width: 100%;
    margin: -1rem 0px;
    transform-origin: center center;
    object-fit: fill;
    /* object-position: center center; */
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
