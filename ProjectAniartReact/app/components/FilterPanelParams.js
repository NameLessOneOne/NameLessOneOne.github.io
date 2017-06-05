import React, {Component} from 'react';

class FilterPanelParams extends React.Component {
  render() {
    return <div>
    <div className="filter-panel-overlay" onClick={this.props.onFilterPanelClose}></div>
    <div id="filter-panel">
    <div className="params-cont pannel-in">
      <div className="act-but filter">
        <a href="" className="fa fa-angle-right" onClick={this.props.onFilterPanelClose}></a>
        <a href="" className="save">Сохранить</a>
        <a href="" onClick={this.props.onFilterPanelClose} className="cancel">Отменить</a>
      </div>
      <div className="params-cont-in">
        <div>
          <div className="bl-title">
            Название
          </div>
          <input type="text" defaultValue="Телевизор Samsung Н04"/>
        </div>
        <div>
          <div className="bl-title">
            Артикул
          </div>
          <input type="text" defaultValue="Aniart-Test-SKU-0000000003"/>
        </div>
        <div>
          <div className="bl-title">
            Срок хранения
          </div>
          <select className="custom-select">
            <option>неограничен</option>
            <option>ограничен</option>
            <option>неограничен</option>
          </select>
        </div>
        <div className="avail-serial">
          <label>
            <input type="checkbox" />
            Наличие серийного номера
          </label>
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
        <div>
          <div className="bl-title">Гарантийный талон</div>
          <select className="custom-select">
            <option defaultValue="1">не печатать</option>
            <option defaultValue="1">не печатать</option>
          </select>
        </div>
        <div>
          <div className="bl-title">Обклейка стикером</div>
          <select id="#" className="custom-select">
            <option defaultValue="">требуется</option>
            <option defaultValue="">не требуется</option>
          </select>
        </div>
        <div>
          <div className="bl-title">
            цена
          </div>
          <select name="#" id="" className="custom-select">
            <option defaultValue="1">65 грн</option>
            <option defaultValue="2">165 грн</option>
          </select>
        </div>
        <div>
          <div className="bl-title">Штрих-код</div>
          <input type="text" defaultValue="635142837461"/>
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
              <option defaultValue="1">шт</option>
              <option defaultValue="1">кг</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    </div>
      </div>
  }
}

export default FilterPanelParams;
