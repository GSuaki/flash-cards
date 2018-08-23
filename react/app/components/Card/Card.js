import React, { Component } from 'react'
import ReactPlaceholder from 'react-placeholder';
import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  getPlaceholder() {
    return (
      <div className='awesome-placeholder'>
        <RectShape color='#e4e4e4' style={{width: '100%', height: 158 }}/>
        <TextBlock rows={7} color='#e4e4e4' style={{ padding: 10 }}/>
      </div>
    );
  }

  render() {
    const { placeholder } = this.props.item;

    return (
      <div className="card" onClick={ this.clickListener }>
        <ReactPlaceholder showLoadingAnimation ready={ !placeholder } customPlaceholder={ this.getPlaceholder() }>
          { this.renderContent() }
        </ReactPlaceholder>
      </div>
    );
  }

  renderContent() { }

  clickListener() { }

}

export default Card;