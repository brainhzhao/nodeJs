/**
 *  @author zhaoheng
 *  @version 20190607
 */
var fs=require("fs");


var openFile=fs.readFile("/Users/zhaoheng/code/node/LICENSE",function(err,file){
    //file.readLine();
    console.log(file.readLine());
});
console.log(11);