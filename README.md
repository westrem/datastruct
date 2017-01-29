# DataStructure

Simple and naïve implementation of some data structure with no dependencies.

* no **OOP** (`class`, `extends`), just plain **Prototypal inheritance**
* no use of dangerous `this`
* private internals thanks to **Closures**
* no accidential changes thanks to `Object.freeze`

Currently implemented data structures:

* `Queue`
* `Stack`

# Installing

`npm install datastruct`

# Example usage

```
import DataStructure, { Queue, Stack } from 'datastruct';

const q = Queue(); // or DataStructure.Queue();
const s = Stack(); // or DataStructure.Stack();

q.add('Hello', 'World!');

q.size();                   // 2
q.length;                   // 2
q.isEmpty();                // false
q.contains('Hello');        // true
q.peek();                   // 'Hello' (.length == 2)
q.members();                // [ 'Hello', 'World!' ]
q.next();                   // 'Hello' (.length == 1)

// creating queue from iterable
const q2 = Queue.of([ 'Hello', 'World!' ]);

// testing for queue
Queue.is(q);                // true

s.add('Hello', 'World!');

s.size();                   // 2
s.length;                   // 2
s.isEmpty();                // false
s.contains('Hello');        // true
s.peek();                   // 'Hello' (.length == 2)
s.members();                // [ 'Hello', 'World!' ]
s.next();                   // 'Hello' (.length == 1)

// creating stack from iterable
const s2 = Stack.of([ 'Hello', 'World!' ]);

// testing for stack
Stack.is(s);                // true

```

## Differences in the order of adding elements

```
// Queue
q.add('Hello', 'World!') == q.add('Hello'); q.add('World!') == Queue.of([ 'Hello', 'World!' ])

// Stack
s.add('Hello', 'World!') != s.add('Hello'); s.add('World!')
s.add('Hello', 'World!') == Stack.of([ 'Hello', 'World!' ])

s.add('Hello', 'World!')            // members: [ 'Hello', 'World!' ]
s.add('Hello'); s.add('World!')     // members: [ 'World!', 'Hello' ]
Stack.of([ 'Hello', 'World!' ])     // members: [ 'Hello', 'World!' ]
```

The difference is due to an opinionated decision, that the call `s.add('Hello', 'World!')` should represent the
wish to *put these values into stack but when I read them back, give them back in this order* or in other words,
adding multiple values with one calls **implies** the order of the values is important and should not be changed regardless of the storage system.

In contrast, adding values with multiple calls **implies** that you *know* that Stack is a LIFO structure and wants the values back in LIFO fashion.

# License

MIT