/* eslint-disable no-console */
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Workflow } from '@ayx/icons';
import AsyncSelect from 'react-select/async';
import RSelect from 'react-select';

import AyxAppWrapper from '../AyxAppWrapper';
import CircularProgress from '../CircularProgress';
import FormControl from '../FormControl';
import Typography from '../Typography';
import Chip from '../Chip';
import ListItemText from '../ListItemText';
import ListItem from '../ListItem';
import { withStyles } from '../styles';

import ClearIndicator from './components/ClearIndicator';
import Control from './components/Control';
import DropdownIndicator from './components/DropdownIndicator';
import IndicatorsContainer from './components/IndicatorsContainer';
import IndicatorSeparator from './components/IndicatorSeparator';
import LoadingIndicator from './components/LoadingIndicator';
import LoadingMessage from './components/LoadingMessage';
import NoOptionsMessage from './components/NoOptionsMessage';
import Menu from './components/Menu';
import MenuList from './components/MenuList';
import MultiValueContainer from './components/MultiValueContainer';
import MultiValueLabel from './components/MultiValueLabel';
import MultiValueRemove from './components/MultiValueRemove';
import Option from './components/Option';
import Placeholder from './components/Placeholder';
import Select from './Select';
import SingleValue from './components/SingleValue';
import ValueContainer from './components/ValueContainer';

configure({ adapter: new Adapter() });

// Fix for https://github.com/mui-org/material-ui/issues/15726
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
});

const options = [];
beforeAll(() => {
  const numOptions = 1000;

  for (let i = 0, l = numOptions; i < l; i += 1) {
    options.push({
      value: `option-${i}`,
      primary: `Option-${i}`,
      secondary: `This is option #${i}`,
      icon: <Workflow />
    });
  }
});

const themeProps = {
  selectProps: {
    classes: {
      indicator: {
        color: 'violet'
      },
      control: {
        borderColor: 'green'
      },
      indicatorContainer: {
        width: '50px'
      },
      menu: {}
    },
    styles: {
      menuPortal: () => ({ zIndex: 1350 })
    }
  }
};

const muiThemeWrapper = (component, theme = {}) =>
  mount(
    <AyxAppWrapper paletteType="dark" theme={theme}>
      {component}
    </AyxAppWrapper>
  );

