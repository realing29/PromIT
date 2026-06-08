export const LOGIN_CREDENTIALS = {
  validUsername: 'practice',
  validPassword: 'SuperSecretPassword!',
  invalidUsername: 'wrongUser',
  invalidPassword: 'WrongPassword',
} as const;

export const INPUTS_DATA = {
  number: '42',
  text: 'Hello',
  password: 'secret123',
  date: '2025-01-15',
} as const;

export const EMAIL_CASES = {
  valid: 'user@example.com',
  empty: '',
  noAt: 'invalid-email',
  noDomain: 'user@',
  invalidDomain: 'user@.com',
} as const;

export const AUTOCOMPLETE_COUNTRY = 'Canada';
