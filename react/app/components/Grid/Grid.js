import React, { Component } from 'react'

class Grid extends Component {

  render() {
    return (
      <div className="grid">
        <ul className="list-inline">
          { this.renderItems() }
        </ul>
      </div>
    );
  }

  renderItems() {
    const { items, itemProps, EmptyTemplate, ItemTemplate } = this.props;

    const renderedItems = items.map(item => 
      <li className="list-inline-item align-items-start">
        <ItemTemplate key={ item.id }  item={ item } { ...itemProps } /> 
      </li>
    )

    return items.length ? renderedItems : EmptyTemplate; 
  }
}

export default Grid;
