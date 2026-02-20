
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js') // Optional preload script
    },
    title: "Free Bill - Desktop Edition",
    icon: path.join(__dirname, 'public/favicon.ico'),
    autoHideMenuBar: true,
    backgroundColor: '#FCF8F5'
  });

  // Load the app
  // In development, point to the dev server
  // In production, point to the local server or hosted URL
  const url = isDev ? 'http://localhost:9002' : 'http://localhost:9002';
  win.loadURL(url);

  if (isDev) {
    win.webContents.openDevTools();
  }

  // Handle window titles
  win.on('page-title-updated', (e) => {
    e.preventDefault();
  });
}

// Single instance lock
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    const win = BrowserWindow.getAllWindows()[0];
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });

  app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
