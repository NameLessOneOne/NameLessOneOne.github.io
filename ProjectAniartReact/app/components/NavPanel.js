import React, {Component} from 'react';

class NavPanel extends React.Component {
  render() {
    return <div id='top-bar'>
    <div href="javascript:void(0)" id="menu-button-cont" className="orange">
        <a id="menu-button" onClick={this.props.openSettingsMenu} ></a>

      </div>
      <div id="control-panel">
        <div id="top-control-panel">
          <div id="head">
            <a href="javascript:void(0)" id="orders" className="active">Номенклатура товаров</a>
          </div>
          <div id="company-name">
            Maxi.ua
          </div>
        </div>
        <div id="bot-control-panel">

          <div className="bot-control-wrap bot-wrap">
            <div className="col3 width246">
              <a href="javascript:void(0)" className="pan-item">Синхронизировать</a>
            </div>

            <div className="col3 nom">
              <a href="javascript:void(0)" className="pan-item big-pan-item">Конечная категория
                <span className="quantity">243</span>
              </a>
              <a href="" onClick={this.props.onFilterPanelCreateProductOpen} className="pan-item" id="create-product" data-on="params-create-product">Создать товар</a>
            </div>

            <div className="col3 nom-action">
              <a href="javascript:void(0)" className="pan-item big-pan-item">Конечная категория
                <span className="quantity">
                  <span className="green">115</span>/243</span>
              </a>
              <a href="javascript:void(0)" className="pan-item action">Действия с выбранными
                <span className="quantity">10</span>
                <i className="fa fa-sort-desc" aria-hidden="true"></i>
                <ul className="actions">
                  <li>
                    <object>
                      <a href="javascript:void(0)">Отгрузить...</a>
                    </object>
                  </li>
                  <li>
                    <object>
                      <a href="javascript:void(0)">Поставить...</a>
                    </object>
                  </li>
                  <li>
                    <object>
                      <a href="javascript:void(0)">Экспортировать в Exel...</a>
                    </object>
                  </li>
                </ul>
              </a>
            </div>

            <div className="col3 filter-param">
              <a href="javascript:void(0)" className="pan-item" id="tableConfBut">Настроить вид</a>
              <span id="floatUnderline">
                <a href='' onClick={this.props.onFilterPanelEmptyOpen} className="pan-item large" id="params-but" data-on="params-cont-empty" data-act="filter-pan">Параметры</a>
                <a href='' onClick={this.props.onFilterPanelFilterOpen} className="pan-item large" id="filter-but" data-on="filter-cont" data-act="filter-pan">Фильтры</a>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  }
}

export default NavPanel;
