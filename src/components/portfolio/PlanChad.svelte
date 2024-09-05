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
      <div><h1>planChad</h1></div>
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
      PlanChad is the Chad™ of to-do apps. It's made with React 18 + NextJS 12
      for the front-end, and uses Firebase as both the back-end database and
      Google-Auth provider. My inspiration for this project was how I personally
      like to visualize planning projects that have a large scope: I like to
      separate them into phases and assign tasks to each phase. This app is
      packed with features including two layers of drag and drop, a handmade
      calendar, the ability to share projects and assign collaborators to tasks,
      a websocket based chat system made with Firebase, and several custom view
      options.
    </p>
    <p style="margin-top: 2rem;">
      This app served as my front-end capstone project for a class I'm finishing
      at the Nashville Software School, and I learned a lot during its creation.
      For example, in trying to optimize how often I posted to the database, I
      ended up writing a caching system that performs all CRUD actions on the
      client, and then the user syncs their data with the database when they
      save their work. This was very complicated, and I learned shortly after
      that this could be more easily accomplished with a library like React
      Query. Also, writing the calendar was particularly challenging, but I
      learned a lot about how to manipulate data in creative, visuals ways on
      the dom.
    </p>
    <div class="middle-text">
      <div class="col1">
        <h2>What I Learned</h2>
        <p>
          <li>Basic CRUD with a backend</li>
          <li>How to use data stores (Zustand)</li>
          <li>I wrote a calendar!</li>
          <li>How to optimize React to avoid rerendering</li>
          <li>Use React Query!</li>
        </p>
      </div>
      <div class="col2">
        <h2>Skills I Used</h2>
        <div class="skills-container">
          <div>Javascript</div>
          <div>React + NextJS</div>
          <div>Firebase</div>
          <div>Zustand Stores</div>
          <div>Framer-Motion Animation Library</div>
          <div>Google Auth</div>
          <div>Caching</div>
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
