<div class="plan-chad-container">
  <div class="video-background-layer">
    <div class="video-container">
      <video
        src="planchad3.mp4"
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
      <div><h1>PlanChad</h1></div>
      <div>
        <a
          href="https://planchad.netlify.app"
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
      PlanChad is the Chad™ of to-do apps. It's made with React 18 + NextJS 12
      for the front-end, and uses Firebase as both the back-end database and
      Google-Auth provider. It uses nested drag and drop to organize projects
      into phases and sub-tasks. There is also a handbuilt calendar, a real-time
      chat made with Firebase, several custom view options, and the ability to
      share the project with other users and add them to tasks.
    </p>

    <div class="middle-text">
      <div class="col1">
        <h2>What I Learned</h2>

        <li>Full-stack CRUD</li>
        <li>How to use data stores (Zustand)</li>
        <li>I wrote a calendar!</li>
        <li>How to optimize React to avoid rerendering</li>
        <li>Use React Query!</li>
      </div>
      <div class="col2">
        <h2>Skills I Used</h2>
        <div class="skills-container">
          <li>Javascript</li>
          <li>React + NextJS</li>
          <li>Firebase</li>
          <li>Zustand Stores</li>
          <li>Framer-Motion Animation Library</li>
          <li>Google Auth</li>
          <li>Caching</li>
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
    padding: 0rem 4.5rem;
  }

  .responsive-video {
    width: 100%;
    margin: -1rem 0px;
    transform-origin: center center;
    object-fit: fill;
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
  @media (max-width: 670px) {
    h1 {
      margin-bottom: 1rem;
    }
    .middle-text {
      flex-direction: column;
    }

    .title-row {
      flex-direction: column;
      align-items: flex-start;
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
</style>
