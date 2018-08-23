import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Card from '../../../../components/Card/Card'
import { fetchCards } from '../../../../store/flashcard/actions'

const formatAbout = (val = '') => val.length > 100 ? val.substring(0, 100).concat('...') : val;

class CollectionCard extends Card {

  constructor(props) {
    super(props);

    this.clickListener = this.clickListener.bind(this)
  }

  renderContent() {
    const { title, description = '' } = this.props.item;

    return (
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{ description }</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    );
  }

  clickListener() {
    const collectionId = this.props.item.id
    this.props.fetchCards(collectionId)
      .then(() => this.props.history.push(`/collections/${collectionId}/flash-cards`))
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  fetchCards
}

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( CollectionCard );