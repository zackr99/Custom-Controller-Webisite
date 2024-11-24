import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


// This function sends the message to the the server

function Contact() {
    // use form reference
    const form = useRef()

    const submitMessage = (e) =>{
        e.preventDefault();
        // Send the form to the email js server 
        emailjs
          .sendForm('service_a34dw52', 'template_url62bo', form.current, {
            publicKey: 'rweM6QuYOSma-9vRe',
          })
          // If its sucessfull then log success
          .then(
            () => {
              console.log('SUCCESS!');
            },
            // If there is an error then log failed
            (error) => {
              console.log('FAILED...', error.text);
            },
        );

    }
    return (
        <>
        <div class = "input-container">
        <form ref={form} onSubmit={submitMessage}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
        </div>

        </>
    );
}

export default Contact;
// TODO: Stack input boxes instead of horizontal
// TODO: Add button to jsc elemeent 
///TODO: Add event listeners 

