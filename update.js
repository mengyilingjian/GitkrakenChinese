const enJSON = require('./strings.en.json')
const znJSON = require('./strings.zn.json')
const fs = require('fs')

for(let key1st in enJSON) {
  for(let key2nd in enJSON[key1st]) {
    if(znJSON[key1st][key2nd]) enJSON[key1st][key2nd] = znJSON[key1st][key2nd]
  }
}

const output = JSON.stringify(enJSON, null, 2)

fs.writeFile('./strings.json', output, 'utf8', () => {
  console.log('finished')
})
