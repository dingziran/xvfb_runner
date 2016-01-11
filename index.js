/**
 * Created by dingziran on 2016/1/11.
 */
var headless = require('headless');
var fs = require('fs');
var servernum=99;
fs.exists('/tmp/.X' + servernum + '-lock', function(exists) {
    if(exists) {
        console.log('Xvfb exist on server number', servernum);
    }
    else{
        headless(function(err, childProcess, servernum_99) {
            if(err){
                throw err;
            }
            else {
                // childProcess is a ChildProcess, as returned from child_process.spawn()
                console.log('Xvfb start on server number', servernum_99);
                console.log('Xvfb pid', childProcess.pid);
                //console.log('err should be null', err);
            }
        });
    }
});