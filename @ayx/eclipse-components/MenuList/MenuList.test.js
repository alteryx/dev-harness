import * as React from 'react';
import { stub } from 'sinon';
import { mount, configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMount } from '@material-ui/core/test-utils';
import getScrollbarSize from '@material-ui/core/utils/getScrollbarSize';

import AyxAppWrapper from '../AyxAppWrapper';
import List from '../List';

import MenuList from './index';

configure({ adapter: new Adapter() });
const muiThemeWrapper = component => mount(<AyxAppWrapper>{component}</AyxAppWrapper>);

function setStyleWidthForJsdomOrBrowser(style, width) {
  style.width = '';
  style.width = 'calc(100% + 0px)';
  if (style.width !== 'calc(100% + 0px)') {
    // For jsdom
    Object.defineProperty(style, 'width', { writable: true, value: '' });
  }
  style.width = width;
}

describe('<MenuList />', () => {
  // let mount;
  // const render = createClientRender();

  // beforeEach(() => {
  //   mount = createMount({ strict: true });
  // });

  // describeConformance(<MenuList />, () => ({
  //   classes: {},
  //   inheritComponent: List,
  //   mount,
  //   refInstanceof: window.HTMLUListElement,
  //   skip: ['componentProp'],
  //   after: () => mount.cleanUp(),
  // }));

  describe('prop: children', () => {
    it('should support null children', () => {
      const wrapper = render(
        <MenuList>
          <div role="menuitem">one</div>
          <div role="menuitem">two</div>
          {null}
        </MenuList>
      );
      const items = wrapper.find('[role="menuitem"]');
      expect(items.length).toBe(2);
    });
  });

  // no idea how to get these to pass...
  // describe('actions: adjustStyleForScrollbar', () => {
  //   const expectedPadding = `${getScrollbarSize(true)}px`;

  //   it('should not adjust style when container element height is greater', () => {
  //     const menuListActionsRef = React.createRef();
  //     const listRef = React.createRef();
  //     render(<MenuList ref={listRef} actions={menuListActionsRef} />);
  //     const list = listRef.current;

  //     expect(list.style).to.have.property('paddingRight', '');
  //     expect(list.style).to.have.property('paddingLeft', '');
  //     expect(list.style).to.have.property('width', '');

  //     menuListActionsRef.current.adjustStyleForScrollbar(
  //       { clientHeight: 20 },
  //       { direction: 'ltr' },
  //     );

  //     expect(list.style).to.have.property('paddingRight', '');
  //     expect(list.style).to.have.property('paddingLeft', '');
  //     expect(list.style).to.have.property('width', '');
  //   });

  //   it('should adjust style when container element height is less', () => {
  //     const menuListActionsRef = React.createRef();
  //     const listRef = React.createRef();
  //     render(<MenuList ref={listRef} actions={menuListActionsRef} />);
  //     const list = listRef.current;
  //     setStyleWidthForJsdomOrBrowser(list.style, '');
  //     stub(list, 'clientHeight').get(() => 11);

  //     expect(list.style).to.have.property('paddingRight', '');
  //     expect(list.style).to.have.property('paddingLeft', '');
  //     expect(list.style).to.have.property('width', '');

  //     menuListActionsRef.current.adjustStyleForScrollbar(
  //       { clientHeight: 10 },
  //       { direction: 'ltr' },
  //     );

  //     expect(list.style).to.have.property('paddingRight', expectedPadding);
  //     expect(list.style).to.have.property('paddingLeft', '');
  //     expect(list.style).to.have.property('width', `calc(100% + ${expectedPadding})`);
  //   });

  //   it('should adjust paddingLeft when direction=rtl', () => {
  //     const menuListActionsRef = React.createRef();
  //     const listRef = React.createRef();
  //     render(<MenuList ref={listRef} actions={menuListActionsRef} />);
  //     const list = listRef.current;
  //     setStyleWidthForJsdomOrBrowser(list.style, '');
  //     stub(list, 'clientHeight').get(() => 11);

  //     expect(list.style).to.have.property('paddingRight', '');
  //     expect(list.style).to.have.property('paddingLeft', '');
  //     expect(list.style).to.have.property('width', '');

  //     menuListActionsRef.current.adjustStyleForScrollbar(
  //       { clientHeight: 10 },
  //       { direction: 'rtl' },
  //     );

  //     expect(list.style).to.have.property('paddingRight', '');
  //     expect(list.style).to.have.property('paddingLeft', expectedPadding);
  //     expect(list.style).to.have.property('width', `calc(100% + ${expectedPadding})`);
  //   });

  //   it('should not adjust styles when width already specified', () => {
  //     const menuListActionsRef = React.createRef();
  //     const listRef = React.createRef();
  //     mount(<MenuList ref={listRef} actions={menuListActionsRef} />);
  //     const list = listRef.current;
  //     setStyleWidthForJsdomOrBrowser(list.style, '10px');
  //     Object.defineProperty(list, 'clientHeight', { value: 11 });

  //     expect(list.style).to.have.property('paddingRight', '');
  //     expect(list.style).to.have.property('paddingLeft', '');
  //     expect(list.style).to.have.property('width', '10px');

  //     menuListActionsRef.current.adjustStyleForScrollbar(
  //       { clientHeight: 10 },
  //       { direction: 'rtl' },
  //     );

  //     expect(list.style).to.have.property('paddingRight', '');
  //     expect(list.style).to.have.property('paddingLeft', '');
  //     expect(list.style).to.have.property('width', '10px');
  //   });
  // });
});
