import './featuredProperties.css'

import featuredProperty1 from './featuredProperties1.png';
import featuredProperty2 from './featuredProperties2.jpg';
import featuredProperty3 from './featuredProperties3.jpg';

function FeaturedProperties() {
  return (
    <div className='featuredProperties'>
      <div className="fpItem">
        <img src={featuredProperty1} alt="featured property" className='fpImage' />
        <span className="fpName">
          Burj Al khalifa
        </span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={featuredProperty2} alt="featured property" className='fpImage' />
        <span className="fpName">
          Burj Al khalifa
        </span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={featuredProperty1} alt="featured property" className='fpImage' />
        <span className="fpName">
          Burj Al khalifa
        </span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={featuredProperty3} alt="featured property" className='fpImage' />
        <span className="fpName">
          Burj Al khalifa
        </span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={featuredProperty2} alt="featured property" className='fpImage' />
        <span className="fpName">
          Burj Al khalifa
        </span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      
    </div>
  )
}

export default FeaturedProperties