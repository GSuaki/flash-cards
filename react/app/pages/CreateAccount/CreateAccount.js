import React from "react";
import { compose } from 'redux'
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

import { createAccount } from "../../store/user/actions";

class CreateAccount extends React.Component {
  
  state = {
    form: {
      name: undefined,
      email: undefined,
      login: undefined,
      password: undefined
    }
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onSubmitHandler( ) {
    this.props.createAccount(this.state.form)
      .then(() => this.props.history.push('/'))
  }

  handleChange( { target } ) {
    this.setState(prev => {
      return { 
        ...prev, 
        form: { 
          ...prev.form,
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
              <input type="text" className="fadeIn second" name="name" placeholder="nome" onChange={ this.handleChange } />
              <input type="text" className="fadeIn third" name="login" placeholder="usuário" onChange={ this.handleChange } />
              <input type="text" className="fadeIn third" name="email" placeholder="e-mail" onChange={ this.handleChange } />
              <input type="password" className="fadeIn third" name="password" placeholder="senha" onChange={ this.handleChange } />
              
              <input  type="button" className="fadeIn fourth" value="Criar conta" onClick={ this.onSubmitHandler } />
            </form>

            <div id="formFooter">
              <Link to="/login">Voltar</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  createAccount
};

export default compose(
  withRouter, 
  connect( null, mapDispatchToProps )
)( CreateAccount );
