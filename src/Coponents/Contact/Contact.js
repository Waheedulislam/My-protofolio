import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const form = useRef();
    // service_zex6nns
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zex6nns', 'template_csuv2ff', form.current, 'l75wKBOaHj19amUX5')
            .then((result) => {
                console.log(result.text);
                toast('Send a massage')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    };


    return (
        <div style={{ paddingTop: '200px' }} className='contact-form'>

            <div className="w-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>ConTact me</span>
                    <p>If you have any query want to ask me or want to give me any important message, you can send me a message at any time and yes, I will try to reply to your message in your email.</p>
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>Name: <span>Waheedul Islam</span></h3>
                    </div>
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>Cell/WhatsApp: <span>+8801 63352 1872</span></h3>
                    </div>
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>Email: <span>waheeduli81@gmail.com</span></h3>
                    </div>
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>Address: <span>Ashulia,Savar,Dhaka 1341</span></h3>
                    </div>
                    <div
                        className='blur s-blur1'
                        style={{ background: '#ABF1FF94' }}
                    >
                    </div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <br />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <br />
                    <textarea name="message" className='user-massage' placeholder='Message'></textarea>
                    <br />
                    <input type="submit" value="Send" className='Button button s-button' />
                    <br />
                    <div
                        className='blur c-blur1'
                        style={{ background: 'var(--purple)' }}
                    >
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Contact;