import * as React from 'react';
import { PopperProps as MPopperProps } from '@material-ui/core/Popper';
import { TooltipProps as MTooltipProps } from '@material-ui/core/Tooltip';

export interface IOption {
  disabled?: boolean;
  primary: string | React.ReactNode;
  value: any;
  secondary?: string | React.ReactNode;
  icon?: React.ReactNode;
  tooltip?: string | React.ReactNode;
  TooltipProps?: MTooltipProps;
  [key: string]: any;
}

export interface ISReaderStatus {
  count: number;
}

export interface SelectProps {
  actionOption?: React.ReactNode;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  autoFocus?: boolean;
  blurInputOnSelect?: boolean;
  cacheOptions?: boolean;
  captureMenuScroll?: boolean;
  classes?: object;
  className?: string;
  closeMenuOnScroll?: boolean | EventListener;
  debounce?: boolean | number;
  defaultOptions?: object[] | boolean;
  defaultValue?: any | any[];
  disabled?: boolean;
  disableClearable?: boolean;
  disableCloseMenuOnSelect?: boolean;
  disableSearchable?: boolean;
  error?: boolean;
  filterOption?: any;
  fullWidth?: boolean;
  getOptionLabel?: (option: IOption) => string;
  getOptionValue?: (option: IOption) => string;
  iconVisibility?: 'option' | 'chip' | 'both';
  id?: string;
  InputProps?: { [key: string]: any };
  inputValue?: string;
  loadOptions?: (e: any) => void;
  loading?: boolean;
  loadingText?: string;
  menuPortalTarget?: HTMLElement;
  menuShouldBlockScroll?: boolean;
  menuShouldScrollIntoView?: boolean;
  multi?: boolean;
  name?: string;
  noOptionsText?: string;
  onBlur?: any;
  onChange?: any;
  onFocus?: any;
  onInputChange?: any;
  onKeyDown?: any;
  onKeyPress?: any;
  onMenuOpen?: any;
  onMenuClose?: any;
  onMenuScrollToTop?: any;
  onMenuScrollToBottom?: any;
  open?: boolean;
  openMenuOnFocus?: boolean;
  openMenuOnClick?: boolean;
  options: IOption[] | ((e: any) => void);
  optionComponent?: React.ReactNode;
  optionHeight?: number;
  pageSize?: number;
  placeholderText?: string;
  placement?: 'auto' | 'bottom' | 'top';
  PopperProps?: Partial<MPopperProps>;
  screenReaderStatus?: (status: ISReaderStatus) => string;
  tabIndex?: string;
  value?: any;
}
export type SelectClassKey = 'root' | 'select' | 'disabled';

declare const Select: React.ComponentType<SelectProps>;

export default Select;
