import './propertyList.css';
import property2 from './property2.jpg'
import property3 from './property3.jpg'
import property4 from './property4.jpg'
function PropertyList() {
  return (
    <div className='propertyList'>
        <div className="propertyListItem">
            <img className='propertyListImg' src={property4} alt="property 1" />
            <div className="propertyListTitle">
                <h1>Hotels</h1>
                <h2>234 hotels</h2>
            </div>
        </div>
        <div className="propertyListItem">
            <img className='propertyListImg' src={property2} alt="property 1" />
            <div className="propertyListTitle">
                <h1>Apartments</h1>
                <h2>234 Flats</h2>
            </div>
        </div>
        <div className="propertyListItem">
            <img className='propertyListImg' src={property3} alt="property 1" />
            <div className="propertyListTitle">
                <h1>Resorts</h1>
                <h2>234 Resorts</h2>
            </div>
        </div>
        <div className="propertyListItem">
            <img className='propertyListImg' src={property2} alt="property 1" />
            <div className="propertyListTitle">
                <h1>Villas</h1>
                <h2>234 Villas</h2>
            </div>
        </div>
        <div className="propertyListItem">
            <img className='propertyListImg' src={property3} alt="property 1" />
            <div className="propertyListTitle">
                <h1>Cabins</h1>
                <h2>234 Cabins</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList