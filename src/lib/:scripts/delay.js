/**
 *
 * @param {{milliseconds:number}} payload
 */
export function delay({ milliseconds }) {
  return new Promise(function start(stop) {
    setTimeout(stop, milliseconds)
  })
}
