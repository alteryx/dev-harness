export interface ILocalization {
  props?: {
    MuiAlert?: {
      closeText?: string;
    };
    MuiAutocomplete?: {
      clearText?: string;
      closeText?: string;
      loadingText?: string;
      noOptionsText?: string;
      openText?: string;
    };
    MuiBreadcrumbs?: {
      expandText?: string;
    };
    MuiNumericInput?: {
      incrementButtonText?: string;
      decrementButtonText?: string;
    };
    MuiListBox?: {
      footerText?: string;
      checkAllText?: string;
      searchPlaceholderText?: string;
      noResultsText?: string;
    };
    MuiAyxSelect: {
      placeholderText?: string;
      noOptionsText?: string;
      loadingText?: string;
    };
    MuiAppLayout: {
      logoText?: string;
    };
    MuiPagination?: {
      'aria-label'?: string;
      getItemAriaLabel?: string;
    };
    MuiRating?: {
      emptyLabelText?: string;
      getLabelText?: string;
    };
    MuiTablePagination?: {
      backIconButtonText?: string;
      labelRowsPerPage?: string;
      nextIconButtonText?: string;
      labelDisplayedRows?: string;
    };
  };
}

export declare const en: ILocalization;
export declare const de: ILocalization;
export declare const es: ILocalization;
export declare const fr: ILocalization;
export declare const it: ILocalization;
export declare const ja: ILocalization;
export declare const pt: ILocalization;
export declare const zh: ILocalization;
