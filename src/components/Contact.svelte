<script lang="ts">
  import { onMount } from "svelte";
  import { SendEmail, type EmailMessage } from "../../api/email";
  import GithubIcon from "../graphics/GithubIcon.svelte";
  import LinkedInIcon from "../graphics/LinkedInIcon.svelte";
  import Youtube from "../graphics/Youtube.svelte";
  import { BarLoader } from "svelte-loading-spinners";

  export let windowScroll: number;
  export let count;

  let formValue: EmailMessage = {
    name: "",
    email: "",
    message: "",
  };

  let opacity = 0;
  let containerRef: HTMLElement;
  let containerHeight: number;
  let offsetTop: number;
  let blueOpacity = 0;
  let submitButton: HTMLElement;
  let isSending = false;
  let sucess = false;
  let fail = false;

  $: {
    if (containerRef && count) {
      offsetTop = containerRef.offsetTop;
      containerHeight = containerRef.offsetHeight;
    }
  }

  function updateOffsets() {
    offsetTop = containerRef.offsetTop;
    containerHeight = containerRef.offsetHeight;
  }

  $: if (count && containerRef) {
    updateOffsets();
  }

  function showSuccessMessage() {
    sucess = true;
    setTimeout(() => {
      sucess = false;
    }, 4000);
  }

  function showErrorMessage() {
    fail = true;
    setTimeout(() => {
      fail = false;
    }, 4000);
  }

  function handleScroll() {
    if (!offsetTop) return;

    const startFadeIn = offsetTop - containerHeight * 0.8;
    const endFadeIn = offsetTop - containerHeight * 0.2;

    if (windowScroll <= startFadeIn) {
      opacity = 0;
      blueOpacity = 1;
    } else if (windowScroll <= endFadeIn) {
      // Linear fade in
      opacity = (windowScroll - startFadeIn) / (endFadeIn - startFadeIn);
      blueOpacity = 1 - opacity;
    } else {
      opacity = 1;
      blueOpacity = 0;
    }
    opacity = Math.max(0, Math.min(opacity, 1));
    blueOpacity = Math.max(0, Math.min(blueOpacity, 1));
  }

  async function sendFormEmail(e: SubmitEvent) {
    e.preventDefault();

    try {
      isSending = true;
      const response: any = await SendEmail(formValue);

      if (response.status === "Email sent successfully") {
        showSuccessMessage();
        formValue = { name: "", email: "", message: "" };
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showErrorMessage();
    } finally {
      isSending = false;
    }
  }

  onMount(() => {
    offsetTop = containerRef.offsetTop;
  });

  $: if (windowScroll || count) handleScroll();
</script>

<div class="contact-page-container" bind:this={containerRef}>
  <div class="fade" style="opacity: {blueOpacity};" />
  <div class="content" style="opacity: {opacity};">
    <form id="contact-page" class="contact-form" on:submit={sendFormEmail}>
      <h1>Get In Touch</h1>
      <div class="form-container">
        <div>
          <div>Your Name</div>
          <input class="modern-input" type="text" bind:value={formValue.name} />
        </div>
        <div>
          <div>Your Email</div>
          <input
            class="modern-input"
            type="email"
            bind:value={formValue.email}
          />
        </div>
        <div>
          <div>Message</div>
          <textarea
            class="modern-textarea"
            bind:value={formValue.message}
            required
          ></textarea>
        </div>
        <button type="submit" bind:this={submitButton}> Submit </button>
        <div class="loading-bar">
          {#if isSending}
            <BarLoader size={100} color="#4a90e2" unit="px" duration="1s" />
          {/if}
          {#if sucess}
            <div style="font-size: 14pt;">
              Thanks for reaching out! Message sent successfully!
            </div>
          {/if}
          {#if fail}
            <div style="font-size: 14pt;">
              Oopsies! Something went wrong :( Sorry!
            </div>
          {/if}
        </div>
      </div>
      <div class="find-me-container">
        <div class="icon row">
          <a href="https://github.com/MaxRubel">
            <button class="no-button" type="button"><GithubIcon /></button>
          </a>
          <a href="https://www.linkedin.com/in/max-rubel-a12864bb/">
            <button class="no-button" type="button"> <LinkedInIcon /></button>
          </a>
          <a href="https://www.youtube.com/@MaxMakesApps/videos">
            <button class="no-button" type="button"> <Youtube /></button>
          </a>
        </div>
      </div>
    </form>
  </div>
</div>

<style>
  .contact-page-container {
    min-height: 100vh;
    position: sticky;
    top: 0;
    z-index: 20;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
  }

  .fade {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(14, 0, 39);
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .content {
    position: relative;
    z-index: 14;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
  }

  .loading-bar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .no-button {
    background-color: transparent;
    height: auto;
    color: black;
    width: auto;
  }

  .no-button:hover {
    background-color: #b2d3f8;
  }

  button {
    background-color: #4a90e2;
    color: white;
    height: 44px;
    transition: all 0.4s ease;
  }
  button:hover {
    background-color: #3970b0;
  }

  .form-container {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .find-me-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    gap: 2rem;
    box-sizing: border-box;
    color: black;
  }

  .contact-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    gap: 2rem;
    box-sizing: border-box;
    color: black;
    flex-grow: 1;
  }

  .modern-input {
    font-family: "Arial", sans-serif;
    font-size: 16px;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f8f8f8;
    color: #333;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
  }

  .modern-input:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
    background-color: #fff;
  }

  .modern-input::placeholder {
    color: #999;
  }

  .modern-input:hover {
    border-color: #bdbdbd;
  }

  .modern-textarea {
    font-family: "Arial", sans-serif;
    font-size: 16px;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f8f8f8;
    color: #333;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
    min-height: 120px;
    resize: vertical;
    line-height: 1.5;
  }

  .modern-textarea:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
    background-color: #fff;
  }

  .modern-textarea::placeholder {
    color: #999;
  }

  .modern-textarea:hover {
    border-color: #bdbdbd;
  }

  @media screen and (max-width: 768px) {
    .contact-form {
      padding-top: 2rem;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
</style>
