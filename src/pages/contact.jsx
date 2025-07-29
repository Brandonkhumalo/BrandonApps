import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = (e) => {
        e.preventDefault();

        // Send to your email (Admin)
        emailjs.send(
            'service_zvm4n4q',         // Service ID
            'template_sdhc1gv',        // Your email template ID
            formData,
            '3wJdmWzo9tdpNI8yd'     // Replace with your public key
        )
        .then((res) => {
            alert('Message sent successfully to BrandonApps!');

            // Send confirmation to user
            const userTemplateData = {
                name: formData.name,
                email: formData.email
            };

            return emailjs.send(
                'service_zvm4n4q',         // Same service ID
                'template_9hk53ej',      // Second template ID (for user)
                userTemplateData,
                '3wJdmWzo9tdpNI8yd'     // Replace with same public key
            );
        })
        .then((userRes) => {
            console.log('Confirmation email sent to user.');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        })
        .catch((err) => {
            console.error('Email error:', err);
            alert('Failed to send message. Please try again later.');
        });
    };

    return (
        <div>
            <div className='hear'>Get In Touch</div>
            <div className='whether'>We would love to hear from you, please fill in the form below or mail us your requirements on brandonkhumalo1604@gmail.com</div>

            <div className="contact-container">
                <div className="contact-left">
                    <h2>Contact Information</h2>
                    <p className='contact-txt-color'>BrandonApps</p>

                    <p><strong>Email</strong><br /> 
                        <a href="mailto:brandonkhumalo1604@gmail.com" 
                            className='contact-txt-color'>
                            brandonkhumalo1604@gmail.com </a> </p>

                    <p><strong>Phone</strong><br /> 
                        <a href="https://wa.me/263788539918" 
                            target="_blank" rel="noopener noreferrer" 
                            className='contact-txt-color'>ZW +263788539918</a> /  
                        <a href="https://wa.me/27835345048" 
                            target="_blank" rel="noopener noreferrer" 
                            className='contact-txt-color'> ZA +27835345048
                        </a></p>

                    <p><strong>LinkedIn</strong><br /> 
                        <a href="https://www.linkedin.com/in/brandon-khumalo04" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='contact-txt-color'>
                            brandon-khumalo04</a> </p>
                </div>

                <form className="contact-form" onSubmit={handleSend}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Leave message here"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
