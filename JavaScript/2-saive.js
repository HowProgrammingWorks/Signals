'use strict';

const signal = (value) => {
  const s = { value };
  const getter = () => typeof s.value === 'function' ? s.value() : s.value;
  getter.set = (value) => s.value = value;
  getter.update = (callback) => s.value = callback(s.value);
  return getter;
};

const computed = (compute) => signal(compute);

// Usage

const count = signal(100);
console.log(`Count 1: ${count()}`);

count.set(200);
console.log(`Count 2: ${count()}`);

count.update((prev) => prev + 50);
console.log(`Count 3: ${count()}`);

const num = signal(1000);

const total = computed(() => num() + count());
console.log(`Total: ${total()}`);
