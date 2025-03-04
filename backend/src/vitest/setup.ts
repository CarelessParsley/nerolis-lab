import { beforeEach } from 'vitest';
import { RandomNumberStore } from '../utils/random-utils/pre-generated-random.js';

/**
 * Reset the RandomNumberStore before each test to ensure deterministic behavior
 */
beforeEach(() => {
  RandomNumberStore.reset();
});
