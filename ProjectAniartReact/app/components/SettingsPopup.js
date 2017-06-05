import React, {Component} from 'react';

class SettingsPopup extends React.Component {
  render() {
    return <div className="arcticmodal-container">
      <div className="arcticmodal-overlay" onClick={this.props.onSettingsMenuOverlay}></div>
      <table className="arcticmodal-container_i">
        <tbody>
          <tr>
            <td className="arcticmodal-container_i2">
              <div className="box-modal" id="menuModal">
                <div className="menu-columns">
                    <div className="one-menu-column">
                        <h3>Товары</h3>
                        <ul>
                            <li><a href="javascript:void(0)">Планы приема</a></li>
                            <li><a href="javascript:void(0)">Отгрузка</a></li>
                            <li><a href="javascript:void(0)">Остатки</a></li>
                            <li><a href="javascript:void(0)">Номенклатура</a></li>
                            <li><a href="javascript:void(0)">Заказы</a></li>
                        </ul>
                    </div>
                    <div className="one-menu-column">
                        <h3>Сервис</h3>
                        <ul>
                            <li><a href="javascript:void(0)">Идеи и предложения</a></li>
                            <li><a href="javascript:void(0)">Управление пользователями</a></li>
                            <li><a href="javascript:void(0)">Настройки сервиса</a></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-bot">
                    <span>©2017 <a href="http://aniart.com.ua/">AniArt</a></span>
                    <a href="javascript:void(0)" className="logo"><img src="images/logo.png" alt="logo" /></a>
                </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  }
}

export default SettingsPopup;
