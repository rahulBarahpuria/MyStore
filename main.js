const{app, BrowserWindow, Tray} = require('electron');
let win;
function createWindow(){
    win = new BrowserWindow({
      height : 800,
      width : 600

      });
    win.loadURL('C:/rahul/Electron/HelloWorld/index.html');//you can choose your own path
}
app.on('ready', createWindow);
