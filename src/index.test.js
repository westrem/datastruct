import { expect } from 'chai';
import DataStructure, { Queue as Q, Stack as S } from './index';
import Queue from './struct/Queue';
import Stack from './struct/Stack';

describe('DataStructure', function() {

  describe('as default export', function() {

    it('should be an object', function() {
      expect(DataStructure).to.be.an('object');
    });

    it('should be a frozen object', function() {
      expect(DataStructure).to.be.frozen;
    });

    it('should has a Queue property', function() {
      expect(DataStructure).to.haveOwnProperty('Queue');
    });

    it('should has a Stack property', function() {
      expect(DataStructure).to.haveOwnProperty('Stack');
    });

  });

  describe('method', function() {

    describe('.Queue()', function() {

      it('should be the queue factory', function() {
        expect(DataStructure.Queue === Queue).to.be.true;
      });

    });

    describe('.Stack()', function() {

      it('should be the stack factory', function() {
        expect(DataStructure.Stack === Stack).to.be.true;
      });

    });

  });

});

describe('Alias import', function() {

  describe('Queue', function() {

    it('should be the queue factory', function() {
      expect(Q === Queue).to.be.true;
    });

  });

  describe('Stack', function() {

    it('should be the stack factory', function() {
      expect(S === Stack).to.be.true;
    });

  });

});
