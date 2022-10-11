Instructions for installing a specific chromium version:
<https://www.chromium.org/getting-involved/download-chromium/>

Install a specific version of chromium:
```
export NODE_CHROMIUM_REVISION=1036826 // version 106.0.5249.91
npm install chromium
```

Notes:

* <https://nodejs.org/api/child_process.html#child_processspawncommand-args-options>
* <https://www.npmjs.com/package/chrome-launcher>
* <https://github.com/GoogleChrome/chrome-launcher/blob/main/src/chrome-launcher.ts> - chrome-launcher
* <https://github.com/webdriverio/webdriverio/blob/main/packages/devtools/src/launcher.ts> - webdriverio laucher
* Why chrome trace can't be captured:
  <https://stackoverflow.com/questions/51382711/writing-chrome-v8-trace-gc-output-to-a-file-stdout-redirection-does-not-work>
  <https://bugs.chromium.org/p/chromium/issues/detail?id=865876#c3>
* <https://slack.engineering/chrome-tracing-for-fun-and-profit/> - Chrome tracing
* Chrome options
  * <https://webdriver.io/docs/options/#capabilities> - passing chrome options in wdio
  * <https://chromedriver.chromium.org/capabilities#h.p_ID_106> - chromedriver options / wdio-chrome interface
  * <https://peter.sh/experiments/chromium-command-line-switches/> - chrome options
  * <https://gist.github.com/kyranet/3331b1346b773e1b03f1da2127f73fd0> - v8 options