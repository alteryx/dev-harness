import React from 'react';
import { AyxAppWrapper } from '@ayx/ui-core';

import UiSdkContext from '../../Context';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  updateContext = context => {
    this.setState({
      ...context
    });
  };

  componentDidMount() {
    const { contentWindow } = this.props;

    contentWindow.addEventListener('message', ({ data }) => {
      this.setState({
        ...data
      });
    });
  }

  render() {
    return (
      <AyxAppWrapper>
        <UiSdkContext.Provider updateContext={this.updateContext} value={this.state}>
          {this.props.children}
        </UiSdkContext.Provider>
      </AyxAppWrapper>
    );
  }
}

export default Provider;
