import React, {Component} from 'react';

class FilterPanelCreateProduct extends React.Component {
  render() {
    return <div>
    <div className="filter-panel-overlay" onClick={this.props.onFilterPanelClose}></div>
    <div id="filter-panel">
    <div className="params-create-product pannel-in">
      <div className="act-but filter">
        <a href="" className="fa fa-angle-right" onClick={this.props.onFilterPanelClose}></a>
        <a href="" className="save">Сохранить</a>
        <a href="" className="cancel" onClick={this.props.onFilterPanelClose}>Отменить</a>
      </div>
      <div className="params-cont-in">
        <div>
          <div className="bl-title">
            Название
          </div>
          <input type="text" placeholder="укажите"/>
        </div>
        <div>
          <div className="bl-title">Категория товара</div>
          <select className="custom-select">
            <option>Конечная категория</option>
            <option>Категория 1</option>
            <option>Еще категория</option>
          </select>
        </div>
        <div>
          <div className="bl-title">
            Артикул
          </div>
          <input type="text" placeholder="укажите"/>
        </div>
        <div className="sel-placeholder">
          <div className="bl-title">
            Срок хранения
          </div>
          <select className="custom-select" defaultValue = 'укажите'>
            <option disabled>укажите</option>
            <option>неограничен</option>
            <option>ограничен</option>
            <option>неограничен</option>
          </select>
        </div>
        <div>
          <div className="bl-title">
            Серийный номер
          </div>
          <input type="text" placeholder="укажите"/>
        </div>
        <div className="flex">
          <div>
            <div className="bl-title">Срок гарантии</div>
            <input type="text" defaultValue="12 месяцев"/>
          </div>
          <div>
            <div className="bl-title">Срок годности</div>
            <input type="text" defaultValue="0 дней"/>
          </div>
        </div>
        <div className="sel-placeholder">
          <div className="bl-title">Гарантийный талон</div>
          <select className="custom-select" defaultValue="укажите">
            <option disabled>укажите</option>
            <option>не печатать</option>
            <option>не печатать</option>
          </select>
        </div>
        <div className="sel-placeholder">
          <div className="bl-title">Обклейка стикером</div>
          <select className="custom-select" defaultValue="укажите">
            <option disabled>укажите</option>
            <option>требуется</option>
            <option>не требуется</option>
          </select>
        </div>
        <div>
          <div className="bl-title">
            Цена
          </div>
          <input type="text" placeholder="укажите"/>
        </div>
        <div>
          <div className="bl-title">Штрих-код</div>
          <input type="text" placeholder="укажите"/>
        </div>
        <div className="flex size">
          <div className="one-size">
            <div className="bl-title">
              Длинна
            </div>
            <input type="text" defaultValue="130.15"/>
          </div>
          <div className="one-size">
            <div className="bl-title">
              Высота
            </div>
            <input type="text" defaultValue="130.15"/>
          </div>
          <div className="one-size">
            <div className="bl-title">
              Ширина
            </div>
            <input type="text" defaultValue="130.15"/>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="bl-title">Вес</div>
            <input type="text" defaultValue="10 кг"/>
          </div>
          <div>
            <div className="bl-title">Единица измерения</div>
            <select name="#" className="custom-select">
              <option>шт</option>
              <option>кг</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  }
}

export default FilterPanelCreateProduct;
