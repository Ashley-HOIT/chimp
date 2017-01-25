module.exports = {
mocha: false
mochaConfig: {
    // tags and grep only work when watch mode is false
    tags: '',
    grep: null,
    timeout: 60000,
    reporter: 'spec',
    slow: 10000,
    useColors: true
  }
 }
