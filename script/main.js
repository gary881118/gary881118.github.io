
let myHeading = document.querySelector("h1");
myHeading.textContent = 'Hello world!';
var myButton =document.querySelector('button');
var myImage = document.querySelector("img");

myImage.onclick =function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='image/學習.jpg'){
        myImage.setAttribute ('src','image/learn.jpg');
    }else{myImage.setAttribute ('src','image/學習.jpg');

    }

}
function setUserName(){
    let myName = prompt('please enter your name'); /*prompt 跳出可輸入資料的彈窗*/
    localStorage.setItem('name',myName);
    myHeading.innerHTML ='your first project'+myName;
    if(!localStorage.getItem('name'||myName===null)) { /*如果localStorage不存在*/
        setUserName(); /*初始化並輸入*/
      } else {
        let storedName = localStorage.getItem('name');/*儲存剛剛輸入的內容*/
        myHeading.innerHTML ='your first project '+myName;
      }
}
myButton.onclick = function() {
    setUserName();
  }

