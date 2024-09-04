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
      Zoot is a clone of a popular video conferencing app. It uses Svelte for
      the frontend, and a websocket server written in Go as the backend. The
      server stores each video chat room and a map of the room's clients in
      memory. When a new user joins the room, they receive the IDs of each user
      in the room, and the client uses that information to negotiate a Web-RTC
      connection with each one. There are additional controls to manipulate the
      camera and audio through browser based apis.
    </p>
    <h2>What I Learned:</h2>
    <p>
      <li>How to negotiate web-RTC connections</li>
      <li>How to store and manipulate websocket connections in GO</li>
      <li>Deploying with Docker!</li>
    </p>
    <h2>Skills used:</h2>
    <div class="skills-container">
      <button class="skills-button"> Javascript </button>
      <button class="skills-button"> Svelte </button>
      <button class="skills-button"> Go </button>
      <button class="skills-button"> Websockets </button>
      <button class="skills-button"> Web-RTC </button>
      <button class="skills-button"> Media Streaming </button>
    </div>
  </div>
</div>

<style>
  .zoot-container {
    flex-direction: column;
  }

  .video-container {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    width: 100%;
  }

  .responsive-video {
    width: 100%;
    height: auto;
    display: block;
    max-height: 680px;
  }

  .skills-button {
    border-radius: 10px;
    padding: 0.6em 1.2em;
    background-color: rgb(0, 55, 92);
    color: rgb(207, 224, 255);
    cursor: default;
    transition: all 0.7s ease;
    height: 44px;
    width: auto;
  }

  .skills-button:hover {
    background-color: rgb(0, 40, 66);
  }

  .skills-button:focus,
  .skills-button:focus-visible {
    outline: none;
  }
</style>
