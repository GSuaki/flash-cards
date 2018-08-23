import React from "react";
import { compose } from 'redux'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

import { login } from "../../store/user/actions";

class Login extends React.PureComponent {
  
  state = {
    credentials: {
      login: null,
      pwd: null
    }
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler( ) {
    this.props.login(this.state.credentials)
      .then(() => this.props.history.push('/'))
  }

  handleChange( { target } ) {
    this.setState(prev => {
      return { 
        ...prev, 
        credentials: { 
          ...prev.credentials,
          [target.name]: target.value 
        } 
      }
    })
  }

  render( ) {
    return (
      <section>
        <div className="wrapper fadeInDown gotham-light">
          <div id="formContent">
            <div className="fadeIn first">
              <img src="../../assets/icons/user.svg" id="icon" alt="User Icon" />
            </div>

            <form>
              <input type="text" className="fadeIn second" name="login" placeholder="usuário ou e-mail" onChange={ this.handleChange } />
              <input type="password" className="fadeIn third" name="pwd" placeholder="senha" onChange={ this.handleChange } />
              
              <input  type="button" className="fadeIn fourth" value="Entrar" onClick={ this.onSubmitHandler } />
            </form>

            <div id="formFooter">
              <Link to="/forgot-password">Esqueceu sua senha?</Link>
              <br/>
              <Link to="/create-account">Cadastrar-se</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ( { feedback: { message } } ) => ( {
  message
} );

const mapDispatchToProps = {
  login,
};

export default compose(
  withRouter, 
  connect( mapStateToProps, mapDispatchToProps )
)( Login );
