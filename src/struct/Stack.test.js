import { expect } from 'chai';
import Stack from './Stack';


describe('Stack', function() {

  describe('when created', function() {

    it('should return an object', function() {
      const s = Stack();
      expect(s).to.be.a('object');
    });

    it('should return a frozen object', function() {
      const s = Stack();
      expect(s).to.be.frozen;
    });

    it('should return a stack instance', function() {
      const s = Stack();
      expect(Stack.is(s)).to.be.true;
    });

    it('should return an empty stack', function() {
      const s = Stack();
      expect(s.isEmpty()).to.be.true;
    });

    it('should return a stack with a single property length', function() {
      const s = Stack();
      const properties = Object.getOwnPropertyNames(s);
      expect(properties.length).to.be.equal(1);
      expect(properties[0]).to.be.equal('length');
    });

  });

  describe('property', function() {

    describe('.length', function() {

      it('should return a number', function() {
        const s = Stack();
        expect(s.length).to.be.a('number');
      });

      it('should return correct length of stack', function() {
        const s = Stack();
        expect(s.length).to.be.equal(0);
        s.push(1);
        expect(s.length).to.be.equal(1);
        s.push(2);
        expect(s.length).to.be.equal(2);
        s.pop();
        expect(s.length).to.be.equal(1);
      });

      it('should not be changeable', function() {
        const s = Stack();
        expect( () => {
          s.length = 1;
        } ).to.throw(Error);
      });

    });

  });

  describe('should respond to', function() {

    it('.isEmpty()', function() {
      const s = Stack();
      expect(s).to.respondTo('isEmpty');
    });

    it('.push()', function() {
      const s = Stack();
      expect(s).to.respondTo('push');
    });

    it('.add()', function() {
      const s = Stack();
      expect(s).to.respondTo('add');
    });

    it('.pop()', function() {
      const s = Stack();
      expect(s).to.respondTo('pop');
    });

    it('.next()', function() {
      const s = Stack();
      expect(s).to.respondTo('next');
    });

    it('.size()', function() {
      const s = Stack();
      expect(s).to.respondTo('size');
    });

    it('.members()', function() {
      const s = Stack();
      expect(s).to.respondTo('members');
    });

    it('.peek()', function() {
      const s = Stack();
      expect(s).to.respondTo('peek');
    });

    it('.contains()', function() {
      const s = Stack();
      expect(s).to.respondTo('contains');
    });

    it('#is()', function() {
      expect(Stack).to.haveOwnProperty('is');
    });

    it('#of()', function() {
      expect(Stack).to.haveOwnProperty('of');
    });

  });

  describe('method', function() {

    describe('.isEmpty()', function() {

      it('should return boolean', function() {
        const s = Stack();
        expect(s.isEmpty()).to.be.a('boolean');
      });

      it('should return true on empty stack', function() {
        const s = Stack();
        expect(s.isEmpty()).to.be.true;
      });

      it('should return false otherwise', function() {
        const s = Stack();
        s.add(1);
        expect(s.isEmpty()).to.be.false;
      });

    });

    describe('.push()', function() {

      it('should increase the stack size', function() {
        const s = Stack();
        s.push(1, 2);
        expect(s.size()).to.be.equal(2);
      });

      it('should add all values to the stack', function() {
        const s = Stack();
        s.push(1, 2);
        expect(s.pop()).to.be.equal(1);
        expect(s.pop()).to.be.equal(2);
      });

    });

    describe('.add()', function() {

      it('should increase the stack size', function() {
        const s = Stack();
        s.add(1);
        s.add(2);
        expect(s.size()).to.be.equal(2);
      });

      it('should add all values in the stack', function() {
        const s = Stack();
        s.add(1);
        s.add(2);
        expect(s.pop()).to.be.equal(2);
        expect(s.pop()).to.be.equal(1);
      });

    });

    describe('.pop()', function() {

      it('should return undefined on empty stack', function() {
        const s = Stack();
        expect(s.pop()).to.be.undefined;
      });

      it('should decrease the stack size', function() {
        const s = Stack();
        s.push(1);
        s.push(2);
        s.pop();
        expect(s.size()).to.be.equal(1);
      });

      it('should return the last element in stack', function() {
        const s = Stack();
        s.push(1);
        s.push(2);
        expect(s.pop()).to.be.equal(2);
      });

    });

    describe('.next()', function() {

      it('should return undefined on empty stack', function() {
        const s = Stack();
        expect(s.next()).to.be.undefined;
      });

      it('should decrease the stack size', function() {
        const s = Stack();
        s.push(1);
        s.push(2);
        s.next();
        expect(s.size()).to.be.equal(1);
      });

      it('should return the last element in stack', function() {
        const s = Stack();
        s.push(1);
        s.push(2);
        expect(s.next()).to.be.equal(2);
      });

    });

    describe('.size()', function() {

      it('should return a number', function() {
        const s = Stack();
        expect(s.size()).to.be.a('number');
      });

      it('should return correct size of stack', function() {
        const s = Stack();
        expect(s.size()).to.be.equal(0);
        s.push(1);
        expect(s.size()).to.be.equal(1);
        s.push(2);
        expect(s.size()).to.be.equal(2);
        s.pop();
        expect(s.size()).to.be.equal(1);
      });

    });

    describe('.contains()', function() {

      it('should return boolean', function() {
        const s = Stack();
        s.push(1)
        expect(s.contains(1)).to.be.a('boolean');
      });

      it('should return true on found value', function() {
        const s = Stack();
        s.push(1)
        expect(s.contains(1)).to.be.true;
      });

      it('should return false on not-found value', function() {
        const s = Stack();
        s.push(1)
        expect(s.contains(2)).to.be.false;
      });

    });

    describe('.peek()', function() {

      it('should return undefined on empty stack', function() {
        const s = Stack();
        expect(s.peek()).to.be.undefined;
      });

      it('should return the last element in stack', function() {
        const s = Stack();
        s.add(1);
        s.add(2);
        s.add(3);
        s.next();
        expect(s.peek()).to.be.equal(2);
      });

      it('should not decrease stack size', function() {
        const s = Stack();
        s.add(1);
        s.peek();
        expect(s.size()).to.be.equal(1);
      });

    });

    describe('.members()', function() {

      it('should return an array', function() {
        const s = Stack();
        expect(s.members()).to.be.an('array');
      });

      it('should return all elements in the stack', function() {
        const s = Stack();
        let obj = {};
        let arr = [];
        s.add(1);
        s.add('b');
        s.add(obj);
        s.add(arr);
        let members = s.members();
        let result = members[3] == 1 &&
                     members[2] == 'b' &&
                     members[1] == obj &&
                     members[0] == arr;
        expect(result).to.be.true;
      });

    });

    describe('#is()', function() {

      it('should return true for stack instances', function() {
        const s = Stack();
        expect(Stack.is(s)).to.be.true;
      });

      it('should return false for non-stack values', function() {
        expect(Stack.is(true)).to.be.false;
        expect(Stack.is(1)).to.be.false;
        expect(Stack.is('stack')).to.be.false;
        expect(Stack.is({})).to.be.false;
        expect(Stack.is([])).to.be.false;
      });

    });

    describe('#of()', function() {

      it('should return a stack instance', function() {
        const s = Stack.of(1);
        expect(Stack.is(s)).to.be.true;
      });

      it('should return a stack with correct members when iterable is passed', function() {
        let obj = {};
        let arr = [];
        let of = [1, 'b', obj, arr];
        const s = Stack.of(of);
        let members = s.members();
        let result = members[0] == 1 &&
                     members[1] == 'b' &&
                     members[2] == obj &&
                     members[3] == arr;
        expect(result).to.be.true;
      });

      it('should return a stack with correct member when plain value is passed', function() {
        const s = Stack.of(1);
        expect(s.next()).to.be.equal(1);
      });

    });

  });

});
