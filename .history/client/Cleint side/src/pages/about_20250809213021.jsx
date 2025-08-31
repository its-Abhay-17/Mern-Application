import './page.css'
import { useAuth } from '../store/auth';

const about = () => {
  return (
    <div className='firstChild'>
      <div className="about-parent">
        <div className="about-content">
          <h4>Welcome, ${useAuth.user.username`to our Portfolio`}</h4>
          <h2>Why choose Us?</h2>
          <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>

          <p>Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.</p>

          <p>Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.</p>

          <p>Affordability: We offer competitive pricing without compromising on the quality of our services.</p>

          <p> Reliability: Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.</p>
          <div className="buttons">
            <button>Connect </button>
            <button>Learn more</button>
          </div>
        </div>
        <div className="about-img"> Image</div>
      </div>
    </div>
  )
}

export default about
