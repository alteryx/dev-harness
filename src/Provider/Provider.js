import React from 'react';
import { AyxAppWrapper } from '@ayx/ui-core';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const { contentWindow } = this.props;

    console.log(contentWindow);
    contentWindow.addEventListener('message', ({ data }) => {
      this.setState({
        ...data
      });
    });
  }

  render() {
    return (
      <AyxAppWrapper>
        {this.state.data && this.state.data.meta ? <h1> {this.state.data.meta} </h1> : null}
      </AyxAppWrapper>
    );
  }
}

export default Provider;
