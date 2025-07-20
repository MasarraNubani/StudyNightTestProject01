import { shuffle } from '../src/shuffle.js';
import { expect } from 'chai';

describe('shuffle', () => {
  it('should shuffle the indexes of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const original = [...arr];
    const result = shuffle(arr);
    expect(result).to.have.members(original);
    expect(result.join(',')).to.not.equal(original.join(','));
  });
});
