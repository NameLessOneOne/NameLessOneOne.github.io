import React, {Component} from 'react';
import NavPanel from '../components/NavPanel';
import SettingsPopup from '../components/SettingsPopup';
import Nomenclature from '../components/Nomenclature';
import FilterPanelFilter from '../components/FilterPanelFilter';
import FilterPanelParams from '../components/FilterPanelParams';
import FilterPanelEmpty from '../components/FilterPanelEmpty';
import FilterPanelCreateProduct from '../components/FilterPanelCreateProduct';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSettingsVisible: false,
      filterPanelTab: 0,
    };

  }

  openSettingsMenu(e) {
    e.preventDefault();

    this.setState({isSettingsVisible: true});
  }

  onSettingsMenuOverlay() {
    this.setState({isSettingsVisible: false});
  }

  onFilterPanelFilterOpen(e) {
    e.preventDefault();

    this.setState({filterPanelTab: 1});
  }

  onFilterPanelParamsOpen(e) {
    e.preventDefault();

    this.setState({filterPanelTab: 2});
  }

  onFilterPanelEmptyOpen(e) {
    e.preventDefault();

    this.setState({filterPanelTab: 3});
  }

  onFilterPanelCreateProductOpen(e) {
    e.preventDefault();

    this.setState({filterPanelTab: 4});
  }

  onFilterPanelClose(e) {
    e.preventDefault();

    this.setState({filterPanelTab: 0});
  }

  render() {
    const { isSettingsVisible, filterPanelTab } = this.state;

    let settingsPopup = isSettingsVisible ? <SettingsPopup onSettingsMenuOverlay={this.onSettingsMenuOverlay.bind(this)} /> : null ;

    let filterPanel;

    if (filterPanelTab == 0) {
      filterPanel = null;
    } else if (filterPanelTab == 1) {
      filterPanel = <FilterPanelFilter onFilterPanelClose={this.onFilterPanelClose.bind(this)}/>
    } else if (filterPanelTab == 2) {
      filterPanel = <FilterPanelParams onFilterPanelClose={this.onFilterPanelClose.bind(this)}/>
    } else if (filterPanelTab == 3) {
      filterPanel = <FilterPanelEmpty onFilterPanelClose={this.onFilterPanelClose.bind(this)}/>
    } else if (filterPanelTab == 4) {
      filterPanel = <FilterPanelCreateProduct onFilterPanelClose={this.onFilterPanelClose.bind(this)} />
    }

    return <div>
      {settingsPopup}
      <NavPanel openSettingsMenu={this.openSettingsMenu.bind(this)}
        onFilterPanelFilterOpen={this.onFilterPanelFilterOpen.bind(this)}
        onFilterPanelEmptyOpen={this.onFilterPanelEmptyOpen.bind(this)}
        onFilterPanelCreateProductOpen={this.onFilterPanelCreateProductOpen.bind(this)}
      />
      <Nomenclature onFilterPanelParamsOpen={this.onFilterPanelParamsOpen.bind(this)}
      />

      {filterPanel}

    </div>
  }
}

export default Main;
