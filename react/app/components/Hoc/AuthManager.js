import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function withAuthRequired(ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/login');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps({ session: authenticated }) {
    return { authenticated };
  }

  return connect(mapStateToProps)(RequireAuth);
}

export function withUnauthRequired(ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps({ session: { authenticated } }) {
    return { authenticated };
  }

  return connect(mapStateToProps)(RequireAuth);
}

export default {
  withAuthRequired,
  withUnauthRequired
}