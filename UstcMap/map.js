class QQMapWX {
  constructor(options) {
    if (!options.key) {
        throw Error('key值不能为空');
    }
    this.key = options.key;
  };
};

module.exports = QQMapWX;