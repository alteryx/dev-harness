import * as React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListItem from '../ListItem';
import ListItemSecondaryAction from '../ListItemSecondaryAction';

import MenuItem from './index';

configure({ adapter: new Adapter() });

describe('<MenuItem />', () => {
  it('should render a button ListItem with with ripple', () => {
    const wrapper = mount(<MenuItem />);
    expect(wrapper.type().muiName).toBe('MenuItem');
    expect(wrapper.find(ListItem).props().button).toBe(true);
    expect(wrapper.find(ListItem).props().disableRipple).toBe(undefined);
  });

  // it('should render with the selected class', () => {
  //   const wrapper = shallow(<MenuItem selected />);
  //   assert.strictEqual(wrapper.hasClass(classes.selected), true);
  // });

  it('should have a default role of menuitem', () => {
    const wrapper = mount(<MenuItem />);
    expect(wrapper.find(ListItem).props().role).toBe('menuitem');
  });

  it('should have a role of option', () => {
    const wrapper = shallow(<MenuItem aria-selected={false} role="option" />);
    expect(wrapper.props().role).toBe('option');
  });

  it('should have a tabIndex of -1 by default', () => {
    const wrapper = mount(<MenuItem />);
    expect(wrapper.find(ListItem).props().tabIndex).toBe(-1);
  });

  // I commented out areas of MenuItem dealing with this and couldn't
  // get the test to fail, I dont trust it...
  // describe('event callbacks', () => {
  //   it('should fire event callbacks', () => {
  //     const events = [
  //       'onClick',
  //       'onFocus',
  //       'onBlur',
  //       'onKeyUp',
  //       'onKeyDown',
  //       'onMouseDown',
  //       'onMouseLeave',
  //       'onMouseUp',
  //       'onTouchEnd',
  //       'onTouchStart'
  //     ];

  //     const handlers = events.reduce((result, n) => {
  //       result[n] = spy();
  //       return result;
  //     }, {});

  //     const wrapper = shallow(<MenuItem {...handlers} />);

  //     events.forEach(n => {
  //       const event = n.charAt(2).toLowerCase() + n.slice(3);
  //       wrapper.simulate(event, { persist: () => {} });
  //       expect(handlers[n].callCount).toBe(1);
  //     });
  //   });
  // });

  describe('mount', () => {
    it('should not fail with a li > li error message', () => {
      const wrapper1 = mount(
        <MenuItem>
          <ListItemSecondaryAction>
            <div />
          </ListItemSecondaryAction>
        </MenuItem>
      );
      expect(wrapper1.find('li').length).toBe(1);
      const wrapper2 = mount(
        <MenuItem button={false}>
          <ListItemSecondaryAction>
            <div />
          </ListItemSecondaryAction>
        </MenuItem>
      );
      expect(wrapper2.find('li').length).toBe(1);
    });
  });

  describe('prop: ListItemClasses', () => {
    it('should be able to change the style of ListItem', () => {
      const wrapper = mount(<MenuItem ListItemClasses={{ disabled: 'bar' }} />);
      expect(wrapper.find(ListItem).props().classes.disabled).toBe('bar');
    });
  });
});
