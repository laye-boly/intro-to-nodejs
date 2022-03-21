import { readFile } from 'fs/promises';

try{
    let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8');
    console.log(template);
}catch(error){
    console.log(error);
}


 