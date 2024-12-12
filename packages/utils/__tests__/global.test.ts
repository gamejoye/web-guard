import { getFlag, initFlags, isBrowerEnv, setFlag, webGuardGlobal } from '../src';

describe('global', () => {
  describe('flags', () => {
    it('should be able to get flags', () => {
      setFlag('onClick', true);
      expect(getFlag('onClick')).toBe(true);
      setFlag('onClick', false);
      expect(getFlag('onClick')).toBe(false);
    });

    it('should be able to init flags', () => {
      initFlags([
        ['onClick', true],
        ['onError', true],
        ['onKeyDown', false],
      ]);
      expect(getFlag('onClick')).toBe(true);
      expect(getFlag('onError')).toBe(true);
      expect(getFlag('onKeyDown')).toBe(false);
    });
  });

  describe('isBrowerEnv shou', () => {
    it('should be true in browser', () => {
      const global = webGuardGlobal;
      expect(isBrowerEnv).toBe(global !== undefined);
    });
  });
});