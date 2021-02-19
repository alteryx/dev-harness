import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AyxAppWrapper from '../../AyxAppWrapper';
import Avatar from '../Avatar';

configure({ adapter: new Adapter() });

const muiThemeWrapper = component => mount(
  <AyxAppWrapper >
    {component}
  </AyxAppWrapper>
);

describe('Avatar', () => {
  it('should add the correct class when size prop is added', () => {
    const props = {
      size: 'xlarge'
    };
    const wrapper = muiThemeWrapper(
      <Avatar {...props} />
    );

    const actual = wrapper.find(Avatar).getDOMNode().className.includes('-xlarge');
    const expected = true
    expect(actual).toBe(expected);
  });

  it('should not add a class when incorrect size prop is added', () => {
    const props = {
      size: 'xlss'
    };
    const wrapper = muiThemeWrapper(
      <Avatar {...props} />
    );

    const actual = wrapper.find(Avatar).getDOMNode().className.includes('xlss');
    const expected = false
    expect(actual).toBe(expected);
  });

  it('should default to "medium" if no size prop is added', () => {
    const wrapper = muiThemeWrapper(
      <Avatar />
    );

    const actual = wrapper.find(Avatar).getDOMNode().className.includes('-medium');
    const expected = true
    expect(actual).toBe(expected);
  });
});