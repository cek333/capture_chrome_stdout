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
    chromeFlags: ['--headless', '--disable-gpu']
  }).then(chrome => {
    console.log(`Chrome debugging port running on ${chrome.port}`);
  });

  await delay(2000);
  await cleanup();
}
main();

