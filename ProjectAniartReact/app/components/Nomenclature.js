import React, {Component} from 'react';

class Nomenclature extends React.Component {
  render() {
    return <div className="nomenclature-list-cont">
    <div className="categories-cont">
        <ul className="categories">
            <li>
                <a href="javascript:void(0)">Категория товаров</a>
                    <ul>
                        <li>
                            <a href="javascript:void(0)">Подкатегория товаров</a>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">Под-подкатегория товаров</a>
                                    <ul>
                                        <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                        <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                        <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                        <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                    </ul>
                                </li>
                                <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                            </ul>
                        </li>
                        <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                        <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                        <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                        <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                    </ul>
            </li>
            <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
            <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
            <li>
                <a href="javascript:void(0)">Категория товаров</a>
                <ul>
                    <li>
                        <a href="javascript:void(0)">Подкатегория товаров</a>
                        <ul>
                            <li>
                                <a href="javascript:void(0)">Под-подкатегория товаров</a>
                                <ul>
                                    <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                    <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                    <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                    <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                                </ul>
                            </li>
                            <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                            <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                            <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                        </ul>
                    </li>
                    <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                    <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                    <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                    <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
                </ul>
            </li>
            <li className="last-cat"><a href="javascript:void(0)">Конечная категория товаров</a></li>
        </ul>
    </div>
    <div className="products-cont">
        <div className="nom-prod-table" id="nom-prod-table">
            <div id="t-head">
                <div></div>
                <div>Название <i className="fa fa-sort-desc" aria-hidden="true"></i></div>
                <div>Артикул</div>
                <div>Тип</div>
                <div>Цена</div>
                <div>Штрих-код</div>
                <div>Вес</div>
                <div>Размеры</div>
                <div>Измерение</div>
            </div>
            <div className="t-body">
                <table id="cont-table">
                  <tbody>
                    <tr data-on="params-cont" onClick={this.props.onFilterPanelParamsOpen}>
                        <td>
                            <label>
                                <input type="checkbox" className="check-but" />
                                <div className="checkbox check-but"></div>
                            </label>
                        </td>
                        <td>Телевизор Samsung Н04</td>
                        <td>Aniart-Test-SKU-0000000003</td>
                        <td>номенклатура</td>
                        <td>65 000<span className="currency"> грн</span></td>
                        <td>635142837461</td>
                        <td>10 кг</td>
                        <td>130.15х60.50х10.54 см</td>
                        <td className="width80">шт</td>
                    </tr>
                    <tr data-on="params-cont" onClick={this.props.onFilterPanelParamsOpen}>
                        <td>
                            <label>
                                <input type="checkbox" className="check-but" />
                                <div className="checkbox check-but"></div>
                            </label>
                        </td>
                        <td>Телевизор Samsung Н04</td>
                        <td>Aniart-Test-SKU-0000000003</td>
                        <td>номенклатура</td>
                        <td>65 <span className="currency"> грн</span></td>
                        <td>635142837461</td>
                        <td>10 кг</td>
                        <td>130.15х60.50х10.54 см</td>
                        <td>шт</td>
                    </tr>
                    <tr data-on="params-cont" onClick={this.props.onFilterPanelParamsOpen}>
                        <td>
                            <label>
                                <input type="checkbox" className="check-but" />
                                <div className="checkbox check-but"></div>
                            </label>
                        </td>
                        <td>Телевизор Samsung Н04</td>
                        <td>Aniart-Test-SKU-0000000003</td>
                        <td>номенклатура</td>
                        <td>65 <span className="currency"> грн</span></td>
                        <td>635142837461</td>
                        <td>10 кг</td>
                        <td>130.15х60.50х10.54 см</td>
                        <td>шт</td>
                    </tr>
                    <tr data-on="params-cont" onClick={this.props.onFilterPanelParamsOpen}>
                        <td>
                            <label>
                                <input type="checkbox" className="check-but" />
                                <div className="checkbox check-but"></div>
                            </label>
                        </td>
                        <td>Телевизор Samsung Н04</td>
                        <td>Aniart-Test-SKU-0000000003</td>
                        <td>номенклатура</td>
                        <td>65 <span className="currency"> грн</span></td>
                        <td>635142837461</td>
                        <td>10 кг</td>
                        <td>130.15х60.50х10.54 см</td>
                        <td>шт</td>
                    </tr>
                    <tr data-on="params-cont" onClick={this.props.onFilterPanelParamsOpen}>
                        <td>
                            <label>
                                <input type="checkbox" className="check-but" />
                                <div className="checkbox check-but"></div>
                            </label>
                        </td>
                        <td>Телевизор Samsung Н04</td>
                        <td>Aniart-Test-SKU-0000000003</td>
                        <td>номенклатура</td>
                        <td>65 <span className="currency"> грн</span></td>
                        <td>635142837461</td>
                        <td>10 кг</td>
                        <td>130.15х60.50х10.54 см</td>
                        <td>шт</td>
                    </tr>
                    <tr data-on="params-cont" onClick={this.props.onFilterPanelParamsOpen}>
                        <td>
                            <label>
                                <input type="checkbox" className="check-but" />
                                <div className="checkbox check-but"></div>
                            </label>
                        </td>
                        <td>Телевизор Samsung Н04</td>
                        <td>Aniart-Test-SKU-0000000003</td>
                        <td>номенклатура</td>
                        <td>65 <span className="currency"> грн</span></td>
                        <td>635142837461</td>
                        <td>10 кг</td>
                        <td>130.15х60.50х10.54 см</td>
                        <td>шт</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="no-orders no-display">
            <div>
                <img src="images/info.png" alt="" />
            </div>
            <p>
                Чтобы увидеть номенклатуру товаров, выберите конечную категорию.
                Там же вы сможете создать новый товар и настроить отображение
            </p>
        </div>
    </div>
</div>
  }
}

export default Nomenclature;
