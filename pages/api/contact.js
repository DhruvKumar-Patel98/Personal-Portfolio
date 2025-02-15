import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body;

    await sendgrid.send({
        to: "dhruvkumarpatel9726@gmail.com", // Your email
        from: "pateldhruv9726@gmail.com", // Must be a verified sender in SendGrid
        reply_to: email, 
        subject: `New Contact Form Submission from ${name}`,
        text: `Hi Dhruvkumar,  
      
      I am ${name}. I am reaching out to you for the following reason:  
      
      "${message}"  
      
      Regards,  
      ${name}`,
        html: `<p>Hi Dhruvkumar,</p>
               <p>I am <strong>${name}</strong>. I am reaching out to you for the following reason:</p>
               <p>"${message}"</p>
               <p>Regards,<br>${name}</p>`
      });
      

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.response?.body || error);
    return res.status(500).json({ success: false, message: "Email could not be sent." });
  }
}