import './index.scss';

import Buttom from '../../ui/buttom';

function Header({
    title,
    isActiveLinkBack = true,
    isActiveTitle = true,
    isActiveInfo = true
  }){
  return (
    <header className='container header'>
      {isActiveLinkBack ? <div>назад</div> : false}

      {isActiveTitle ?
        <h1 className='title'>
        {title}
        </h1> : false
      }

      <div className="header__info">
        {isActiveInfo ?
          <div className="header__info-product">
            3 товара <br /> на сумму 3 500 ₽
          </div> : false
        }

        {isActiveInfo ?
          <div className="">Иконка</div> : false
        }

        <Buttom />
      </div>
    </header>
  );
}

export default Header;