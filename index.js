const fetch = require('node-fetch')
let d = process.argv[2];
let m = process.argv[3];

fetch(`https://history.muffinlabs.com/date/${m}/${d}`)
  .then((response) => response.json())
  .then((data) => {
      console.log(data.data.Events)
      console.log(data.data.Births)
      console.log(data.data.Deaths)

  }
  )

