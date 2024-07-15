import React, { useRef, useState } from 'react';
import { IoPaperPlane } from 'react-icons/io5';
import emailjs from 'emailjs-com';
import '../Style/Contact.css';

const Contact = () => {
    const fullnameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            fullname: fullnameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                alert('Message sent successfully!');
                setIsSubmitting(false);
                fullnameRef.current.value = '';
                emailRef.current.value = '';
                messageRef.current.value = '';
            }, (error) => {
                console.error('Failed to send message:', error);
                setIsSubmitting(false);
                alert('Message failed to send. Please try again later.');
            });
    };

    return (
        <article className="contact active" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox="">
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                        width="400"
                        height="300"
                        loading="lazy"
                        title="map"
                    ></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            ref={fullnameRef}
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            ref={emailRef}
                        />
                    </div>
                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        ref={messageRef}
                    ></textarea>
                    <button className="form-btn" type="submit" disabled={isSubmitting}>
                        <IoPaperPlane />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </form>
            </section>
        </article>
    );
};

export default Contact;
