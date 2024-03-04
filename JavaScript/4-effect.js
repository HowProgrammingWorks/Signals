'use strict';

const { signal, computed, effect } = require('@preact/signals-core');

const count = signal(100);
console.log(`Count initial: ${count.value}`);

const dispose = effect(() => {
  console.log(`Count changed: ${count.value}`);
});

count.value = 200;
count.value = 300;
dispose();
count.value = 400;
