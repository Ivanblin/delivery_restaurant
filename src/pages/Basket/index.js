import './index.scss'

// import styled from 'styled-components';

import Header from "../../components/blocks/Header";
import Main from "../../components/blocks/Main";

function Basket() {

  return (
    <div className="basket">
      <Header
        title="Корзина с выбранными товарами"
        isActiveInfo={false}
      />
      <Main
        oritationMain={true}
        oritationCardMain={false}
      />
    </div>
  );
}

export default Basket;
