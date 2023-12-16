import './index.scss'
import styled from 'styled-components';


import Card from '../../elements/Card'

function Main({oritationMain = false, oritationCardMain = true}) {
  const products = [
    {
      preview: '../../../assets/img/product.png',
      title: 'Устрицы по рокфеллеровски',
      description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700
    },
    {
      preview: '../../../assets/img/product.png',
      title: 'Устрицы по рокфеллеровски',
      description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700
    },
    {
      preview: '../../../assets/img/product.png',
      title: 'Устрицы по рокфеллеровски',
      description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700
    },
    {
      preview: '../../../assets/img/product.png',
      title: 'Устрицы по рокфеллеровски',
      description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700
    },
    {
      preview: '../../../assets/img/product.png',
      title: 'Устрицы по рокфеллеровски',
      description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700
    },
    {
      preview: '../../../assets/img/product.png',
      title: 'Устрицы по рокфеллеровски',
      description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700
    }
  ]

  const Main = styled.main`
    display: flex;
    flex-wrap: ${() => (oritationMain === true ? "no-wrap" : "wrap")};
    flex-direction: ${() => (oritationMain === true ? "column" : "row")};
    align-items: baseline;
    height: calc(100vh - 172px);
    gap: 20px 1%;
  `;

  return (
    <Main className="container main">
      {products.map((item, index) => (
        <Card
          preview={item.preview}
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          oritationCard={oritationCardMain}
        >
        </Card>
      ))}
    </Main>
  );
}

export default Main;