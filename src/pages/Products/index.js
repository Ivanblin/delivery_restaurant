import './index.scss'

import Header from "../../components/blocks/Header";
import Main from "../../components/blocks/Main";

function Products() {
  return (
    <div className="products">
      <Header
        title="наша продукция"
        isActiveLinkBack={false}
      />

      {/* <Header
        title="Корзина с выбранными товарами"
        isActiveInfo={false}
      />

      <Header
        isActiveTitle={false}
      /> */}

      <Main />
    </div>
  );
}

export default Products;