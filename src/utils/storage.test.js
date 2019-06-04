import * as storage from './storage';

describe('utils - storage', () => {
  describe('save', () => {
    it('should set the value in local storage', () => {
      storage.save('123');
      expect(localStorage.getItem(storage.key)).toBe('123');
    });

    it('should serialize objects', () => {
      storage.save({ test: '123' });
      expect(localStorage.getItem(storage.key)).toBe(JSON.stringify({ test: '123' }));
    });
  });

  it('should load the value from local storage', () => {
    localStorage.setItem(storage.key, '456');
    expect(storage.load()).toBe('456');
  });
});
