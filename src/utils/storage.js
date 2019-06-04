export const key = 'std-20';

export const save = (value) => {
  const stringValue = value && typeof value !== 'string'
    ? JSON.stringify(value)
    : value;

  localStorage.setItem(key, stringValue);
};

export const load = () => localStorage.getItem(key);
