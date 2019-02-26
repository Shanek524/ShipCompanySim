const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const playBtn = document.getElementById('playBtn')

playBtn.addEventListener('click', function(event){
    const modalPath = path.join('file://', __dirname, 'game.html')
    let win = new BrowserWindow({autoHideMenuBar: true, fullscreen: true})
    win.loadURL(modalPath)
    win.show()
})

