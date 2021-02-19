import padMessages, {
  validateMultiplier,
  validateCharacter,
  MIN_MULTIPLIER,
  MAX_MULTIPLIER
} from '../utils/padMessages';

describe('padMessages util', () => {
  it('defaults message object to empty object when not given one', () => {
    expect(padMessages()).toEqual({});
  });

  it('returns the value if it is not a string, array or object', () => {
    expect(padMessages(2)).toEqual(2);
  });

  it('wraps msgObj values with correct default multiplier and padding character', () => {
    const msgObj = {
      value1: 'string1'
    };

    const { value1 } = padMessages(msgObj);

    expect(value1).toBe('⇚⇚string1⇛⇛');
  });

  it('adjusts padding based on multiplier config option', () => {
    const msgObj = {
      value1: 'string1'
    };

    const { value1 } = padMessages(msgObj, { multiplier: 0.6 });

    expect(value1).toBe('⇚⇚⇚string1⇛⇛⇛');
  });

  it('limits multiplier to a max of 3.0 (300%)', () => {
    const msgObj = {
      value1: 'string1'
    };
    const maxArrows = '⇚⇚⇚⇚⇚⇚⇚⇚⇚⇚⇚string1⇛⇛⇛⇛⇛⇛⇛⇛⇛⇛⇛';

    const { value1 } = padMessages(msgObj, { multiplier: 40 });

    expect(value1).toBe(maxArrows);
  });

  it('limits multiplier to a min of 0.0 (0%)', () => {
    const msgObj = {
      value1: 'string1'
    };

    const { value1 } = padMessages(msgObj, { multiplier: -0.6 });

    expect(value1).toBe('⇚string1⇛');
  });

  it('warns when user passes a non-object type to msgObj arg', () => {
    let output = '';
    const storeLog = msg => {
      output += msg;
    };
    console.warn = jest.fn(storeLog);
    padMessages('string1');
    expect(output).toBeTruthy();
  });

  it('wraps messages that are inside an array', () => {
    const msgObj = {
      value1: [
        {
          value2: 'string1'
        },
        {
          value3: 'string1'
        }
      ]
    };

    const paddedValue1 = [
      {
        value2: '⇚⇚string1⇛⇛'
      },
      {
        value3: '⇚⇚string1⇛⇛'
      }
    ];

    const { value1 } = padMessages(msgObj);

    expect(value1).toEqual(paddedValue1);
  });

  it('wraps messages that are in an object', () => {
    const msgObj = {
      value1: {
        value2: 'string1'
      },
      value3: {
        value2: 'string1'
      }
    };

    const paddedMsgObj = {
      value1: {
        value2: '⇚⇚string1⇛⇛'
      },
      value3: {
        value2: '⇚⇚string1⇛⇛'
      }
    };

    expect(padMessages(msgObj)).toEqual(paddedMsgObj);
  });
  describe('validateMultiplier function', () => {
    it('constrains the provided multiplier and warns when user passes a multiplier larger than allowed max', () => {
      let output = '';
      const storeLog = msg => {
        output += msg;
      };
      console.warn = jest.fn(storeLog);

      const constrainedMultiplier = validateMultiplier(MAX_MULTIPLIER + 2);

      expect(output).toBeTruthy();
      expect(constrainedMultiplier).toBe(MAX_MULTIPLIER);
    });

    it('constrains the provided multiplier and warns when user passes a multiplier smaller than allowed min', () => {
      let output = '';
      const storeLog = msg => {
        output += msg;
      };
      console.warn = jest.fn(storeLog);

      const constrainedMultiplier = validateMultiplier(MIN_MULTIPLIER - 2);

      expect(output).toBeTruthy();
      expect(constrainedMultiplier).toBe(MIN_MULTIPLIER);
    });
  });
  describe('validateCharacter function', () => {
    it('returns only the first character of a provided character option of length > 1 and warns', () => {
      let output = '';
      const storeLog = msg => {
        output += msg;
      };
      console.warn = jest.fn(storeLog);

      const validatedChar = validateCharacter('yay!');

      expect(output).toBeTruthy();
      expect(validatedChar).toBe('y');
    });
  });
});
