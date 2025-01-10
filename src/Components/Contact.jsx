import React, { useRef, useState } from 'react';
import { IoPaperPlane } from 'react-icons/io5';
import { CSSTransition } from 'react-transition-group';
import '../Style/Contact.css';
// import '../Style/Notification.css'; // Add CSS for notifications

const Contact = () => {
    const fullnameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: '', show: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            fullname: fullnameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };

        console.log("Form Data Sent:", formData); // Log the form data

        try {
            const response = await fetch('http://localhost:5000/contact', { // Backend URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setNotification({
                    message: 'Message sent successfully!',
                    type: 'success',
                    show: true,
                });
                fullnameRef.current.value = '';
                emailRef.current.value = '';
                messageRef.current.value = '';
            } else {
                const errorData = await response.json();
                console.error("Error response from backend:", errorData); // Log backend error
                setNotification({
                    message: errorData.error || 'Failed to send the message. Please try again.',
                    type: 'error',
                    show: true,
                });
            }
        } catch (error) {
            console.error('Error:', error.message);
            setNotification({
                message: 'An error occurred. Please try again later.',
                type: 'error',
                show: true,
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setNotification((prev) => ({ ...prev, show: false })), 3000);
        }
    };


    return (
        <article className="contact active" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox="">
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.87005827277!2d76.84966089892258!3d28.646677287768847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02438a4e9255%3A0x3e77502ea8828da0!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1647608789441!5m2!1sen!2sin"
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

            {/* Notification */}
            <CSSTransition
                in={notification.show}
                timeout={300}
                classNames="notification"
                unmountOnExit
            >
                <div className={`notification ${notification.type}`}>
                    {notification.message}
                </div>
            </CSSTransition>
        </article>
    );
};

export default Contact;
