/**
 * @typedef {import('./index').TorrentSource} TorrentSource
 */

/**
 * @implements {TorrentSource}
 */
export default class AbstractSource {
  /**
   * @type {import('./index').SearchFunction}
   */
  single(options) {
    throw new Error('Source does not implement method #single()')
  }

  /**
   * @type {import('./index').SearchFunction}
   */
  batch(options) {
    throw new Error('Source does not implement method #batch()')
  }

  /**
   * @type {import('./index').SearchFunction}
   */
  movie(options) {
    throw new Error('Source does not implement method #movie()')
  }

  /**
   * @type {() => Promise}
   */
  validate() {
    throw new Error('Source does not implement method #validate()')
  }
}
