module.exports = {
  'Demo test Google' : function (client) {
    client
      .log('Open Google homepage') // custom log function
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn wikipedia')
      .pause(1000)
      .click('body')
      .waitForElementVisible('input[name=btnK]', 1000)
      .click('input[name=btnK]')
      .log('We are now in next page')
      .pause(1000)
      .assert.containsText('.srg :first-child',
        'Rembrandt')
      .end();
  }
};
