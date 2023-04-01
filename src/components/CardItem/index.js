// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`box-container ${className}`}>
      <h1 className="card-name">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-content">
        <img src={imgUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default CardItem
