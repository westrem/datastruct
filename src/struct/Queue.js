function queue() {}

function Queue() {

  const storage = [];

  function enqueue(...args) {
    for (let value of args) {
      storage.push(value);
    }
  }

  function dequeue() {
    return storage.shift();
  }

  function isEmpty() {
    return storage.length === 0;
  }

  function size() {
    return storage.length;
  }

  function contains(value) {
    return storage.indexOf(value) !== -1;
  }

  function members() {
    // warning: shallow copy!
    return [...storage];
  }

  function peek() {
    // warning: might return direct reference
    return storage[0];
  }

  let prototype = new queue();

  prototype.enqueue = enqueue;
  prototype.dequeue = dequeue;
  prototype.add = enqueue;
  prototype.next = dequeue;
  prototype.isEmpty = isEmpty;
  prototype.size = size;
  prototype.contains = contains;
  prototype.members = members;
  prototype.peek = peek;

  const q = Object.create(prototype);

  Object.defineProperty(q, 'length', {
    get: size
  });

  Object.freeze(q);

  // nullify unnecessary reference
  prototype = null;

  return q;
}

Queue.of = function(value) {
  const q = Queue();
  if (typeof value[Symbol.iterator] === 'function') {
    q.enqueue(...value);
  }
  else {
    q.enqueue(value);
  }
  return q;
}

Queue.is = function(value) {
  return (value instanceof queue);
}

Object.freeze(Queue);

export default Queue;
