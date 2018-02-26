/**
 * NamedChunkdsPlugin
 * webpack 插件 -- 命名Chunk ids
 * 
 * @copyright http://m.wingontravel.com
 * @author    王骁 <wangxiao@ctrip.com>
 */

module.exports = class FixedChunkIdPlugin {
  /**
   * @param {Object} options 选项
   * @param {Function} options.matcher  匹配器,返回true的Chunk将被命名ChunkId (module:Module)=>Boolean
   * @param {Function} options.generator id构造器,返回Chunk对应的命名id (module:Module)=>id:String
   * @memberof NamedChunkIdsPlugin
   */
  constructor(options) {
    this.options = options || {}
  }

  apply(compiler) {

    compiler.plugin('compilation', compilation =>
      compilation.plugin('before-chunk-ids', chunks => {
        chunks.forEach((chunk) => {
          if (!chunk.id) {
            chunk.id = chunk.name
          }
        })
      })
    )
  }
}