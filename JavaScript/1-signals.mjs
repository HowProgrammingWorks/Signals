import { signal, computed } from '@angular/core';

// npm install @angular/core --save
// yarn add @angular/core

const name = signal('Marcus Aurelius');
console.log('Name 1: ' + name());

name.set('Verus');
console.log('Name 2: ' + name());

name.update((previous) => 'Marcus Aurelius ' + previous);
console.log('Name 3: ' + name());

const emperor = computed(() => {
  let fullName = name();
  if (fullName.includes('Verus')) {
    return fullName.replace('Verus', 'Antoninus');
  }
  return fullName + ' Augustus';
});
console.log('Name 4: ' + emperor());

name.set(emperor());
console.log('Name 5: ' + emperor());
