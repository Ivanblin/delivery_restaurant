import './index.scss'

import Card from '../../elements/Card'

function Main() {
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
    }
  ]

  return (
    <main className="container main">
      {products.map((item, index) => (
        <Card
          preview={item.preview}
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
        >
        </Card>
      ))}
    </main>
  );
}

export default Main;