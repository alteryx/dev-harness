import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AyxAppWrapper from '../AyxAppWrapper';
import Button from '../Button';

configure({ adapter: new Adapter() });

const muiThemeWrapper = component => mount(<AyxAppWrapper>{component}</AyxAppWrapper>);

describe('dataUICMaker', () => {
  it('adds a data-uic attribute with the component name', () => {
    const wrapper = muiThemeWrapper(<Button>Toasty</Button>);
    const expected = true;
    const actual = wrapper.find('[data-uic="button"]').exists();

    expect(actual).toBe(expected);
  });

  it('adds muiName property on component', () => {
    const wrapper = muiThemeWrapper(<Button>Arrow</Button>);
    const expected = 'Button';
    const actual = wrapper.find(Button).type().muiName;

    expect(actual).toBe(expected);
  });

  it('adds displayName property on component', () => {
    const wrapper = muiThemeWrapper(<Button>Arrow</Button>);
    const expected = 'WithStyles(ForwardRef(Button))';
    const actual = wrapper.find(Button).type().displayName;

    expect(actual).toBe(expected);
  });
});
