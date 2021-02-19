/* eslint-disable max-classes-per-file */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AyxAppWrapper from '../AyxAppWrapper';
import Button from '../../Button';
import CssBaseline from '../../CssBaseline';
import { withStyles, createStyles, ThemeProvider } from '../../styles';

configure({ adapter: new Adapter() });

describe('AyxAppWrapper', () => {
  it('returns a ThemeProvider wrapped component', () => {
    const wrapper = shallow(
      <AyxAppWrapper>
        <Button variant="contained">test</Button>
      </AyxAppWrapper>
    );

    expect(wrapper.name()).toMatch(/ThemeProvider/);
  });

  it('default theme contains correct MuiButton theme ', () => {
    const expecteMinHeight = 0;
    const wrapper = shallow(
      <AyxAppWrapper>
        <Button id="test" variant="contained">
          test
        </Button>
      </AyxAppWrapper>
    );

    expect(wrapper.props().theme.overrides.MuiButton.root.minHeight).toEqual(expecteMinHeight);
    wrapper.unmount();
  });

  it('changes theme correctly when passed a custom theme object', () => {
    const expected = '#ffffff';
    const productTheme = {
      overrides: {
        MuiButton: {
          contained: {
            backgroundColor: expected
          }
        }
      }
    };

    const wrapper = shallow(
      <AyxAppWrapper theme={productTheme}>
        <Button id="test" variant="contained">
          test
        </Button>
      </AyxAppWrapper>
    );

    expect(wrapper.props().theme.overrides.MuiButton.contained.backgroundColor).toEqual(expected);
    wrapper.unmount();
  });

  it('custom theme function is called with a theme object containing a palette key', () => {
    const expected = true;
    let actual;

    const productTheme = theme => {
      actual = Object.keys(theme).includes('palette');
      return theme;
    };

    const wrapper = shallow(
      <AyxAppWrapper theme={productTheme}>
        <Button id="test" variant="contained">
          test
        </Button>
      </AyxAppWrapper>
    );

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('custom theme function does not break when using ui-core custom palette keys', () => {
    const productTheme = theme => {
      return {
        overrides: {
          MuiButton: {
            contained: {
              backgroundColor: theme.palette.brand.cottonCandy
            }
          }
        }
      };
    };

    const wrapper = shallow(
      <AyxAppWrapper theme={productTheme}>
        <Button id="test" variant="contained">
          test
        </Button>
      </AyxAppWrapper>
    );

    const actual = wrapper.props().theme.overrides.MuiButton.contained.backgroundColor;
    const expected = '#ffc6c3';

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('changes the palette type when passed a "paletteType" prop', () => {
    const productTheme = () => {
      return {
        overrides: {
          MuiButton: {
            contained: {
              backgroundColor: 'hotpink'
            }
          }
        }
      };
    };

    const wrapper = shallow(
      <AyxAppWrapper paletteType="dark" theme={productTheme}>
        <Button id="test" variant="contained">
          test
        </Button>
      </AyxAppWrapper>
    );

    const expected = 'dark';
    const actual = wrapper.props().theme.palette.type;

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('changes theme correctly when passed a custom theme function', () => {
    let expected;
    const productTheme = theme => {
      expected = theme.palette.background.paper;
      return {
        overrides: {
          MuiButton: {
            contained: {
              backgroundColor: expected
            }
          }
        }
      };
    };

    const wrapper = shallow(
      <AyxAppWrapper theme={productTheme}>
        <Button id="test" variant="contained">
          test
        </Button>
      </AyxAppWrapper>
    );

    expect(wrapper.props().theme.overrides.MuiButton.contained.backgroundColor).toEqual(expected);
    wrapper.unmount();
  });

  it('does not change default values if not overwritten by custom theme', () => {
    const expectedSpacing = 4;
    const expecteMinHeight = 0;
    const productTheme = {
      overrides: {
        MuiButton: {
          contained: {
            backgroundColor: '#ffffff'
          }
        }
      }
    };

    const wrapper = shallow(
      <AyxAppWrapper theme={productTheme}>
        <Button color="primary" id="test" variant="contained">
          test
        </Button>
      </AyxAppWrapper>
    );

    expect(wrapper.props().theme.spacing(1)).toEqual(expectedSpacing);
    expect(wrapper.props().theme.overrides.MuiButton.root.minHeight).toEqual(expecteMinHeight);
    wrapper.unmount();
  });

  it('default messages are set to empty', () => {
    const wrapper = mount(
      <AyxAppWrapper>
        <p>
          <FormattedMessage id="test2" />
        </p>
      </AyxAppWrapper>
    );

    // expecting FormattedMessage id since there is no matching key in messages obj.
    expect(wrapper.find('p').getDOMNode().textContent).toBe('test2');
    wrapper.unmount();
  });

  it('default locale is en', () => {
    const messages = {
      en: {
        test: 'success!'
      },
      de: {
        test: 'Erfolg!'
      }
    };

    const locale = 'en';
    const messageId = 'test';

    const expected = messages[locale][messageId];

    const wrapper = mount(
      // Note: not passing locale prop so default is used.
      <AyxAppWrapper messages={messages}>
        <p>
          <FormattedMessage id={messageId} />
        </p>
      </AyxAppWrapper>
    );

    const actual = wrapper.find('p').getDOMNode().textContent;

    expect(actual).toBe(expected);
    wrapper.unmount();
  });

  it('messages for provided locale are returned', () => {
    const messages = {
      en: {
        test: 'success!'
      },
      de: {
        test: 'Erfolg!'
      }
    };

    const locale = 'de';
    const messageId = 'test';

    const expected = messages[locale][messageId];

    const wrapper = mount(
      <AyxAppWrapper locale={locale} messages={messages}>
        <p>
          <FormattedMessage id={messageId} />
        </p>
      </AyxAppWrapper>
    );

    const actual = wrapper.find('p').getDOMNode().textContent;

    expect(actual).toBe(expected);
    wrapper.unmount();
  });

  it('switches messages when locales change correctly', () => {
    const messages = {
      en: {
        test: 'success!'
      },
      de: {
        test: 'Erfolg!'
      }
    };

    const messageId = 'test';

    const expected = messages.de[messageId];

    const wrapper = mount(
      <AyxAppWrapper locale="en" messages={messages}>
        <p>
          <FormattedMessage id={messageId} />
        </p>
      </AyxAppWrapper>
    );

    wrapper.setProps({ locale: 'de' });

    const actual = wrapper.find('p').getDOMNode().textContent;

    expect(actual).toBe(expected);
    wrapper.unmount();
  });

  it('wraps message in correctly when passed arrows locale and en message', () => {
    const messages = {
      en: {
        test1: 'test string 1'
      }
    };

    const wrapper = mount(
      <AyxAppWrapper locale="xx" messages={messages}>
        <p>
          <FormattedMessage id="test1" />
        </p>
      </AyxAppWrapper>
    );

    expect(wrapper.find('p').getDOMNode().textContent).toBe('⇚⇚⇚test string 1⇛⇛⇛');
    wrapper.unmount();
  });

  it('adds CssBaseline if "disableCssBaseline" prop is false', () => {
    const wrapper = mount(
      <AyxAppWrapper>
        <p>Toasty</p>
      </AyxAppWrapper>
    );
    const expected = true;
    const actual = wrapper.find(CssBaseline).exists();
    expect(actual).toBe(expected);
  });

  it('removes CssBaseline if "disableCssBaseline" prop is true', () => {
    const wrapper = mount(
      <AyxAppWrapper disableCssBaseline>
        <p>Toasty</p>
      </AyxAppWrapper>
    );
    const expected = false;
    const actual = wrapper.find(CssBaseline).exists();
    expect(actual).toBe(expected);
  });

  it('does not recreate theme if wrapping component is rerendered', () => {
    const styles = () =>
      createStyles({
        root: {
          border: '1px solid black'
        }
      });

    function InnerComponent({ classes }) {
      return (
        <div className={classes.root} id="test">
          Foobar
        </div>
      );
    }

    const InnerComponentHOC = withStyles(styles)(InnerComponent);

    class WrappingComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          foo: false // eslint-disable-line react/no-unused-state
        };
      }

      render() {
        return (
          <AyxAppWrapper>
            <InnerComponentHOC />
          </AyxAppWrapper>
        );
      }
    }

    const wrapper = mount(<WrappingComponent />);
    let inner = wrapper.find(InnerComponent);
    let testDiv = inner.find('#test');
    const firstClasses = testDiv.prop('className');

    // change state so we get a rerender
    wrapper.setState({ foo: true });

    inner = wrapper.find(InnerComponent);
    testDiv = inner.find('#test');
    const secondClasses = testDiv.prop('className');

    // if we rerender the component that contains <AyxAppWrapper>
    // that rerender should not recreate all the stypes, so we should expect these classnames
    // to be the same
    expect(firstClasses).toEqual(secondClasses);
  });

  it('returns the correct translation given a locale prop', () => {
    const wrapper = shallow(
      <AyxAppWrapper locale="xx">
        <div>Placeholder</div>
      </AyxAppWrapper>
    );

    const expected = '⇚⇚decrement⇛⇛';
    const actual = wrapper.props().theme.props.MuiNumericInput.decrementButtonText;

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('returns the correct default translation when not given a locale prop', () => {
    const wrapper = shallow(
      <AyxAppWrapper>
        <div>Placeholder</div>
      </AyxAppWrapper>
    );

    const expected = 'decrement';
    const actual = wrapper.props().theme.props.MuiNumericInput.decrementButtonText;

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('returns the arrows translations when given a "xx" locale prop', () => {
    const wrapper = shallow(
      <AyxAppWrapper locale="xx">
        <div>Placeholder</div>
      </AyxAppWrapper>
    );

    const expected = '⇚⇚Check all⇛⇛';
    const actual = wrapper.props().theme.props.MuiListBox.checkAllText;

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('returns the arrows translations and unique character when given a "xx" locale prop and a "padMessagesProps" prop', () => {
    const wrapper = shallow(
      <AyxAppWrapper locale="xx" padMessagesProps={{ character: 'λ' }}>
        <div>Placeholder</div>
      </AyxAppWrapper>
    );

    const expected = 'λλCheck allλλ';
    const actual = wrapper.props().theme.props.MuiListBox.checkAllText;

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('returns the "en" translation if an unsupported locale prop is given', () => {
    const wrapper = shallow(
      <AyxAppWrapper locale="kk">
        <div>Placeholder</div>
      </AyxAppWrapper>
    );

    const expected = 'Check all';
    const actual = wrapper.props().theme.props.MuiListBox.checkAllText;

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('returns the correct translation if a supported locale prop is given', () => {
    const wrapper = shallow(
      <AyxAppWrapper locale="de">
        <div>Placeholder</div>
      </AyxAppWrapper>
    );

    const expected = 'Alle auswählen';
    const actual = wrapper.props().theme.props.MuiListBox.checkAllText;

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('returns the correct font-family when there is the `ja` language code', () => {
    const window = global;
    window.Alteryx = {};
    window.Alteryx.AlteryxLanguageCode = 'ja';
    const wrapper = shallow(
      <AyxAppWrapper>
        <div>Placeholder</div>
      </AyxAppWrapper>
    );

    const themeProvider = wrapper.find(ThemeProvider);
    const actual = themeProvider.props().theme.typography.fontFamily;
    const expected = [
      'メイリオ',
      'Meiryo',
      'ヒラギノ角ゴ ProN',
      'Hiragino Kaku Gothic ProN',
      'ＭＳ ゴシック',
      'MS Gothic',
      'sans-serif'
    ].join(',');

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });

  it('returns the correct font-family when there is an `Alteryx` language code', () => {
    const window = global;
    window.Alteryx = {};
    window.Alteryx.AlteryxLanguageCode = 'xx';
    const wrapper = shallow(
      <AyxAppWrapper>
        <div>Placeholder</div>
      </AyxAppWrapper>
    );

    const themeProvider = wrapper.find(ThemeProvider);
    const expected = 'Segoe UI,San Francisco,Arial,sans-serif';
    const actual = themeProvider.props().theme.typography.fontFamily;

    expect(actual).toEqual(expected);
    wrapper.unmount();
  });
});
