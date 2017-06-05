import React, {Component} from 'react';

class FilterPanelEmpty extends React.Component {
  render() {
    return <div>
    <div className="filter-panel-overlay" onClick={this.props.onFilterPanelClose}></div>
    <div id="filter-panel">
    <div className="params-cont-empty pannel-in">
      <div className="no-orders">
        <div>
          <img src="images/info.png" alt=""/>
        </div>
        <p>
          Выберите товар из таблицы слева, чтобы увидеть параметры
        </p>
      </div>
    </div>
    </div>
    </div>
  }
}

export default FilterPanelEmpty;
