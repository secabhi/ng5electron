const {app,BrowserWindow} = require('electron');
let win;
function createMain(){
win = new BrowserWindow({
    width:600,
    height:600,
    backgroundColor:'#ffffff',

})

win.loadURL(`file://${__dirname}/dist/index.html`)
win.on('closed',function(){
    win=null;
})
}

app.on('ready',createMain);

app.on('window-all-closed',function(){
    if(process.platform !== 'darwin' ){
        app.quit();
    }
})

app.on('activate',function(){
    if(win==null){
        createMain()
    }
})