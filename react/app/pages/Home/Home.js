import React from "react";
import { compose } from 'redux'
import { connect } from "react-redux"
import { withRouter } from 'react-router'

import SideBar from "../../components/SideBar/SideBar";
import CollectionView from '../../components/CollectionView/CollectionView'

import { fetchCollections } from '../../store/collection/actions'

class Home extends React.Component {
    
  constructor(props) {
    super(props);
  }

  componentDidMount( ) { 
    if (this.props.collections.length == 0) {
      this.props.fetchCollections()
    }
  }

  render( ) {
    console.log(this.props.collections)
    return (
      <section>
        <SideBar> 
          <div className="wrapper fadeInDown gotham-light">
            { this.renderList() }
          </div>
        </SideBar>
      </section>
    );
  }

  renderList() {
    return <CollectionView collections={ this.props.collections } />
  }

  emptyTemplate() {
    return (
      <div className="text-center" style={{ paddingTop: 20 }}>
        <h3>Não encontramos artistas com os filtros utilizados =(</h3>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  collections: state.collection.data,
} );

const mapDispatchToProps = {
  fetchCollections
};

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( Home );
