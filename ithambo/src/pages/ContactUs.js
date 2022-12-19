import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ves2o8c', 'template_cheqn3i', form.current, 'hbrsdCqY9njnfRn47')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <div className="contact-container">
            <div className="main-contact">
                <div>
                    <p className='contact'>Contact Us</p>
                </div>
                <div className='contact-form'>
                    <div className='contact-message'>
                        <form ref={form} onSubmit={sendMail}>
                            <div className='contact-control'>
                                <div className='label-details'>
                                    <label>Name:</label>
                                    <input type='text' name='user_name' required/>
                                </div>

                                <div className='label-details'>
                                    <label>Email:</label>
                                    <input type='email' name='user_email' required/>
                                </div>

                                <div className='label-details'>
                                    <label>Subject:</label>   
                                    <input type='text' name='subject' required/>
                                </div>

                                <div className='label-details'>
                                    <label>Message:</label>
                                    <textarea type='text' name='message' required/>
                                </div>
                                <div className='update-button'>
                                    <button type='submit'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    );
}
 
export default ContactUs;