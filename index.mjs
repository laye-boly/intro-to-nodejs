import { readFile, writeFile } from 'fs/promises';

let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8');
 console.log(template);

const data = {
  title: 'My new file',
  body: 'I wrote this file to disk using node'
};

for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val);
}

console.log(template);
await writeFile(new URL('./template.html', import.meta.url), template)