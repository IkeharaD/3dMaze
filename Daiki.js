"use strict";
let Daiki={
width:window.innerWidth,
height:window.innerHeight
};


//配列のコピー
/*let copyArraySupporter=[],dummyArray=[];
function copyArray(array){
for(copyArraySupporter.push(0);copyArraySupporter[copyArraySupporter.length-1]<array.length;copyArraySupporter[copyArraySupporter.length-1]++){
if(array[copyArraySupporter[copyArraySupporter.length-1]].isArray){
dummyArray[copyArraySupporter[copyArraySupporter.length-1]]=(copyArray(array[copyArraySupporter[copyArraySupporter.length-1]]));
}else{
dummyArray[copyArraySupporter[copyArraySupporter.length-1]]=(array[copyArraySupporter[copyArraySupporter.length-1]]);
}
}
copyArraySupporter.pop();
return dummyArray;
}*/

function copyArray(array){
let dummyArray=[];
for(let i=0;i<array.length;i++){
if(array[i] instanceof Array){
dummyArray[i]=copyArray(array[i]);
}else{
dummyArray[i]=array[i];
}
}
return dummyArray;
}

//ダイクストラ
function dijkstra(map,x,z,range){
let brainMap=copyArray(map);
for(let i=0;i<brainMap.length;i++){
for(let j=0;j<brainMap[0].length;j++){
brainMap[i][j]=(brainMap[i][j]==0)?0:NaN;
}
}
brainMap[z][x]=1/range;
for(let i=1;true;i++){
if(i==range){
for(let j=0;j<brainMap.length;j++){
for(let k=0;k<brainMap[0].length;k++){
if(brainMap[j][k]==0){
brainMap[j][k]=1;
}
}
}
}else{
for(let j=0;j<brainMap.length;j++){
for(let k=0;k<brainMap[0].length;k++){
if(brainMap[j][k]==i/range&&j!=0&&k!=0&&j!=brainMap.length-1&&k!=brainMap.length-1){
if(brainMap[j-1][k]==0){
brainMap[j-1][k]=(i+1)/range;
}
if(brainMap[j+1][k]==0){
brainMap[j+1][k]=(i+1)/range;
}
if(brainMap[j][k-1]==0){
brainMap[j][k-1]=(i+1)/range;
}
if(brainMap[j][k+1]==0){
brainMap[j][k+1]=(i+1)/range;
}
}
}
}
}
let cont=0;
for(let j=0;j<brainMap.length;j++){
if(brainMap[j].indexOf(0)==-1){
cont++;
}
}
if(cont==brainMap.length){
break;
}
}
return brainMap;
}
window.onresize=function(){
Daiki.width=window.innerWidth;
Daiki.height=window.innerHeight;
}