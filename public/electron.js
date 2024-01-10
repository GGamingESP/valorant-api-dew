import { app, BrowserWindow, screen } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';
let mainWindow;

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    mainWindow = new BrowserWindow({ width: width, height: height });
    mainWindow.setMenuBarVisibility(false)
    mainWindow.loadURL(isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../build/index.html')}`);
    if (isDev) {
        // si quieres tener consola abierta puedes descomentar esto
        // mainWindow.webContents.openDevTools();
    }
    mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
