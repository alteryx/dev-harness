import React from 'react';
import { FormattedMessage } from 'react-intl';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IntlProviderWithArrows from '../IntlProviderWithArrows';

configure({ adapter: new Adapter() });

describe('IntlProviderWithArrows', () => {
  it('returns a react-intl IntlProvider component', () => {
    const wrapper = shallow(
      <IntlProviderWithArrows>
        <p>my text</p>
      </IntlProviderWithArrows>
    );

    expect(wrapper.name()).toBe('IntlProvider');
  });

  it('sends locale prop to IntlProvider component', () => {
    const locale = 'en';
    const intlProps = {
      locale
    };
    const wrapper = shallow(
      <IntlProviderWithArrows {...intlProps}>
        <p>my text</p>
      </IntlProviderWithArrows>
    );
    expect(wrapper.props().locale).toBe(locale);
  });

  it('sends messages prop to IntlProvider component', () => {
    const testMessage = 'test string 1';
    const intlProps = {
      messages: {
        test1: testMessage
      }
    };
    const wrapper = shallow(
      <IntlProviderWithArrows {...intlProps}>
        <p>my text</p>
      </IntlProviderWithArrows>
    );
    expect(wrapper.props().messages).toBeDefined();
    expect(wrapper.props().messages.test1).toBe(testMessage);
  });

  it("wraps messages in arrows when the locale is 'xx' or 'arrows'", () => {
    const locale = 'xx';
    const testMessage = 'test string 1';
    const intlProps = {
      locale,
      messages: {
        test1: testMessage
      }
    };
    const wrapper = mount(
      <IntlProviderWithArrows {...intlProps}>
        <p>
          <FormattedMessage id="test1" />
        </p>
      </IntlProviderWithArrows>
    );
    expect(wrapper.find('p').getDOMNode().textContent).toBe(
      '⇚⇚⇚test string 1⇛⇛⇛'
    );
    wrapper.unmount();
  });

  it("uses 'en' for locale of returned <IntlProvider /> when 'xx' locale is provided", () => {
    const locale = 'xx';
    const intlProps = {
      locale
    };
    const wrapper = shallow(
      <IntlProviderWithArrows {...intlProps}>
        <p>my text</p>
      </IntlProviderWithArrows>
    );
    expect(wrapper.props().locale).toBe('en');
  });

  it("uses 'en' for locale of returned <IntlProvider /> when 'arrows' locale is provided", () => {
    const locale = 'arrows';
    const intlProps = {
      locale
    };
    const wrapper = shallow(
      <IntlProviderWithArrows {...intlProps}>
        <p>my text</p>
      </IntlProviderWithArrows>
    );
    expect(wrapper.props().locale).toBe('en');
  });

  it('displays only one child when AyxAppWrapper has multiple children', () => {
    const messages = {
      en: {
        test1: 'test string 1'
      }
    };

    const wrapper = mount(
      <IntlProviderWithArrows locale={'xx'} messages={messages}>
        <p>
          <FormattedMessage id="test1" />
        </p>
        <p>
          <FormattedMessage id="test1" />
        </p>
        <p>
          <FormattedMessage id="test1" />
        </p>
      </IntlProviderWithArrows>
    );

    const expected = 1;
    const actual = wrapper.find(IntlProviderWithArrows).children.length;

    expect(actual).toBe(expected);
    });
  });