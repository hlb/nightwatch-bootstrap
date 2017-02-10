/*
* Takes provided URL passed as argument and make full height screenshots of this page
* with several viewport widths using Nightwatch.js with Selenium.
*
* These viewport widths are taken from common android and iOS devices. Modify as needed.
*
* Usage:
* $ nightwatch -e phantomjs -t viewport-shots.js http://example.com
*/


module.exports = {
  "Viewport Screenshots" : function (browser) {
    // Make sure a URL has been passed
    if (process.argv.length < 5) {
      console.log('No URL was specified');
      browser.end();
    }

    var url = process.argv[6],
        save_directory = 'screenshots',
        viewport_widths = [240, 320, 360, 568, 603, 640, 768, 800, 960, 1024, 1280, 1400, 1600, 1920];

    browser.url(url).waitForElementVisible('body', 1000);

    viewport_widths.forEach(function(width){
      browser
        .resizeWindow(width, 300)
        .saveScreenshot(save_directory + '/' + width + '.png')
    });

    browser.end();
  }
};
