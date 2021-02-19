import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AyxAppWrapper from '../../AyxAppWrapper';
import Tooltip from '../Tooltip';
import Button from '../../Button';

configure({ adapter: new Adapter() });

const muiThemeWrapper = component => mount(<AyxAppWrapper>{component}</AyxAppWrapper>);

describe('Tooltip', () => {
  it('displays the custom UIC arrow when the arrow prop is true', () => {
    const props = {
      arrow: true,
      title: 'Arrow'
    };
    const wrapper = muiThemeWrapper(
      <Tooltip {...props}>
        <Button>Arrow</Button>
      </Tooltip>
    );
    const expected = true;
    const actual = wrapper
      .find('ForwardRef(Tooltip)')
      .get(0)
      .props.classes.popper.includes('arrowPopper'); // using the string form because this is not using one of our ui-core components but the MUI component

    expect(actual).toBe(expected);
  });

  it('displays the custom UIC arrow when the title prop is an element', () => {
    const props = {
      arrow: true,
      title: <div>`Arrow`</div>
    };
    const wrapper = muiThemeWrapper(
      <Tooltip {...props}>
        <Button>Arrow</Button>
      </Tooltip>
    );
    const expected = true;
    const actual = wrapper
      .find('ForwardRef(Tooltip)')
      .get(0)
      .props.classes.popper.includes('arrowPopper'); // using the string form because this is not using one of our ui-core components but the MUI component

    expect(actual).toBe(expected);
  });

  it('does not display an arrow when the arrow prop is false', () => {
    const props = {
      arrow: false,
      title: 'Arrow'
    };
    const wrapper = muiThemeWrapper(
      <Tooltip {...props}>
        <Button>Arrow</Button>
      </Tooltip>
    );
    const expected = false;
    const actual = wrapper
      .find('ForwardRef(Tooltip)')
      .get(0)
      .props.classes.popper.includes('arrowPopper'); // using the string form because this is not using one of our ui-core components but the MUI component

    expect(actual).toBe(expected);
  });

  it('does not display a tooltip when the arrow prop is true and title is empty', () => {
    const props = {
      arrow: true,
      title: ''
    };
    const wrapper = muiThemeWrapper(
      <Tooltip {...props}>
        <Button>Arrow</Button>
      </Tooltip>
    );
    const expected = false;
    const actual = wrapper
      .find('ForwardRef(Tooltip)')
      .get(0)
      .props.classes.popper.includes('arrowPopper'); // using the string form because this is not using one of our ui-core components but the MUI component

    expect(actual).toBe(expected);
  });
});
