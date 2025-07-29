import '../styles/about.css';
import techpic from '../assets/tech_pic-no_bg.png';
import startups from '../assets/startups.png';
import enterprise from '../assets/enterprises.png';
import agency from '../assets/agency.png';
import vision from '../assets/Vision_pic.png';

const AboutUs = () => {
  
  return (
    <div style={{ padding: "50px" }}>
      <div className='hear1'>About Us</div>
      <div className='whether1'>We are a software development business that enjoys solving challenging issues! We concentrate on 
        overall IT sector along with implement solutions for Mobile Apps, Web Apps, Desktop Apps. We will assist your company in 
        expanding by developing quick and effective software applications.</div>
    
      <div className="responsive-overall">
        <div className="responsive-left">
          <h1 className='about-head'>Streamlined Sales Procedure</h1>
          <p className='about-paragraph'>
            Join us for a flawless sales journey. We put our partners' interests first, responding to any inquiries right away and 
            providing thorough help at every turn. We are more than just a service provider; we are a devoted business partner.
          </p>

          <h1 className='about-head'>Clear Frameworks and Procedures</h1>
          <p className='about-paragraph'>
            We are constantly able to offer top-notch software thanks to our clearly defined workflows. 
            Productivity and on-time deployment are guaranteed by the agile methodology we employ in product development.
          </p>

          <h1 className='about-head'>Reliability and Professionalism</h1>
          <p className='about-paragraph'>
            You can rely on us for on-time delivery and services that are of the highest caliber. 
            We concentrate every day on creating business value in order to help our clients reach their full potential.
          </p>
        </div>

        <div className="responsive-right">
          <img src={techpic} alt="coding picture" />
        </div>
      </div>

      <div className="responsive-overall2">
        <div className="responsive-left2">
          <img src={vision} alt="our vision" />
        </div>

        <div className="responsive-right2">
          <h1 className='about-head'>Our Vision</h1>
          <p className='about-paragraph'>
            Our vision is to empower organizations to thrive in a digital-first world by delivering transformative software solutions.
            We aim to simplify complex challenges, drive innovation, and accelerate growth through cutting-edge technology. 
            From ideation to launch and beyond, we partner with businesses to create scalable, 
            user-centric products that fuel long-term success and adaptability in an ever-evolving digital landscape.
          </p>
        </div>
      </div>

      <strong><div className='connections'>We build connections with everyone!!</div></strong>

      <div className="cards-container">
        <div className="card">
          <img src={startups} alt="Startups" />
          <h3>Startups</h3>
          <p>Developing a concept for a startup? Bring it to us to see how it develops from a concept to a fully-featured project.</p>
        </div>

        <div className="card">
          <img src={enterprise} alt="Enterprises" />
          <h3>Enterprises</h3>
          <p>Our software development solutions for SMEs can accelerate your company's growth, and BrandonApps has been recognized 
            for its excellence in comprehensive IT services.</p>
        </div>

        <div className="card">
          <img src={agency} alt="Agency" />
          <h3>Agency</h3>
          <p>We are industry pioneers with outstanding expertise in overall IT development solutions to help you with your client projects.</p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;