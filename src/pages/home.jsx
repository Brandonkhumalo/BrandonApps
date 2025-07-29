import '../styles/home.css';
import TypingHeader from '../components/TypingHeader';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Home() {
    const navigate = useNavigate();
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlip = (index) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    return(
        <div className="homeCont">
            <div className="homeTop">
                <TypingHeader />
                <div className='points'>
                    <div className="homeheader2">
                        <span className='dot'>. </span>
                        Innovation-Driven
                    </div>
                    <div className="homeheader2">
                        <span className='dot'>. </span>
                        Growth-Focused
                    </div>
                    <div className="homeheader2">
                        <span className='dot'>. </span>
                        Reliable Execution
                    </div>
                </div>
            </div>

            <div className="introHeader">
                <div className="introContent">
                    <div className="intro-right2 intro-right-text">
                        BrandonApps has emerged as the leading Software Development Company where we specialize in delivering end-to-end tailored software solutions to meet the unique needs of our clients. We provide Mobile Development, Custom Software Development, Web 3 Development, Web Development, Desktop Development and many more. Our In-House team leverages their in-depth knowledge to develop decentralized applications and smart contracts. In this agile world, where uncertainties and discovery are the norms, software product development can be a formidable change.
                    </div>
                    <div className="intro-left intro-left-text">
                        Collaborate with Top Software Development Company
                    </div>
                </div>
                <button className="about-button2" onClick={() => navigate("BrandonApps/about-us")}>Know more</button>
            </div>

            <div className="introHeader introHeader2">
                <div className="introContent">
                    <div className="intro-left">
                        Empowering Business with Custom Software Development Services
                    </div>
                    <div className="intro-right">
                        Custom software development services play a crucial role in driving business growth by tailoring technology solutions to meet the specific needs and challenges of a company. This ensures that the software aligns perfectly with the business processes, workflows, and objectives. We provide the best Custom Software Development services to our clients. Custom software can be designed to enhance the overall customer experience. Whether it's a user-friendly interface, personalized features, or seamless integration, a well-developed software solution contributes to customer satisfaction, loyalty, and retention.
                    </div>
                </div>
                <button className="about-button" onClick={() => navigate("BrandonApps/services/offered")}>Know more</button>
            </div>

            <div className='services-container'>
                <div className='services-section-intro'>Professional Software Development Company</div>
                <div className='services-section-header'>You Choose We Deliver</div>

                <div className="services-section">
                    <div className="card-grid">
                        {["Mobile Development", "Web Development", "Desktop Development"].map((title, index) => (
                            <div className="flip-card" key={index} onClick={() => handleFlip(index)}>
                                <div className={`flip-card-inner ${flippedIndex === index ? 'flipped' : ''}`}>
                                    <div className="flip-card-front">{title}</div>
                                    <div className="flip-card-back">
                                        {title === "Mobile Development" && "Mobile development encompasses both the development of native apps, which are built for specific operating systems like iOS or Android, and the development of cross-platform apps."}
                                        {title === "Web Development" && "Web development is the process of creating and maintaining websites and web applications for the internet. It involves a range of tasks, from designing the visual layout and user interface."}
                                        {title === "Desktop Development" && "Desktop Development encompasses both the development of scalable and secure native apps built for specific operating systems like Windows and macOS."}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
