const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 414, height: 896,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: { nodeIntegration: false }
  })
  win.loadFile('index.html')
}
app.whenReady().then(createWindow)