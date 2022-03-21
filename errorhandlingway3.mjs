import { readFile } from 'fs/promises';

process.on('uncaughtException', error => console.log(error.toString()));


let template = await readFile(new URL('./tempnlate.html', import.meta.url), 'utf-8');
console.log(template);



 