<script lang="ts">
  import { SendEmail, type EmailMessage } from "../../api/email";

  let formValue: EmailMessage = {
    name: "",
    email: "",
    message: "",
  };

  let top = -130;

  function showSuccessMessage() {
    top = 30;
    setTimeout(() => {
      top = -130;
    }, 3000);
  }

  function sendFormEmail(e: SubmitEvent) {
    e.preventDefault();
    SendEmail(formValue).then((response: any) => {
      if (response.status === "Email sent successfully") {
        showSuccessMessage();
        formValue = { name: "", email: "", message: "" };
      }
    });
  }
</script>

<div class="success-message" style="top: {top}px">
  Message sent successfully -- Thank you for reaching out!
</div>
<form class="contact-container" on:submit={sendFormEmail}>
  <h1>Get In Touch</h1>
  <div class="form-container">
    <div>
      <div>Your Name</div>
      <input class="modern-input" type="text" bind:value={formValue.name} />
    </div>
    <div>
      <div>Your Email</div>
      <input class="modern-input" type="email" bind:value={formValue.email} />
    </div>
    <div>
      <div>Message</div>
      <textarea class="modern-textarea" bind:value={formValue.message} required
      ></textarea>
    </div>
    <button type="submit"> Submit </button>
  </div>
</form>

<style>
  .success-message {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    background-color: red;
    z-index: 11;
    font-size: 12pt;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    width: 80%;
    transition: all 0.5s ease;
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
  .contact-container {
    position: sticky;
    height: 100vh;
    width: 100vw;
    z-index: 12;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5em;
    gap: 2rem;
    background-color: white;
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
</style>
