import { expect } from 'chai';
import Queue from './Queue';


describe('Queue', function() {

  describe('when created', function() {

    it('should return an object', function() {
      const q = Queue();
      expect(q).to.be.a('object');
    });

    it('should return a frozen object', function() {
      const q = Queue();
      expect(q).to.be.frozen;
    });

    it('should return a queue instance', function() {
      const q = Queue();
      expect(Queue.is(q)).to.be.true;
    });

    it('should return an empty queue', function() {
      const q = Queue();
      expect(q.isEmpty()).to.be.true;
    });

    it('should return a queue with a single property length', function() {
      const q = Queue();
      const properties = Object.getOwnPropertyNames(q);
      expect(properties.length).to.be.equal(1);
      expect(properties[0]).to.be.equal('length');
    });

  });

  describe('property', function() {

    describe('.length', function() {

      it('should return a number', function() {
        const q = Queue();
        expect(q.length).to.be.a('number');
      });

      it('should return correct length of queue', function() {
        const q = Queue();
        expect(q.length).to.be.equal(0);
        q.enqueue(1);
        expect(q.length).to.be.equal(1);
        q.enqueue(2);
        expect(q.length).to.be.equal(2);
        q.dequeue();
        expect(q.length).to.be.equal(1);
      });

      it('should not be changeable', function() {
        const q = Queue();
        expect( () => {
          q.length = 1;
        } ).to.throw(Error);
      });

    });

  });

  describe('should respond to', function() {

    it('.isEmpty()', function() {
      const q = Queue();
      expect(q).to.respondTo('isEmpty');
    });

    it('.enqueue()', function() {
      const q = Queue();
      expect(q).to.respondTo('enqueue');
    });

    it('.add()', function() {
      const q = Queue();
      expect(q).to.respondTo('add');
    });

    it('.dequeue()', function() {
      const q = Queue();
      expect(q).to.respondTo('dequeue');
    });

    it('.next()', function() {
      const q = Queue();
      expect(q).to.respondTo('next');
    });

    it('.size()', function() {
      const q = Queue();
      expect(q).to.respondTo('size');
    });

    it('.members()', function() {
      const q = Queue();
      expect(q).to.respondTo('members');
    });

    it('.peek()', function() {
      const q = Queue();
      expect(q).to.respondTo('peek');
    });

    it('.contains()', function() {
      const q = Queue();
      expect(q).to.respondTo('contains');
    });

    it('#is()', function() {
      expect(Queue).to.haveOwnProperty('is');
    });

    it('#of()', function() {
      expect(Queue).to.haveOwnProperty('of');
    });

  });

  describe('method', function() {

    describe('.isEmpty()', function() {

      it('should return boolean', function() {
        const q = Queue();
        expect(q.isEmpty()).to.be.a('boolean');
      });

      it('should return true on empty queue', function() {
        const q = Queue();
        expect(q.isEmpty()).to.be.true;
      });

      it('should return false otherwise', function() {
        const q = Queue();
        q.add(1);
        expect(q.isEmpty()).to.be.false;
      });

    });

    describe('.enqueue()', function() {

      it('should increase the queue size', function() {
        const q = Queue();
        q.enqueue(1, 2);
        expect(q.size()).to.be.equal(2);
      });

      it('should add all values to the queue', function() {
        const q = Queue();
        q.enqueue(1, 2);
        expect(q.dequeue()).to.be.equal(1);
        expect(q.dequeue()).to.be.equal(2);
      });

    });

    describe('.add()', function() {

      it('should increase the queue size', function() {
        const q = Queue();
        q.add(1);
        q.add(2);
        expect(q.size()).to.be.equal(2);
      });

      it('should add all values in the queue', function() {
        const q = Queue();
        q.add(1);
        q.add(2);
        expect(q.dequeue()).to.be.equal(1);
        expect(q.dequeue()).to.be.equal(2);
      });

    });

    describe('.dequeue()', function() {

      it('should return undefined on empty queue', function() {
        const q = Queue();
        expect(q.dequeue()).to.be.undefined;
      });

      it('should decrease the queue size', function() {
        const q = Queue();
        q.enqueue(1);
        q.enqueue(2);
        q.dequeue();
        expect(q.size()).to.be.equal(1);
      });

      it('should return the first element in queue', function() {
        const q = Queue();
        q.enqueue(1);
        q.enqueue(2);
        expect(q.dequeue()).to.be.equal(1);
      });

    });

    describe('.next()', function() {

      it('should return undefined on empty queue', function() {
        const q = Queue();
        expect(q.next()).to.be.undefined;
      });

      it('should decrease the queue size', function() {
        const q = Queue();
        q.enqueue(1);
        q.enqueue(2);
        q.next();
        expect(q.size()).to.be.equal(1);
      });

      it('should return the first element in queue', function() {
        const q = Queue();
        q.enqueue(1);
        q.enqueue(2);
        expect(q.next()).to.be.equal(1);
      });

    });

    describe('.size()', function() {

      it('should return a number', function() {
        const q = Queue();
        expect(q.size()).to.be.a('number');
      });

      it('should return correct size of queue', function() {
        const q = Queue();
        expect(q.size()).to.be.equal(0);
        q.enqueue(1);
        expect(q.size()).to.be.equal(1);
        q.enqueue(2);
        expect(q.size()).to.be.equal(2);
        q.dequeue();
        expect(q.size()).to.be.equal(1);
      });

    });

    describe('.contains()', function() {

      it('should return boolean', function() {
        const q = Queue();
        q.enqueue(1)
        expect(q.contains(1)).to.be.a('boolean');
      });

      it('should return true on found value', function() {
        const q = Queue();
        q.enqueue(1)
        expect(q.contains(1)).to.be.true;
      });

      it('should return false on not-found value', function() {
        const q = Queue();
        q.enqueue(1)
        expect(q.contains(2)).to.be.false;
      });

    });

    describe('.peek()', function() {

      it('should return undefined on empty queue', function() {
        const q = Queue();
        expect(q.peek()).to.be.undefined;
      });

      it('should return the first element in queue', function() {
        const q = Queue();
        q.add(1);
        q.add(2);
        q.add(3);
        q.next();
        expect(q.peek()).to.be.equal(2);
      });

      it('should not decrease queue size', function() {
        const q = Queue();
        q.add(1);
        q.peek();
        expect(q.size()).to.be.equal(1);
      });

    });

    describe('.members()', function() {

      it('should return an array', function() {
        const q = Queue();
        expect(q.members()).to.be.an('array');
      });

      it('should return all elements in the queue', function() {
        const q = Queue();
        let obj = {};
        let arr = [];
        q.add(1);
        q.add('b');
        q.add(obj);
        q.add(arr);
        let members = q.members();
        let result = members[0] == 1 &&
                     members[1] == 'b' &&
                     members[2] == obj &&
                     members[3] == arr;
        expect(result).to.be.true;
      });

    });

    describe('#is()', function() {

      it('should return true for queue instances', function() {
        const q = Queue();
        expect(Queue.is(q)).to.be.true;
      });

      it('should return false for non-queue values', function() {
        expect(Queue.is(true)).to.be.false;
        expect(Queue.is(1)).to.be.false;
        expect(Queue.is('queue')).to.be.false;
        expect(Queue.is({})).to.be.false;
        expect(Queue.is([])).to.be.false;
      });

    });

    describe('#of()', function() {

      it('should return a queue instance', function() {
        const q = Queue.of(1);
        expect(Queue.is(q)).to.be.true;
      });

      it('should return a queue with correct members when iterable is passed', function() {
        let obj = {};
        let arr = [];
        let of = [1, 'b', obj, arr];
        const q = Queue.of(of);
        let members = q.members();
        let result = members[0] == 1 &&
                     members[1] == 'b' &&
                     members[2] == obj &&
                     members[3] == arr;
        expect(result).to.be.true;
      });

      it('should return a queue with correct member when plain value is passed', function() {
        const q = Queue.of(1);
        expect(q.next()).to.be.equal(1);
      });

    });

  });

});
