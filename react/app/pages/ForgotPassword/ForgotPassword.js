import React from "react";
import { connect } from "react-redux";

import { forgotPassword } from "../../store/user/actions";

class ForgotPassword extends React.Component {
  
  state = {
    email: null
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler( ) {
    this.props.forgotPassword(this.state.email)
  }

  handleChange( { target } ) {
    this.setState(prev => ({ ...prev, email: target.value }))
  }

  render( ) {
    return (
      <section>
        <div className="container gotham-light">
          <div className="row">
            <div className="col-12">
              <h4>Forgot Password</h4>
              <input type="text" id="email" className="fadeIn first" name="email" placeholder="Seu e-mail" onChange={ this.handleChange } />
              <button type="button" onClick={ this.onSubmitHandler }>Enviar</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  forgotPassword
};

export default connect( null, mapDispatchToProps )( ForgotPassword );
