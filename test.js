const faker = require('faker');
const fs = require('fs')

const fake = () => {
  const adj = faker.commerce.productAdjective() + ' ' + faker.company.catchPhraseAdjective() + ' Cat';
  return adj;
}

const picGen = () => {
  const stream = fs.createWriteStream('d:/data/pic.csv');
  let i = 1000;
  let n = 0
  const write = () => {
    let ok = true;
    do {
      n += 1;
      i -= 1;
      const numType1 = () => {
        let result = '';
        const n = Math.trunc(Math.random() * 600 + 300);
        const n2 = Math.trunc(n * (0.7 + Math.random() * 0.4));
        return result += n + 'x' + n2;
      }
      
      const numType2 = () => {
        let result = '';
        const n = Math.trunc(Math.random() * 600 + 300);
        const n2 = Math.trunc(n * (0.7 + Math.random() * 0.4));
        return result += n + '/' + n2;
      }
      if (i === 0) {
        stream.write(`${n},${fake()},"https://source.unsplash.com/${numType1()}/?cats,https://loremflickr.com/${numType2()},http://placekitten.com/${numType2()}"\n`)
      } else {
        ok = stream.write(`${n},${fake()},"https://source.unsplash.com/${numType1()}/?cats,https://loremflickr.com/${numType2()},http://placekitten.com/${numType2()}"\n`)
      }
    } while (i > 0 && ok);
    if (i > 0) {
      stream.once('drain', write);
    }
  }
  write();
}


//imageGen()
picGen()