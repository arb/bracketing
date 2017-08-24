'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Lab.expect;

const bracketing = require('../');
const longestSubArray = bracketing.bind(null, (left, right) => {
  return right > left;
});
const repeatingLetter = bracketing.bind(null, (left, right) => {
  return right === left;
});

describe('bracketing', () => {
  it('runs the provided predicate function', (done) => {
    let hit = 0;
    const predicate = (left, right) => {
      expect(left).to.equal(hit + 1);
      if (right) {
        expect(right).to.equal(hit + 2);
      } else {
        expect(right).to.be.undefined();
      }
      hit++;
      return false;
    };
    bracketing(predicate, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(hit).to.equal(9);
    done();
  });

  it('runs a predicate on an array', (done) => {
    expect(longestSubArray([1, 2, 3, 4, 5, 0, 9, 10, 11])).to.equal([1, 2, 3, 4, 5]);
    expect(longestSubArray([1, 2, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 10, 100])).to.equal([0, 1, 2, 3, 4, 5, 10, 100]);
    expect(longestSubArray([-5, -4, -3, -10, 1, 2, 3])).to.equal([-10, 1, 2, 3]);
    expect(repeatingLetter(['a', 'a', 'b', 'b', 'c', 'c'])).to.equal(['a', 'a']);
    expect(repeatingLetter(['a', 'a', 'b', 'c', 'c', 'c'])).to.equal(['c', 'c', 'c']);
    done();
  });

  it('runs a predicate on a string', (done) => {
    expect(repeatingLetter('aabbcc')).to.equal('aa');
    expect(repeatingLetter('aabccc')).to.equal('ccc');
    done();
  });

  it('does not affect the supplied arguments', (done) => {
    const arrSequence = [1, 2, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 10, 100];
    longestSubArray(arrSequence);
    expect(arrSequence).to.equal([1, 2, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 10, 100]);

    const stringSequence = 'djdhfhdjajazzzzzzzzzzz';
    repeatingLetter(stringSequence);
    expect(stringSequence).to.equal('djdhfhdjajazzzzzzzzzzz');
    done();
  });
});
