<div class="zoot-container centered">
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
    <h1>Zoot</h1>
    <p>
      Zoot is a multi-room video conferencing app. It uses Svelte for the
      frontend, and a websocket server written in Go for the backend. The server
      stores data in memory in the form of maps which hold all of the room's
      client's websocket connections. When a new user joins the room, they
      receive the IDs of each user in the room, and the client negotiates a
      Web-RTC connection in a loop for every user. Zoot also makes use of
      several browser apis that handle camera and audio streaming.
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
          <div>Javascript</div>
          <div>Svelte</div>
          <div>Go</div>
          <div>Websockets</div>
          <div>Web-RTC</div>
          <div>Streaming Media</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .zoot-container {
    flex-direction: column;
  }

  h1 {
    margin: 1rem 0rem;
  }

  h2 {
    margin: 0.5rem 0rem;
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

  .responsive-video {
    width: 100%;
    display: block;
    margin: -1rem 0px;
    max-height: 450px;
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
