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
      <div><h1>Group-Doodles!</h1></div>
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
      Group-Doodles is a multiplayer drawing app. I created this app to be a
      simple tool to whiteboard design concepts with other collaborators. It
      uses an HTML canvas element to render mouse movements into colored pixels
      on the dom, and there are also text boxes which are HTML elements that
      have many custom behaviors including the ability to be dragged,
      expanded/shrunk, colored, deleted, and automatically resized when typing.
      Several of these actions can also be done to multiple, selected boxes.
      There is also an undo/redo system, and an interface to save and edit color
      palettes. The multiplayer mode allows multiple users to edit the same
      canvas in real time. It uses peer to peer WebRTC connections, and when one
      user makes a change, it broadcasts that change to every other user in the
      room. I chose this method over a more reliable system (like a centralized
      websocket server that broadcasts state down to every user), so I wouldn't
      have to pay server costs while experimenting with the app (a busy
      websocket server is more expensive) and potentially scale it more easily.
    </p>
    <p style="margin-top: 2rem;">
      The front-end is written in Svelte, and there is a back-end written in
      Python/Django. The database stores drawings and color palettes, and allows
      registered users to share drawings. The websocket/signalling server for
      the WebRTC negotiations is a separate api written in Go.
    </p>
    <div class="middle-text">
      <div class="col1">
        <h2>What I Learned</h2>
        <p>
          <li>Typescript!</li>
          <li>The HTML Canvas API</li>
          <li>Integrating Google-Auth with Svelte</li>
          <li>Optimizing/throttling data transmission</li>
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
          <li>JS Libraries: Perfect-Freehand, Iro-Color, Svelte-Slider</li>
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
    background-color: rgb(148, 209, 245);
    color: black;
    transition: all 0.3s ease;
  }

  .check:hover {
    background-color: rgb(115, 167, 196);
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
