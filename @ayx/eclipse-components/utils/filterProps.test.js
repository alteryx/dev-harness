import filterProps from './filterProps';

describe('filterProps', () => {
  it('exists', () => {
    expect(filterProps).toBeTruthy();
  });

  it('is a function', () => {
    expect(typeof filterProps).toBe('function');
  });

  it('returns undefined when not given props', () => {
    expect(filterProps()).toBeUndefined();
  });

  it('returns all props when not given an excludeList', () => {
    const props = { foo: 'foo' };
    expect(filterProps(props)).toBe(props);
  });

  it('console.errors and returns what was passed when props is not an object', () => {
    const errorSpy = jest.fn();
    console.error = errorSpy;
    const stringValue = 'foo';

    expect(filterProps(stringValue)).toBe(stringValue);
    expect(errorSpy).toHaveBeenCalledTimes(1);
  });

  it('excludes props based on excludeList', () => {
    const props = { foo: 'foo', bar: 'bar' };
    const excludeList = ['bar'];

    expect(filterProps(props, excludeList)).toStrictEqual({ foo: 'foo' });
  });

  it('ignores excludeList when props is not an object', () => {
    const stringValue = 'foo';
    expect(filterProps(stringValue, ['foo'])).toBe(stringValue);
  });

  it('console.errors and returns unfiltered props when excludeList is not an array of strings', () => {
    const errorSpy = jest.fn();
    console.error = errorSpy;
    const props = { foo: 'foo', bar: 'bar' };
    const excludeList = [() => {}];

    expect(filterProps(props, excludeList)).toStrictEqual(props);
    expect(errorSpy).toHaveBeenCalledTimes(1);
  });
});
