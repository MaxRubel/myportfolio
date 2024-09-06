export type EmailMessage = {
  name: string
  email: string
  message: string
}

export function SendEmail(message: EmailMessage) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:8420/sendmessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error sending email message to go-mailer')
        }
        resolve(response.json())
        // console.log(response.json())
        // console.log("success")
      })
      .catch(error => {
        console.error(`Error:`, error)
        reject()
      })
  })
}