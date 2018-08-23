import React, { Component } from 'react'

class List extends Component {

  render() {
    const { items, emptyTemplate, itemRendered } = this.props;
    return items.length ? items.map(itemRendered) : emptyTemplate; 
  }
}

export default List;