describe('Enhanced Select custom components test', () => {
  describe('ClearIndicator', () => {
    it('displays an "X" icon', () => {
      const wrapper = muiThemeWrapper(<ClearIndicator {...themeProps} />);
      const actual = wrapper.find(ClearIndicator).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });
  });

  describe('Control', () => {
    it('can display a ClearIndicator component', () => {
      const wrapper = muiThemeWrapper(
        <Control {...themeProps} onClick={() => {}}>
          <ClearIndicator {...themeProps} />
        </Control>
      );

      const control = wrapper.find(Control);
      control.simulate('click');
      const actual = wrapper.find(ClearIndicator).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });
  });

  describe('DropdownIndicator', () => {
    it('displays an "Chevron" icon', () => {
      const wrapper = muiThemeWrapper(<DropdownIndicator {...themeProps} />);
      const actual = wrapper.find(DropdownIndicator).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });
  });

  describe('IndicatorsContainer', () => {
    it('can display a ClearIndicator component', () => {
      const wrapper = muiThemeWrapper(
        <IndicatorsContainer {...themeProps}>
          <ClearIndicator {...themeProps} />
        </IndicatorsContainer>
      );
      const actual = wrapper.find(ClearIndicator).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });
  });

  describe('LoadingIndicator', () => {
    const loadingIndicatorProps = {
      selectProps: {
        classes: {
          loadingIndicator: {}
        }
      },
      innerProps: {}
    };
    it('can render', () => {
      const wrapper = muiThemeWrapper(<LoadingIndicator {...loadingIndicatorProps} />);

      const actual = wrapper.find(LoadingIndicator).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });

    it('renders a CircularProgress', () => {
      const wrapper = muiThemeWrapper(<LoadingIndicator {...loadingIndicatorProps} />);

      const actual = wrapper.find(CircularProgress).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });
  });

  describe('LoadingMessage', () => {
    const loadingMessageProps = {
      selectProps: {
        classes: {
          loadingMessage: {}
        }
      }
    };
    it('can render', () => {
      const testMessage = 'test message';
      const wrapper = muiThemeWrapper(<LoadingMessage {...loadingMessageProps}>{testMessage}</LoadingMessage>);

      expect(wrapper.find(LoadingMessage).exists()).toBe(true);
    });

    it('renders ListItemText', () => {
      const testMessage = 'test message';
      const wrapper = muiThemeWrapper(<LoadingMessage {...loadingMessageProps}>{testMessage}</LoadingMessage>);

      expect(wrapper.find(ListItemText).exists()).toBe(true);
    });

    it('renders child text as ListItemText primary', () => {
      const testMessage = 'test message';
      const wrapper = muiThemeWrapper(<LoadingMessage {...loadingMessageProps}>{testMessage}</LoadingMessage>);

      expect(wrapper.find(ListItemText).props().primary).toBe(testMessage);
    });
  });

  describe('IndicatorSeparator', () => {
    it('can display a "Chevron" component', () => {
      const wrapper = muiThemeWrapper(
        <IndicatorSeparator {...themeProps}>
          <DropdownIndicator {...themeProps} />
        </IndicatorSeparator>
      );
      const actual = wrapper.find(DropdownIndicator).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });
  });

  describe('Menu', () => {
    it('can display a "Option" component', () => {
      const optionProps = {
        data: {
          value: `option-${1}`,
          primary: `Option-${1}`,
          secondary: `This is option #${1}`,
          icon: <DropdownIndicator {...themeProps} />
        },
        innerProps: {},
        isSelected: true,
        isFocused: true,
        isDisabled: false,
        selectProps: {
          optionComponent: <ValueContainer {...themeProps} />,
          classes: {
            option: '',
            optionIcon: '',
            optionText: '',
            optionFocus: ''
          }
        }
      };
      const NewOption = (Option.displayName = 'NewOption');
      const propsFromReactSelect = {
        getStyles: () => {},
        cx: () => {}
      };
      const wrapper = muiThemeWrapper(
        <Menu {...propsFromReactSelect} {...themeProps}>
          <NewOption {...optionProps} />
        </Menu>
      );
      const actual = wrapper.find(NewOption).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });
    it('renders in a Popper by default', () => {
      const selectRef = React.createRef();

      const wrapper = muiThemeWrapper(
        <div ref={selectRef}>
          <Select open options={options} />
        </div>
      );
      const popperNodeCount = wrapper.find('div').filter('[data-uic="popper"]').length;

      expect(popperNodeCount).toBe(1);
    });
    it("doesn't render in a Popper when passed a menuPortalTarget", () => {
      const wrapper = muiThemeWrapper(<Select menuPortalTarget={document.body} open options={options} />);
      const popperNodeCount = wrapper.find('div').filter('[data-uic="popper"]').length;

      expect(popperNodeCount).toBe(0);
    });
    it('applies PopperProps to Popper component', () => {
      const selectRef = React.createRef();
      const expected = 200;
      const PopperProps = {
        style: {
          width: expected
        },
        anchorEl: selectRef
      };
      const wrapper = muiThemeWrapper(<Select open options={options} PopperProps={PopperProps} />);

      const actual = wrapper.find('div').filter('[data-uic="popper"]').props().style.width;
      expect(expected).toBe(actual);
    });
  });

  describe('Option', () => {
    it('can display a "primary" text', () => {
      const optionProps = {
        data: {
          value: `option-${1}`,
          primary: `Option-${1}`,
          secondary: `This is option #${1}`,
          icon: <DropdownIndicator {...themeProps} />
        },
        innerProps: {},
        isSelected: true,
        isFocused: true,
        isDisabled: false,
        selectProps: {
          classes: {
            option: '',
            optionIcon: '',
            optionText: '',
            optionFocus: ''
          },
          updateActiveDescendantId: () => {}
        }
      };
      const wrapper = muiThemeWrapper(<Option {...optionProps} />);
      const actual = wrapper.find(ListItemText).props().primary;
      const expected = 'Option-1';

      expect(actual).toBe(expected);
    });

    it('can display a "secondary" text', () => {
      const optionProps = {
        data: {
          value: `option-${1}`,
          primary: `Option-${1}`,
          secondary: `This is option #${1}`,
          icon: <DropdownIndicator {...themeProps} />
        },
        innerProps: {},
        isSelected: true,
        isFocused: true,
        isDisabled: false,
        selectProps: {
          classes: {
            option: '',
            optionIcon: '',
            optionText: '',
            optionFocus: ''
          },
          updateActiveDescendantId: () => {}
        }
      };
      const wrapper = muiThemeWrapper(<Option {...optionProps} />);
      const actual = wrapper.find(ListItemText).props().secondary;
      const expected = 'This is option #1';

      expect(actual).toBe(expected);
    });

    it('can display an icon', () => {
      const optionProps = {
        data: {
          value: `option-${1}`,
          primary: `Option-${1}`,
          secondary: `This is option #${1}`,
          icon: <DropdownIndicator {...themeProps} />
        },
        innerProps: {},
        isSelected: true,
        isFocused: true,
        isDisabled: false,
        selectProps: {
          classes: {
            option: '',
            optionIcon: '',
            optionText: '',
            optionFocus: ''
          },
          updateActiveDescendantId: () => {}
        }
      };
      const wrapper = muiThemeWrapper(<Option {...optionProps} />);
      const actual = wrapper.find(DropdownIndicator).exists();
      const expected = true;

      expect(actual).toBe(expected);
    });

    it('can add "data-" attribute to an option', () => {
      const optionProps = {
        data: {
          value: `option-${1}`,
          primary: `Option-${1}`,
          secondary: `This is option #${1}`,
          icon: <DropdownIndicator {...themeProps} />,
          ListItemProps: {
            'data-test': 'test'
          }
        },
        innerProps: {},
        isSelected: true,
        isFocused: true,
        isDisabled: false,
        selectProps: {
          classes: {
            option: '',
            optionIcon: '',
            optionText: '',
            optionFocus: ''
          },
          updateActiveDescendantId: () => {}
        }
      };
      const wrapper = muiThemeWrapper(<Option {...optionProps} />);
      const actual = wrapper.find('[data-test="test"]').exists();
      const expected = true;

      expect(actual).toBe(expected);
    });

    it('can display a component prop', () => {
      const optionProps = {
        data: {
          value: `option-${1}`,
          primary: `Option-${1}`,
          secondary: `This is option #${1}`,
          icon: <DropdownIndicator {...themeProps} />,
          ListItemProps: {
            'data-test': 'test'
          },
          component: 'h3'
        },
        innerProps: {},
        isSelected: true,
        isFocused: true,
        isDisabled: false,
        selectProps: {
          classes: {
            option: '',
            optionIcon: '',
            optionText: '',
            optionFocus: ''
          },
          updateActiveDescendantId: () => {}
        }
      };
      const wrapper = muiThemeWrapper(<Option {...optionProps} />);
      const actual = wrapper.find('h3').exists();
      const expected = true;

      expect(actual).toBe(expected);
    });

    it('can display an `optionComponent` prop', () => {
      const optionProps = {
        data: {
          value: `option-${1}`,
          primary: `Option-${1}`,
          secondary: `This is option #${1}`,
          icon: <DropdownIndicator {...themeProps} />,
          ListItemProps: {
            'data-test': 'test'
          }
        },
        innerProps: {},
        isSelected: true,
        isFocused: true,
        isDisabled: false,
        selectProps: {
          optionComponent: () => <span className="toasty" />,
          classes: {
            option: '',
            optionIcon: '',
            optionText: '',
            optionFocus: ''
          },
          updateActiveDescendantId: () => {}
        }
      };
      const wrapper = muiThemeWrapper(<Option {...optionProps} />);
      const actual = wrapper.find('.toasty').exists();
      const expected = true;

      expect(actual).toBe(expected);
    });

    it('can disable individual options with standard option component', () => {
      const props = {
        open: true,
        options: [
          {
            value: 'enabled',
            primary: 'Enabled'
          },
          {
            value: 'disabled',
            primary: 'Disabled',
            disabled: true
          }
        ]
      };

      const wrapper = muiThemeWrapper(<Select {...props} />);
      const disabledOptionCount = wrapper.find('li.Mui-disabled').length;

      expect(disabledOptionCount).toBe(1);
    });

    // TODO: Make test to cover disabled custom option components?

    it('can add a tooltip', () => {
      const props = {
        open: true,
        options: [
          {
            value: 'enabled',
            primary: 'Enabled',
            tooltip: 'Option details'
          }
        ]
      };

      const wrapper = muiThemeWrapper(<Select {...props} />);
      const tooltipCount = wrapper.find('div[data-uic="tooltip"]').length;

      expect(tooltipCount).toBe(1);
    });

    it('can customize a tooltip', () => {
      const props = {
        open: true,
        options: [
          {
            value: 'enabled',
            primary: 'Enabled',
            tooltip: 'Option details',
            TooltipProps: {
              arrow: true,
              open: true
            }
          }
        ]
      };

      const wrapper = muiThemeWrapper(<Select {...props} />);
      const tooltipCount = wrapper.find('div.MuiTooltip-arrowPopper').length;

      expect(tooltipCount).toBe(1);
    });

    it('TooltipProps key overrides tooltip key', () => {
      const expectedTitle = 'New option details';
      const props = {
        open: true,
        options: [
          {
            value: 'enabled',
            primary: 'Enabled',
            tooltip: 'Option details',
            TooltipProps: {
              arrow: true,
              open: true,
              title: expectedTitle
            }
          }
        ]
      };

      const wrapper = muiThemeWrapper(<Select {...props} />);
      const tooltipText = wrapper.find('div.MuiTooltip-tooltip').text();

      expect(expectedTitle).toBe(tooltipText);
    });
  });

  describe('Placeholder', () => {
    it('can display the correct text', () => {
      const wrapper = muiThemeWrapper(<Placeholder {...themeProps}>Placeholder</Placeholder>);
      const actual = wrapper.find(Placeholder).text();
      const expected = 'Placeholder';

      expect(actual).toBe(expected);
    });
  });

  describe('SingleValue', () => {
    it('can display the "primary" text', () => {
      const data = {
        value: `option-${1}`,
        primary: `Option-${1}`,
        secondary: `This is option #${1}`,
        icon: <DropdownIndicator {...themeProps} />
      };
      const propsFromReactSelect = {
        getStyles: () => {},
        cx: () => {}
      };
      const wrapper = muiThemeWrapper(<SingleValue {...propsFromReactSelect} data={data} {...themeProps} />);

      const actual = wrapper.find(SingleValue).text();
      const expected = 'Option-1';

      expect(actual).toBe(expected);
    });
  });

  describe('ValueContainer', () => {
    it('can display its children', () => {
      const wrapper = muiThemeWrapper(<ValueContainer {...themeProps}>ValueContainer</ValueContainer>);
      const actual = wrapper.find(ValueContainer).text();
      const expected = 'ValueContainer';

      expect(actual).toBe(expected);
    });
  });

  describe('NoOptionsMessage', () => {
    it('displays a custom "noOptions" messages when there is a custom message passed by children prop', () => {
      const noOptionProps = {
        options: [],
        children: 'noOptions',
        selectProps: {
          classes: {
            noOptionsMessage: ''
          }
        }
      };
      const wrapper = muiThemeWrapper(<NoOptionsMessage {...noOptionProps} />);

      const actual = wrapper.find(ListItemText).props().primary;
      const expected = 'noOptions';

      expect(actual).toBe(expected);
    });

    it('displays an Option when there is an option', () => {
      const optionProps = {
        data: {
          value: `option-${1000}`,
          primary: `Option-${1000}`,
          secondary: `This is option #${1000}`,
          icon: <DropdownIndicator {...themeProps} />
        },
        innerProps: {},
        isSelected: true,
        isFocused: true,
        isDisabled: false,
        selectProps: {
          classes: {
            option: '',
            optionIcon: '',
            optionText: '',
            optionFocus: ''
          },
          updateActiveDescendantId: () => {}
        }
      };
      const menuListProps = {
        options: [
          {
            value: `option-${1}`,
            primary: `Option-${1}`,
            secondary: `This is option #${1}`,
            icon: <DropdownIndicator {...themeProps} />
          }
        ],
        children: [<Option {...optionProps} />],
        maxHeight: 200,
        getValue: () => '',
        noOptionsText: '',
        inrRef: '',
        selectProps: {
          actionOption: <DropdownIndicator {...themeProps} />,
          optionHeight: 32,
          onMenuClose: () => {},
          classes: {
            menuListItem: ''
          },
          closeMenuOnSelect: true
        }
      };

      const wrapper = muiThemeWrapper(<MenuList {...menuListProps} />);
      const button = wrapper.find('[role="button"]');
      button.simulate('click');

      const actual = wrapper.find(ListItemText).props().primary;
      const expected = 'Option-1000';

      expect(actual).toBe(expected);
    });

    describe('MultiValueContainer', () => {
      it('displays a custom chip for multi-select', () => {
        const props = {
          data: {
            primary: 'primary'
          },
          children: [
            <Typography />,
            {
              props: {
                innerProps: {
                  onClick: () => {}
                },
                data: {
                  icon: <Workflow />
                }
              }
            }
          ],
          selectProps: {
            iconVisibility: 'both'
          }
        };
        const wrapper = muiThemeWrapper(<MultiValueContainer {...props} {...themeProps} />);

        const actual = wrapper.find(Chip).exists();
        const expected = true;
        expect(actual).toBe(expected);
      });
    });

    describe('MultiValueLabel', () => {
      it('displays a custom Typography for multi-select', () => {
        const props = {
          data: {
            primary: 'primary'
          }
        };
        const wrapper = muiThemeWrapper(<MultiValueLabel {...props} {...themeProps} />);

        const actual = wrapper.find(Typography).exists();
        const expected = true;
        expect(actual).toBe(expected);
      });
    });

    describe('MultiValueRemove', () => {
      const multiValueRemoveProps = {
        selectProps: {
          classes: {
            multiValueRemove: {}
          }
        }
      };

      it('can render', () => {
        const wrapper = muiThemeWrapper(<MultiValueRemove {...multiValueRemoveProps} />);

        expect(wrapper.find(MultiValueRemove).exists()).toBe(true);
      });

      it('renders children passed to it', () => {
        const childText = 'child text';
        const wrapper = muiThemeWrapper(<MultiValueRemove {...multiValueRemoveProps}>{childText}</MultiValueRemove>);

        expect(wrapper.find(MultiValueRemove).children().instance().innerHTML).toBe(childText);
      });
    });

    describe('Select', () => {
      it('error state is true when "FormControl" component has an error state', () => {
        const props = {
          options: [
            {
              value: `option-${1}`,
              primary: `Option-${1}`,
              secondary: `This is option #${1}`,
              icon: <DropdownIndicator {...themeProps} />
            }
          ]
        };
        const wrapper = muiThemeWrapper(
          <FormControl error>
            <Select {...props} />
          </FormControl>
        );

        const actual = wrapper.find(RSelect).props().error;
        const expected = true;
        expect(actual).toBe(expected);
      });

      it('disabled state is true when "FormControl" component has a disabled state', () => {
        const props = {
          options: [
            {
              value: `option-${1}`,
              primary: `Option-${1}`,
              secondary: `This is option #${1}`,
              icon: <DropdownIndicator {...themeProps} />
            }
          ]
        };
        const wrapper = muiThemeWrapper(
          <FormControl disabled>
            <Select {...props} />
          </FormControl>
        );

        const actual = wrapper.find(RSelect).props().isDisabled;
        const expected = true;
        expect(actual).toBe(expected);
      });

      it('returns an "AsyncSelect when options is a function', () => {
        const props = {
          muiFormControl: {
            disabled: true
          },
          options: () => {}
        };
        const wrapper = muiThemeWrapper(<Select {...props} />);

        const actual = wrapper.find(AsyncSelect).exists();
        const expected = true;
        expect(actual).toBe(expected);
      });

      it('returns an Mui-like event object when its value is changed', () => {
        const onChangeSpy = jest.fn();

        const sentOption = {
          value: `option-${1}`,
          primary: `Option-${1}`
        };

        const props = {
          name: 'testName',
          onChange: onChangeSpy,
          open: true,
          options: [
            {
              value: `option-${1}`,
              primary: `Option-${1}`
            }
          ]
        };
        const wrapper = muiThemeWrapper(<Select {...props} />);
        wrapper.find(ListItem).props().onClick({ action: 'select-option', option: sentOption, name: 'testName' });

        const child = {
          props: {
            primary: 'Option-1',
            value: 'option-1'
          }
        };

        const event = {
          target: {
            name: 'testName',
            value: 'option-1'
          }
        };

        expect(props.onChange).toHaveBeenCalledWith(event, child);
      });

      it('can receive a "data-" attribute', () => {
        const props = {
          name: 'testName',
          open: true,
          options: [
            {
              value: `option-${1}`,
              primary: `Option-${1}`
            }
          ],
          'data-test': 'test'
        };
        const wrapper = muiThemeWrapper(<Select {...props} />);
        const expected = true;
        const actual = wrapper.find('input[data-test="test"]').exists();

        expect(actual).toBe(expected);
      });

      it('accepts a Mui-like value for option selection', () => {
        const props = {
          name: 'testName',
          open: true,
          value: `option-${1}`,
          options: [
            {
              value: `option-${0}`,
              primary: `Option-${0}`
            },
            {
              value: `option-${1}`,
              primary: `Option-${1}`
            },
            {
              value: `option-${2}`,
              primary: `Option-${2}`
            }
          ]
        };
        const wrapper = muiThemeWrapper(<Select {...props} />);
        const actual = wrapper.find('p[data-uic="typography"]').text();
        const expected = `Option-${1}`;

        expect(actual).toBe(expected);
      });

      // TODO
      // it('accepts and array of Mui-like values', () => {});
      // it('will add values from an array which map to an option object and fail (noop) gracefully on ones that don\'t', () => {})

      it('has case-insensitive filtering of secondary labels', () => {
        function CaseSensitivitySearchTest(searchString) {
          const props = {
            name: 'testName',
            open: true,
            inputValue: searchString,
            options: [
              {
                primary: 'Test option',
                secondary: 'This is a foo option'
              }
            ]
          };
          const wrapper = muiThemeWrapper(<Select {...props} />);
          const actualPrimary = wrapper.find('div[data-uic="list-item-text"] span').at(0).text();
          const actualSecondary = wrapper.find('div[data-uic="list-item-text"] h6').at(0).text();
          expect(actualPrimary).toBe('Test option');
          expect(actualSecondary).toBe('This is a foo option');
        }
        const searchStrings = ['foo', 'Foo', 'FOO', 'fOo'];
        searchStrings.forEach(CaseSensitivitySearchTest);
      });

      it('accepts a Mui-like defaultValue when not async', () => {
        const props = {
          name: 'testName',
          open: true,
          defaultValue: `option-${1}`,
          options: [
            {
              value: `option-${0}`,
              primary: `Option-${0}`
            },
            {
              value: `option-${1}`,
              primary: `Option-${1}`
            },
            {
              value: `option-${2}`,
              primary: `Option-${2}`
            }
          ]
        };

        const wrapper = muiThemeWrapper(<Select {...props} />);
        const actual = wrapper.find('p[data-uic="typography"]').text();
        const expected = `Option-${1}`;

        expect(actual).toBe(expected);
      });

      it('accepts an array of Mui-like defaultValues when multi and not async', () => {
        const props = {
          name: 'testName',
          open: true,
          defaultValue: ['option-1', 'option-2'],
          multi: true,
          options: [
            {
              value: `option-${0}`,
              primary: `Option-${0}`
            },
            {
              value: `option-${1}`,
              primary: `Option-${1}`
            },
            {
              value: `option-${2}`,
              primary: `Option-${2}`
            }
          ]
        };

        const wrapper = muiThemeWrapper(<Select {...props} />);
        const actual = wrapper.find('p[data-uic="typography"]').map(node => node.text());
        const expected = ['Option-1', 'Option-2'];

        expect(actual).toEqual(expected);
      });

      it('does not accept Mui-like defaultValue when there is no matching option when not async', () => {
        const props = {
          name: 'testName',
          open: true,
          defaultValue: 'foo',
          options: [
            {
              value: `option-${0}`,
              primary: `Option-${0}`
            },
            {
              value: `option-${1}`,
              primary: `Option-${1}`
            },
            {
              value: `option-${2}`,
              primary: `Option-${2}`
            }
          ]
        };

        const wrapper = muiThemeWrapper(<Select {...props} />);
        const actual = wrapper.find('p[data-uic="typography"]').text();
        const expected = 'Select...';

        expect(actual).toBe(expected);
      });

      it('does not accept Mui-like defaultValue when there is no matching defaultOption when async', () => {
        const props = {
          name: 'testName',
          open: true,
          defaultValue: 'foo',
          defaultOptions: [
            {
              value: `option-${0}`,
              primary: `Option-${0}`
            },
            {
              value: `option-${1}`,
              primary: `Option-${1}`
            },
            {
              value: `option-${2}`,
              primary: `Option-${2}`
            }
          ],
          options: () => {}
        };

        const wrapper = muiThemeWrapper(<Select {...props} />);
        const actual = wrapper.find('p[data-uic="typography"]').text();
        const expected = 'Select...';

        expect(actual).toBe(expected);
      });

      it('accepts a Mui-like defaultValue when async when defaultOptions is provided', () => {
        const options = [
          {
            value: `option-${0}`,
            primary: `Option-${0}`
          },
          {
            value: `option-${1}`,
            primary: `Option-${1}`
          },
          {
            value: `option-${2}`,
            primary: `Option-${2}`
          }
        ];

        const props = {
          name: 'testName',
          open: true,
          defaultValue: `option-${1}`,
          defaultOptions: options,
          options: () => {}
        };

        const wrapper = muiThemeWrapper(<Select {...props} />);
        const actual = wrapper.find('p[data-uic="typography"]').text();
        const expected = `Option-${1}`;

        expect(actual).toBe(expected);
      });

      it("warns and doesn't accept a Mui-like defaultValue when async when defaultOptions is not provided", () => {
        console.warn = jest.fn();

        const props = {
          name: 'testName',
          open: true,
          defaultValue: `option-${1}`,
          options: () => {}
        };

        const wrapper = muiThemeWrapper(<Select {...props} />);
        const actual = wrapper.find('p[data-uic="typography"]').text();
        const expected = 'Select...';

        expect(actual).toBe(expected);
        expect(console.warn).toHaveBeenCalled();
      });

      it("warns and doesn't accept a Mui-like defaultValue when controlled", () => {
        console.warn = jest.fn();

        const props = {
          name: 'testName',
          open: true,
          value: 'option-2',
          defaultValue: `option-${1}`,
          options: [
            {
              value: `option-${0}`,
              primary: `Option-${0}`
            },
            {
              value: `option-${1}`,
              primary: `Option-${1}`
            },
            {
              value: `option-${2}`,
              primary: `Option-${2}`
            }
          ]
        };

        const wrapper = muiThemeWrapper(<Select {...props} />);
        const actual = wrapper.find('p[data-uic="typography"]').text();
        const expected = 'Option-2';

        expect(actual).toBe(expected);
        expect(console.warn).toHaveBeenCalled();
      });

      it('console.warn()s when trying to use a disallowed prop', () => {
        console.warn = jest.fn();
        const props = {
          theme: { palette: { blueGrey: { 400: '' } } },
          escapeClearsValue: true,
          options: [
            {
              primary: 'Test option',
              secondary: 'This is a foo option'
            }
          ]
        };

        muiThemeWrapper(<Select {...props} />);

        expect(console.warn).toHaveBeenCalled();
      });

      it('knows how to handle the serialization of multiple values in multi mode', () => {
        const onChangeSpy = jest.fn();

        const firstClick = {
          value: 'option-1',
          primary: 'Option-1'
        };

        const secondClick = {
          value: 'option-2',
          primary: 'Option-2'
        };

        const props = {
          multi: true,
          name: 'testName',
          onChange: onChangeSpy,
          open: true,
          options: [
            {
              value: 'option-1',
              primary: 'Option-1'
            },
            {
              value: 'option-2',
              primary: 'Option-2'
            },
            {
              value: 'option-3',
              primary: 'Option-3'
            }
          ]
        };

        const wrapper = muiThemeWrapper(<Select {...props} />);
        const options = wrapper.find(ListItem);

        options.at(0).props().onClick({ action: 'select-option', option: firstClick, name: 'testName' });

        options.at(1).props().onClick({ action: 'select-option', option: secondClick, name: 'testName' });

        const child = {
          props: [
            {
              primary: 'Option-1',
              value: 'option-1'
            },
            {
              primary: 'Option-2',
              value: 'option-2'
            }
          ]
        };

        const event = {
          target: {
            name: 'testName',
            value: ['option-1', 'option-2']
          }
        };

        expect(props.onChange).toHaveBeenCalledWith(event, child);
      });
    });

    describe('Select theming', () => {
      it('supports a product theme', () => {
        const productTheme = {
          overrides: {
            MuiAyxSelect: {
              option: {
                backgroundColor: 'violet'
              }
            }
          }
        };

        const props = {
          name: 'testName',
          open: true,
          options: [
            {
              primary: 'Test option',
              secondary: 'This is a foo option'
            }
          ]
        };

        const wrapper = muiThemeWrapper(<Select {...props} />, productTheme);
        const expected = 'violet';
        const actual = wrapper.props().theme.overrides.MuiAyxSelect.option.backgroundColor;

        expect(actual).toEqual(expected);
      });

      it('supports the "classes" prop', () => {
        const props = {
          name: 'testName',
          open: true,
          options: [
            {
              primary: 'Test option',
              secondary: 'This is a foo option'
            }
          ]
        };
        const TestComponent = ({ classes }) => (
          <AyxAppWrapper>
            <Select classes={classes} {...props} />
          </AyxAppWrapper>
        );

        const TrueTestComponent = withStyles({
          option: {
            borderColor: 'burnt-orange'
          }
        })(TestComponent);

        const wrapper = muiThemeWrapper(<TrueTestComponent />);
        const expected = true;
        const actual = wrapper.find(Option).props().selectProps.classes.option.includes('TestComponent-option');

        expect(actual).toEqual(expected);
      });

      it('has a "data-test" attribute on an "input" when disableSearchable is false', () => {
        const props = {
          'data-test': 'foohoo',
          options: [
            {
              primary: 'Test option',
              secondary: 'This is a foo option'
            }
          ]
        };
        const TestComponent = () => (
          <AyxAppWrapper>
            <Select {...props} />
          </AyxAppWrapper>
        );

        const wrapper = muiThemeWrapper(<TestComponent />);
        const expected = true;
        const actual = wrapper.find('input[data-test="foohoo"]').exists();

        expect(actual).toEqual(expected);
      });

      it('has a "data-test" attribute on a "div" when disableSearchable is true', () => {
        const props = {
          'data-test': 'foohoo2',
          disableSearchable: true,
          options: [
            {
              primary: 'Test option',
              secondary: 'This is a foo option'
            }
          ]
        };
        const TestComponent = () => (
          <AyxAppWrapper>
            <Select {...props} />
          </AyxAppWrapper>
        );

        const wrapper = muiThemeWrapper(<TestComponent />);
        const expected = true;
        const actual = wrapper.find('div[data-test="foohoo2"]').exists();

        expect(actual).toEqual(expected);
      });
    });
  });

  describe('Select regression tests', () => {
    it('custom onBlur handler is not passed to the input', () => {
      const onBlur = () => {};
      const options = [
        {
          primary: 'Test option',
          secondary: 'This is a foo option'
        }
      ];

      const props = {
        'data-test': 'withoutCustomOnBlur',
        options
      };

      const propsWithOnBlur = {
        'data-test': 'withCustomOnBlur',
        onBlur,
        options
      };

      const getInputOnBlur = selectProps =>
        muiThemeWrapper(<Select {...selectProps} />)
          .find('input')
          .props().onBlur;

      const defaultInputOnBlur = String(getInputOnBlur(props));
      const inputOnBlurWithCustomOnBlur = String(getInputOnBlur(propsWithOnBlur));

      expect(inputOnBlurWithCustomOnBlur).toBe(defaultInputOnBlur);
    });
  });

  // broke this with the component fixes...
  // describe('Input', () => {
  //   it('Input component can display its children', () => {
  //     const wrapper = muiThemeWrapper(<Input>I am an Input component</Input>);

  //     const actual = wrapper.find(Input).props().children;
  //     const expected = 'I am an Input component';

  //     expect(actual).toBe(expected);
  //   });
  // });
});

// describe('Select component', () => {
//   it('renders an option for each provided option object', () => {
//     const wrapper = mount(<Select options={options} />);
//     console.log('wrapper.find', wrapper.find('li')) // won't find any LI tags until chevron is clicked... Not sure there are any unit tests to write...
//     expect(true).toBe(true);
//   });
// });
