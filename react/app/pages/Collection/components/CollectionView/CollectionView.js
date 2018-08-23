import React from "react";
import { connect } from 'react-redux'

import List from '../../../../components/List/List'
import Card from '../CollectionCard/CollectionCard'

class CollectionView extends React.Component {
    
  constructor(props) {
    super(props);
  }

  render( ) {
    return (
      <List
        items={ this.props.collections }
        itemRendered={ this.renderItem }
        emptyTemplate={ this.emptyTemplate() }
      />
    );
  }

  renderItem(item) {
    return (
      <div className="row" key={item.id}>
        <div className="col-12">
          <Card item={item} />
        </div>
      </div>
    )
  }

  emptyTemplate() {
    return (
      <div className="text-center" style={{ paddingTop: 20 }}>
        <h3>Crie sua primeira coleção =)</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionView);
