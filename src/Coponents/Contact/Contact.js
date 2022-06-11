import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zex6nns', 'template_csuv2ff', form.current, 'l75wKBOaHj19amUX5')
            .then((result) => {
                console.log(result.text);
                toast('Thanks For contact Me')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    };


    return (
        <div className='mt-2'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="text-center lg:text-left">
                        <div className="w-left lg:pl-20">
                            <div className="awesome">
                                <span>Get in Touch</span>
                                <span>ConTact me</span>
                                <p className='pb-2'>If you have any query want to ask me or want to give me any important message, you can send me a message at any time and yes, I will try to reply to your message in your email.</p>
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
                            </div>
                        </div>
                    </div>

                    <div class=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">

                            <form ref={form} onSubmit={sendEmail}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>

                                    <input type="text" readOnly name='user_name' placeholder="Name" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" readOnly name='user_email' class="input input-bordered" placeholder='Email' />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea type="email" readOnly name='message' class="input input-bordered" placeholder='Message' />
                                </div>


                                <div class="form-control mt-6">
                                    <button class="btn button  text-white">Login</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;