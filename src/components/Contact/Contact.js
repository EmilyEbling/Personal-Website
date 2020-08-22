import React from 'react'
import emailjs from 'emailjs-com';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('default_service', 'contact_form', e.target, 'user_cb9qTbig0XVrpkXuAB7iJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    return (
        <div>
            <form onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea name="message" placeholder="Your Message"/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}