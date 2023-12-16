import './index.scss'

import styled from 'styled-components';


import ButtonSmall from '../../ui/ButtonSmall';
// import IMG from ''

function Card({title, description, price, oritationCard = true}) {

  const CardItem = styled.div`
    display: flex;
    flex-direction: ${() => (oritationCard === true ? "column" : "row")};
    width: ${() => (oritationCard === true ? "24%" : "100%")};
    align-items: ${() => (oritationCard === true ? "inherit" : "center")};
    /* align-items: baseline; */
    /* gap: 20px 1%; */
  `;

  const TitleCard = styled.h2`
    margin-bottom: ${() => (oritationCard === true ? "15px" : "0")};
  `;

  const TitleDescr = styled.h2`
    display: ${() => (oritationCard === true ? "block" : "none")};
  `;

  return (
    <CardItem className="card">
      <img className='card__preview' src={require('../../../assets/img/product.png')} alt="" />

      <TitleCard className='card__title'>
        {title}
      </TitleCard>

      <TitleDescr className="card__description">
        {description}
      </TitleDescr>

      <div className="card__footer">
        <div className="card__price">{price} ₽</div>

        <ButtonSmall />
      </div>
    </CardItem>
  );
}

export default Card;