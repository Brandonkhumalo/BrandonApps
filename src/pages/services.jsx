import { Link } from "react-router-dom";
import '../styles/services.css';

const services = [
  {
    title: "Custom Software Solutions",
    description: "Our custom software development services are designed to address your unique business challenges. We work closely with you to create bespoke solutions that streamline operations, enhance productivity, and drive growth. Experience software that fits your business like a glove.",
  },
  {
    title: "Mobile App Innovation",
    description: "Transform your mobile app ideas into reality with our expert mobile app development services. We bring creativity, functionality, and user-friendliness to your app, ensuring it stands out in today's competitive digital landscape. Elevate your brand through engaging mobile experiences.",
  },
  {
    title: "Digital Transformation Hub",
    description: "We guide your business through digital transformation, integrating the latest technologies to future-proof your systems and processes. Our expertise ensures a smooth, strategic shift tailored to your goals.",
  },
  {
    title: "AI-Powered Solutions",
    description: "Leverage the power of AI to automate workflows, analyze data, and improve decision-making. We build intelligent systems that adapt, learn, and optimize performance across your operations.",
  }
];

function Services() {
    return(
        <div className='servicesContainer'>
            <div className='servicesContTop'>
                <div className='hear2'>Services we provide</div>
                <div className='whether2'>This is the place where you may find trustworthy Software development services. You may be sure that the finest solutions for your demands will be provided thanks to our tested approach for producing high-quality Softwares. We make sure your experience is flawless from conception to delivery. So, for personalized solutions, get in touch with us today.</div>
            </div>

            <div className='contactContBott'>
                <div className='contactBox'>
                    <div className='cBoxHeader'>Website Development</div>
                    <div className='cBoxNotes'>Our Company develops unique user interfaces with React technology because it ensures flexibility, efficiency, and scalability.</div>
                    <div className="btncont">
                        <Link to="/contact" target='_blank'>
                            <button className="contactbtn">Contact us</button>
                        </Link>
                    </div>
                </div>

                <div className='contactBox'>
                    <div className='cBoxHeader'>Mobile Development</div>
                    <div className='cBoxNotes'>We provide you with the best development team possible as a top Software development company. Their skill sets line up with the requirements of your app.</div>
                    <div className="btncont">
                        <Link to="/contact" target='_blank'>
                            <button className="contactbtn">Get in touch</button>
                        </Link>
                    </div>
                </div>

                <div className='contactBox'>
                    <div className='cBoxHeader'>Desktop Development</div>
                    <div className='cBoxNotes'>We provide you with the best and most agile development team possible that ensures flexible, efficient, and scalable Desktop applications for your business.</div>
                    <div className="btncont">
                        <Link to="/contact" target='_blank'>
                            <button className="contactbtn">Get in touch</button>
                        </Link>
                    </div>
                </div>

                <div className='contactBox'>
                    <div className='cBoxHeader'>Software Development</div>
                    <div className='cBoxNotes'>Our skilled developers are available to assist you in realizing the full potential of multiple programming languages. Python, Java and JavaScript.</div>
                    <div className="btncont">
                        <Link to="/contact" target='_blank'>
                            <button className="contactbtn">Get in touch</button>
                        </Link>
                    </div>
                </div>

                <div className='contactBox'>
                    <div className='cBoxHeader'>Wireframing Services</div>
                    <div className='cBoxNotes'>BrandonApps interface development team creates an MVP quickly to help you demonstrate to your investors your startup's full potential.</div>
                    <div className="btncont">
                        <Link to="/contact" target='_blank'>
                            <button className="contactbtn">Get in touch</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="services-grid-container">
                <h1 className="main-heading">
                    innovative solutions for a <span className="highlight">digital world</span>
                </h1>
                <div className="services-grid">
                    {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                        <h3 className="service-card-header">{service.title}</h3>
                        <p className="service-card-paragraph">{service.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;