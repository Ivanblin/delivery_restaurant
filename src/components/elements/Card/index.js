import './index.scss'

import ButtonSmall from '../../ui/ButtonSmall';
// import IMG from ''

function Card({title, description, price}) {
  return (
    <div className="card">
      <img className='card__preview' src={require('../../../assets/img/product.png')} alt="" />

      <h2 className='card__title'>
        {title}
      </h2>

      <p className="card__description">
        {description}
      </p>

      <div className="card__footer">
        <div className="card__price">{price} ₽</div>

        <ButtonSmall />
      </div>
    </div>
  );
}

export default Card;