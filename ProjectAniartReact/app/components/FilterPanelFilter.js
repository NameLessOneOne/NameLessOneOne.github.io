import React, {Component} from 'react';

class FilterPanelFilter extends React.Component {
  render() {
    return <div>
    <div className="filter-panel-overlay" onClick={this.props.onFilterPanelClose}></div>
    <div id="filter-panel">
    <div className="filter-cont">
      <div className="search-filter-cont">
        <a href="" className="fa fa-angle-right" onClick={this.props.onFilterPanelClose}></a>
        <input type="text" placeholder="Поиск в заказах" />
        <a href="javascript:void(0)">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <div>
          <a href="javascript:void(0)">Фильтровать</a>
          <a href="javascript:void(0)">Сбросить все</a>
        </div>
      </div>
      <div className="data-range">
        <div className="bl-title">Диапазон дат</div>
        <input type="checkbox" />
        <input type="text" defaultValue="20.12.2016" className="datapicker"/>
        <span>-</span>
        <input type="text" className="datapicker" defaultValue="20.12.2016"/>
      </div>
      <div className="sum-range">
        <div className="bl-title">Диапазон сумм</div>
        <input type="checkbox" />
        <input type="text" defaultValue="0" className="money" />
        <span>-</span><input type="text" defaultValue="99 000" className="money" />
      </div>
      <div className="quantity-prod">
        <div className="bl-title">Количество товаров</div>
        <input type="checkbox"/>
        <input type="text" defaultValue="1"/>
        <span>-</span><input type="text" defaultValue="93" />
      </div>
    </div>
  </div>
  </div>
  }
}

export default FilterPanelFilter;
