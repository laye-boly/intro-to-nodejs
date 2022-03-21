import fs from 'fs';

fs.readFile(new URL('./index.mjs', import.meta.url), 'utf-8', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log("everything worked perfect!");
    }
  })