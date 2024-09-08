export type EmailMessage = {
  name: string
  email: string
  message: string
}

//@ts-ignore
const endpoint = import.meta.env.VITE_MAIL_API

export function SendEmail(message: EmailMessage) {
  console.log({ endpoint })
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/sendmessage`, {
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