// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {crashReporter} = require('electron')

crashReporter.start({
  productName: 'MPStudio',
  companyName: 'Motorized Precision',
  submitURL: 'https://pacific-falls-32011.herokuapp.com/',
  autoSubmit: true,
  ignoreSystemCrashHandler: false,
  extra: {'test': 'test'}
})

process.crash()
