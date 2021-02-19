/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import { spy, useFakeTimers } from 'sinon';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../Button';
import Popover from '../Popover';
import MenuItem from '../MenuItem';
import MenuList from '../MenuList';
import AyxAppWrapper from '../AyxAppWrapper';

import Menu from './index';

const MENU_LIST_HEIGHT = 100;

configure({ adapter: new Adapter() });
const muiThemeWrapper = component => mount(<AyxAppWrapper>{component}</AyxAppWrapper>);

describe('<Menu />', () => {
  // let classes;

  const defaultProps = {
    open: false,
    anchorEl: () => document.createElement('div')
  };

  beforeEach(() => {
    // classes = getClasses(<Menu {...defaultProps} />);
    // StrictModeViolation: uses Popover
    // mount = createMount({ strict: false });
  });

  // afterEach(() => {
  //   mount.cleanUp();
  // });

  describe('event callbacks', () => {
    describe('entering', () => {
      it('should fire callbacks', done => {
        const handleEnter = spy();
        const handleEntering = spy();

        const wrapper = mount(
          <Menu
            onEnter={handleEnter}
            onEntering={handleEntering}
            onEntered={() => {
              expect(handleEnter.callCount).toBe(1);
              expect(handleEnter.args[0].length).toBe(2);
              expect(handleEntering.callCount).toBe(1);
              expect(handleEntering.args[0].length).toBe(2);
              done();
            }}
            {...defaultProps}
          />
        );

        wrapper.setProps({
          open: true
        });
      });
    });

    describe('exiting', () => {
      it('should fire callbacks', done => {
        const handleExit = spy();
        const handleExiting = spy();

        const wrapper = mount(
          <Menu
            onExit={handleExit}
            onExiting={handleExiting}
            onExited={() => {
              expect(handleExit.callCount).toBe(1);
              expect(handleExit.args[0].length).toBe(1);
              expect(handleExiting.callCount).toBe(1);
              expect(handleExiting.args[0].length).toBe(1);
              done();
            }}
            {...defaultProps}
            open
          />
        );

        wrapper.setProps({
          open: false
        });
      });
    });
  });

  // it('should pass `classes.paper` to the Popover', () => {
  //   const wrapper = mount(<Menu {...defaultProps} />);
  //   expect(wrapper.find(Popover).props().PaperProps.classes.root).toBe(classes.paper);
  // });

  describe('prop: PopoverClasses', () => {
    it('should be able to change the Popover style', () => {
      const wrapper = mount(<Menu {...defaultProps} PopoverClasses={{ paper: 'bar' }} />);
      expect(wrapper.find(Popover).props().classes.paper).toBe('bar');
    });
  });

  it('should pass the instance function `getContentAnchorEl` to Popover', () => {
    const menuRef = React.createRef();
    const wrapper = mount(<Menu ref={menuRef} {...defaultProps} />);
    expect(wrapper.find(Popover).props().getContentAnchorEl != null).toBe(true);
  });

  it('should pass onClose prop to Popover', () => {
    const fn = () => {};
    const wrapper = mount(<Menu {...defaultProps} onClose={fn} />);
    expect(wrapper.find(Popover).props().onClose).toBe(fn);
  });

  it('should pass anchorEl prop to Popover', () => {
    const el = document.createElement('div');
    const wrapper = mount(<Menu {...defaultProps} anchorEl={el} />);
    expect(wrapper.find(Popover).props().anchorEl).toBe(el);
  });

  it('should pass through the `open` prop to Popover', () => {
    const wrapper = mount(<Menu {...defaultProps} />);
    expect(wrapper.find(Popover).props().open).toBe(false);
    wrapper.setProps({ open: true });
    expect(wrapper.find(Popover).props().open).toBe(true);
  });

  describe('list node', () => {
    let wrapper;

    it('should render a MenuList inside the Popover', () => {
      wrapper = mount(<Menu {...defaultProps} className="test-class" data-test="hi" open />);
      expect(
        wrapper
          .find(Popover)
          .find(MenuList)
          .exists()
      ).toBe(true);
    });
  });

  it('should open during the initial mount', () => {
    const wrapper = mount(
      <Menu {...defaultProps} open>
        <div role="menuitem" tabIndex={-1}>
          one
        </div>
      </Menu>
    );

    const popover = wrapper.find(Popover);
    expect(popover.props().open).toBe(true);
    expect(wrapper.find('[role="menuitem"]').props().autoFocus).toBe(true);
  });

  it('should not focus list if autoFocus=false', () => {
    const wrapper = mount(
      <Menu {...defaultProps} autoFocus={false} open>
        <div tabIndex={-1} />
      </Menu>
    );
    const popover = wrapper.find(Popover);
    expect(popover.props().open).toBe(true);
    const menuEl = document.querySelector('[data-mui-test="Menu"]');
    expect(document.activeElement).not.toBe(menuEl);
    expect(menuEl.contains(document.activeElement)).toBe(false);
  });

  it('should call props.onEntering with element if exists', () => {
    const onEnteringSpy = spy();
    const wrapper = mount(<Menu {...defaultProps} onEntering={onEnteringSpy} />);
    const popover = wrapper.find(Popover);

    const elementForHandleEnter = { clientHeight: MENU_LIST_HEIGHT };

    popover.props().onEntering(elementForHandleEnter);
    expect(onEnteringSpy.callCount).toBe(1);
    expect(onEnteringSpy.calledWith(elementForHandleEnter)).toBe(true);
  });

  it('should call props.onEntering, disableAutoFocusItem', () => {
    const onEnteringSpy = spy();
    const wrapper = mount(<Menu disableAutoFocusItem {...defaultProps} onEntering={onEnteringSpy} />);
    const popover = wrapper.find(Popover);

    const elementForHandleEnter = { clientHeight: MENU_LIST_HEIGHT };

    popover.props().onEntering(elementForHandleEnter);
    expect(onEnteringSpy.callCount).toBe(1);
    expect(onEnteringSpy.calledWith(elementForHandleEnter)).toBe(true);
  });

  it('should call onClose on tab', () => {
    const onCloseSpy = spy();
    const wrapper = mount(
      <Menu {...defaultProps} open onClose={onCloseSpy}>
        <span>hello</span>
      </Menu>
    );
    wrapper.find('span').simulate('keyDown', {
      key: 'Tab'
    });
    expect(onCloseSpy.callCount).toBe(1);
    expect(onCloseSpy.args[0][1]).toBe('tabKeyDown');
  });

  it('ignores invalid children', () => {
    const wrapper = mount(
      <Menu {...defaultProps} open>
        {null}
        <span role="menuitem">hello</span>
        {/* testing conditional rendering */}
        {false && <span role="menuitem">hello</span>}
        {undefined}
        foo
      </Menu>
    );

    expect(wrapper.find('span[role="menuitem"]').length).toBe(1);
  });

  // describe('warnings', () => {
  //   before(() => {
  //     consoleErrorMock.spy();
  //   });

  //   after(() => {
  //     consoleErrorMock.reset();
  //   });

  //   it('warns a Fragment is passed as a child', () => {
  //     mount(
  //       <Menu anchorEl={document.createElement('div')} open>
  //         <React.Fragment />
  //       </Menu>,
  //     );

  //     assert.strictEqual(consoleErrorMock.callCount(), 2);
  //     assert.include(
  //       consoleErrorMock.messages()[0],
  //       "Material-UI: the Menu component doesn't accept a Fragment as a child.",
  //     );
  //   });
  // });

  describe('cascading menu', () => {
    let clock;
    let wrapper;

    const CascadingMenu = props => {
      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleButtonClick = event => {
        setAnchorEl(event.currentTarget);
      };

      const handleItemClick = () => {
        setAnchorEl(null);
      };

      return (
        <div>
          <Button onClick={handleButtonClick}>Open Menu</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleItemClick}
            transitionDuration={0}
            {...props}
          >
            <MenuItem
              id="settings-item"
              subMenu={
                <Menu>
                  <MenuItem id="dark-mode" onClick={handleItemClick}>
                    Dark Mode
                  </MenuItem>
                  <MenuItem
                    id="go-deeper-1"
                    subMenu={
                      <Menu>
                        <MenuItem key="deeper2" id="go-deeper-2">
                          Go deeper
                        </MenuItem>
                      </Menu>
                    }
                  >
                    Go deeper
                  </MenuItem>
                </Menu>
              }
            >
              Settings
            </MenuItem>
            <MenuItem
              id="account-item"
              subMenu={
                <Menu>
                  <MenuItem id="reset-password" onClick={handleItemClick}>
                    Reset password
                  </MenuItem>
                  <MenuItem id="change-username" onClick={handleItemClick}>
                    Change username
                  </MenuItem>
                </Menu>
              }
            >
              My account
            </MenuItem>
          </Menu>
        </div>
      );
    };

    beforeEach(() => {
      clock = useFakeTimers();
      wrapper = muiThemeWrapper(<CascadingMenu />);

      // StrictModeViolation: uses Popover
      // cascadeMount = createMount({ strict: false });
      // wrapper = muiThemeWrapper(<CascadingMenu />);
    });

    afterEach(() => {
      clock.restore();
      // cascadeMount.cleanUp();
    });

    it('displays a sub menu level 1', () => {
      wrapper.find(Button).simulate('click');
      wrapper
        .find('#settings-item')
        .last()
        .simulate('mousemove');

      clock.tick(0);
      wrapper.update();
      expect(wrapper.find('#dark-mode').exists()).toBe(true);
    });

    it('displays a sub menu level 2', () => {
      wrapper.find(Button).simulate('click');
      wrapper
        .find('#settings-item')
        .last()
        .simulate('mousemove');

      clock.tick(0);
      wrapper.update();

      wrapper
        .find('#go-deeper-1')
        .last()
        .simulate('mousemove');

      clock.tick(500);
      wrapper.update();

      expect(wrapper.find('#go-deeper-2').exists()).toBe(true);
    });

    it('sub menus collapse when parent menu is changed', () => {
      wrapper.find(Button).simulate('click');
      wrapper
        .find('#settings-item')
        .last()
        .simulate('mousemove');

      clock.tick(0);
      wrapper.update();

      wrapper
        .find('#account-item')
        .last()
        .simulate('mousemove');

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#change-username').exists()).toBe(true);
      wrapper
        .find('#settings-item')
        .last()
        .simulate('mousemove');

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#change-username').exists()).toBe(false);
    });

    it('sub menu stays open when mouse is outside of menu', () => {
      wrapper.find(Button).simulate('click');
      wrapper
        .find('#settings-item')
        .last()
        .simulate('mousemove');

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#dark-mode').exists()).toBe(true);

      wrapper
        .find('#dark-mode')
        .last()
        .simulate('mousemove');
      wrapper
        .find('#dark-mode')
        .last()
        .simulate('mouseout');
      wrapper.find(Button).simulate('mouseenter');

      expect(
        wrapper
          .find('#dark-mode')
          .last()
          .exists()
      ).toBe(true);
    });

    it('opens a sub Menu on RightArrow keydown', () => {
      wrapper.find(Button).simulate('click');

      clock.tick(200);
      wrapper.update();

      wrapper
        .find('#settings-item')
        .last()
        .simulate('keyDown', {
          key: 'ArrowRight'
        });

      clock.tick(200);
      wrapper.update();

      const expected = true;
      const actual = wrapper.find('#dark-mode').exists();
      expect(actual).toBe(expected);
    });

    it('closes current sub Menu on LeftArrow keydown', () => {
      wrapper.find(Button).simulate('click');

      clock.tick(0);
      wrapper.update();

      wrapper
        .find('#settings-item')
        .last()
        .simulate('keyDown', {
          key: 'ArrowRight'
        });

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#dark-mode').exists()).toBe(true);

      wrapper
        .find('#dark-mode')
        .last()
        .simulate('keyDown', {
          key: 'ArrowLeft'
        });

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#dark-mode').exists()).toBe(false);
    });

    it('closes all menus on Tab keydown', () => {
      wrapper.find(Button).simulate('click');

      clock.tick(0);
      wrapper.update();

      wrapper
        .find('#settings-item')
        .last()
        .simulate('keyDown', {
          key: 'ArrowRight'
        });

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#dark-mode').exists()).toBe(true);

      wrapper
        .find('#dark-mode')
        .last()
        .simulate('keyDown', {
          key: 'Tab'
        });

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#settings-item').exists()).toBe(false);
      expect(wrapper.find('#dark-mode').exists()).toBe(false);
    });

    it('closes all menus on Escape keydown', () => {
      wrapper.find(Button).simulate('click');

      clock.tick(0);
      wrapper.update();

      wrapper
        .find('#settings-item')
        .last()
        .simulate('keyDown', {
          key: 'ArrowRight'
        });

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#dark-mode').exists()).toBe(true);

      wrapper
        .find('#dark-mode')
        .last()
        .simulate('keyDown', {
          key: 'Escape'
        });

      clock.tick(0);
      wrapper.update();

      expect(wrapper.find('#settings-item').exists()).toBe(false);
      expect(wrapper.find('#dark-mode').exists()).toBe(false);
    });

    it('changes focus with up and down arrow buttons', () => {
      wrapper.find(Button).simulate('click');

      clock.tick(0);
      wrapper.update();

      wrapper
        .find('#settings-item')
        .last()
        .simulate('keyDown', {
          key: 'ArrowRight'
        });

      clock.tick(0);
      wrapper.update();

      expect(
        wrapper
          .find('#dark-mode')
          .last()
          .hasClass('Mui-focusVisible')
      ).toBe(true);

      wrapper
        .find('#dark-mode')
        .last()
        .simulate('keyDown', {
          key: 'ArrowDown'
        });
      expect(
        wrapper
          .find('#dark-mode')
          .last()
          .hasClass('Mui-focusVisible')
      ).toBe(false);

      wrapper
        .find('#dark-mode')
        .last()
        .simulate('keyDown', {
          key: 'ArrowUp'
        });
      expect(
        wrapper
          .find('#dark-mode')
          .last()
          .hasClass('Mui-focusVisible')
      ).toBe(true);
    });

    it('changes focus with left and right arrow buttons', () => {
      wrapper.find(Button).simulate('click');

      clock.tick(0);
      wrapper.update();

      wrapper
        .find('#settings-item')
        .last()
        .simulate('keyDown', {
          key: 'ArrowRight'
        });

      clock.tick(0);
      wrapper.update();

      expect(
        wrapper
          .find('#dark-mode')
          .last()
          .hasClass('Mui-focusVisible')
      ).toBe(true);

      wrapper
        .find('#dark-mode')
        .last()
        .simulate('keyDown', {
          key: 'ArrowLeft'
        });
      expect(
        wrapper
          .find('#settings-item')
          .last()
          .hasClass('Mui-focusVisible')
      ).toBe(true);

      wrapper
        .find('#settings-item')
        .last()
        .simulate('keyDown', {
          key: 'ArrowRight'
        });

      expect(
        wrapper
          .find('#dark-mode')
          .last()
          .hasClass('Mui-focusVisible')
      ).toBe(true);
    });
  });
});
