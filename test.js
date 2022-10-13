const ChromeLauncher = require('chrome-launcher');
const path = require('path');

async function cleanup() {
  await ChromeLauncher.killAll();
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  ChromeLauncher.launch({
    startingUrl: 'https://google.com',
    chromePath: path.join(__dirname, 'node_modules/chromium/lib/chromium/chrome-linux/chrome'),
    chromeFlags: ['--disable-gpu', '--no-sandbox', '--js-flags="--trace"'],
    userDataDir: path.join(__dirname, 'logs/chrome'),
    logLevel: 'verbose'
  }).then(chrome => {
    console.log(`Chrome debugging port running on ${chrome.port}`);
  });

  await delay(240000);
  await cleanup();
}
main();
// chromeFlags: ['--headless', '--disable-gpu', '--single-process', '--no-sandbox', '--js-flags="--trace"'],
//   '--renderer-cmd-prefix="xterm -e /home/cking/Dev/capture_chrome_stdout/test.sh"'],
//   '--renderer-cmd-prefix="/home/cking/Dev/capture_chrome_stdout/test.sh"'
