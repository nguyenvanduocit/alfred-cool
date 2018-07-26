const alfy = require('alfy');
const superb = require('superb');
const yesNo = require('yes-no-words');

let word = '';
switch (alfy.input) {
  case 'yes':
    word = yesNo.yesRandom()
    break
  case 'no':
    word = yesNo.noRandom()
    break
  default:
    word = superb.random()
    break
}

if (word !== '') {
  alfy.output([
    {
      title: `cool: ${word}`,
      arg: word
    }
  ])
}
