import React from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";

let mql = {}

class SidebarWrapper extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: props.open
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState(prev => {
      return {
        ...prev,
        sidebarOpen: props.open
      }
    })
  }

  render( ) {
    const { sidebarOpen, sidebarDocked } = this.state
    return (
      <Sidebar
        sidebar={ <b>Sidebar content</b> }
        open={ sidebarOpen }
        docked={ sidebarDocked }
        onSetOpen={ this.onSetSidebarOpen }
      >
        { this.props.children }
      </Sidebar>
    );
  }

  componentDidMount() {
    mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
}

export default SidebarWrapper;
