exports.command = function (message) {
  return this.perform(function (browser, done) {
    console.log('\033[34m – \033[0m' + message);
    done();
  });
};
