function stack() {}

function Stack() {

  const storage = [];

  function push(...args) {
    args = args.reverse();
    for (let value of args) {
      storage.push(value);
    }
  }

  function pop() {
    return storage.pop();
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
    return [...storage].reverse();
  }

  function peek() {
    // warning: might return direct reference
    return storage[storage.length-1];
  }

  let prototype = new stack();

  prototype.push = push;
  prototype.pop = pop;
  prototype.add = push;
  prototype.next = pop;
  prototype.isEmpty = isEmpty;
  prototype.size = size;
  prototype.contains = contains;
  prototype.members = members;
  prototype.peek = peek;

  const s = Object.create(prototype);

  Object.defineProperty(s, 'length', {
    get: size
  });

  Object.freeze(s);

  // nullify unnecessary reference
  prototype = null;

  return s;
}

Stack.of = function(value) {
  const s = Stack();
  if (typeof value[Symbol.iterator] === 'function') {
    s.push(...value);
  }
  else {
    s.push(value);
  }
  return s;
}

Stack.is = function(value) {
  return (value instanceof stack);
}

Object.freeze(Stack);

export default Stack;





