import './featured.css';
import feature1 from './img/feature1.jpg';
import feature2 from './img/feature2.jpg';
import feature3 from './img/feature3.jpg';
export default function Featured() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img className='featuredImg' src={feature1} alt="feature 1" />
        <div className="featuredTitle">
          <h1>Sylhet</h1>
          <h1>123 Properties</h1>
        </div>
      </div>      
      
      <div className="featuredItem">
        <img className='featuredImg' src={feature2} alt="feature 1" />
        <div className="featuredTitle">
          <h1>Dhaka</h1>
          <h1>123 Properties</h1>
        </div>
      </div>      
      
      <div className="featuredItem">
        <img className='featuredImg' src={feature3} alt="feature 1" />
        <div className="featuredTitle">
          <h1>Chittagong</h1>
          <h1>123 Properties</h1>
        </div>
      </div>

    </div>
  )
}
