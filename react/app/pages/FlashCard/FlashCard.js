import React from "react";
import { compose } from 'redux'
import { connect } from "react-redux"
import { withRouter } from 'react-router'

import CollectionView from '../Collection/components/CollectionView/CollectionView'

import { fetchCards } from '../../store/flashcard/actions'

class Collection extends React.Component {
    
  constructor(props) {
    super(props);
  }

  componentDidMount( ) { 
    if (this.props.flashcards.length == 0) {
      this.props.fetchCards()
    }
  }

  render( ) {
    return (
      <section>
        <div className="container fadeInDown gotham-light">
          <div className="row">
            <div className="col-12">
              { this.renderList() }
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderList() {
    return <CollectionView collections={ this.props.flashcards } />
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
  flashcards: state.flashcard.data,
} );

const mapDispatchToProps = {
  fetchCards
};

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( Collection );
