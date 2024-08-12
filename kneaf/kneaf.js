/*
  Kneaf.js - v1.0

  This module is compatible in the browser and any javascript runtime that has support for "Async-Await" andn "setTimeout()" such as node.js/deno/bun

  To run this module, one can copy all the code to the browser's console, include this to "<script>" tag, or run it with your runtime of choice

  Examples
  ```html
  <body>
    <script src="path/to/kneaf.js">
  <body>
  ```

  ```sh
  node path/to/kneaf.js
  ```

  History:
  2023-08-12. github:andiputraw : Created program
  2023-08-12. github:andiputraw : Replaced "Contributor" with "History"
*/


/**
 * Wait for given amount of time
 * @param {number} sec. number in seconds
 * @returns {Promise<void>} Promise indicating completion of waiting
 */
function wait(sec) {
  if(typeof sec !== 'number') throw new Error('sec is not a number')
  return new Promise((res) => {
    setTimeout(() => {
      res()
    }, sec * 1_000);
  })
}

async function main(){
  while(true){
    console.log('Kneaf')
    await wait(5)
  }
}

main()