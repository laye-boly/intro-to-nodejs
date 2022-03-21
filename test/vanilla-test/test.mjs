import add from './myLib.mjs';
import assert from 'assert';

try {
    console.log('add() should add two numbers ')
    
    assert.equal(add(1, 1), 1)
    console.log('  ✅ passed')
  } catch (e) {
    console.log('  🚫 fail')
    console.error(e)
  }