const delay = ms => new Promise(resolve => setTimeout(resolve(ms), ms))
delay(100).then(data => console.log(data))