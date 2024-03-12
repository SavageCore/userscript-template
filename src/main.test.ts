import { describe, expect, it } from 'vitest';
import { getGreeting } from './main';

describe('template entrypoint', () => {
  it('returns the default greeting', () => {
    expect(getGreeting()).toBe('Hello, world!');
  });
});
