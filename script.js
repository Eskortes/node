let reset = document.getElementById('reset')
let gamexo = document.getElementById('gamexo')
//добавление блоков
for (let i = 0; i < 9; i++) {
    gamexo.innerHTML += '<div class="block"></div>';
}
//К
//нопка сброса


let allblock = document.getElementsByClassName('block')
reset.onclick = function () {
    Reset()
}
//мерцание цветов
let n = 0;
let h = 0;
let times;
 function Blinc(){times = setInterval(() => {
    allblock[n].style.backgroundColor = 'red';

       if (n < 9){n++;}
       if (n == 9) {n = 0; for (let m=0; m<allblock.length; m++)
    {allblock[m].style.backgroundColor = '';}}

  }, 100);}




 Blinc();

 //фунция сброса
function Reset() {
    for (let i = 0; i < allblock.length; i++) {
        allblock[i].innerHTML = '';
    }
}
//кнопка начать

let x = "player1";
let y = "player2";
let newgame = document.getElementById('newgame')

newgame.onclick = function () {
    clearInterval(times);
    for (let m=0; m<allblock.length; m++)
    {allblock[m].style.backgroundColor = '';}
    Reset();
    NewGame();
    winx = 0;
    wino = 0;
    document.getElementById('xwin').innerHTML = 0;
    document.getElementById('owin').innerHTML = 0;
    x = prompt('кто будет играть за кестики???', '');
    y = prompt('кто будет играть за нолики???', '');
    document.getElementById('xname').innerHTML = x;
    document.getElementById('oname').innerHTML = y;
    listitem = 0;

}


//Условие игры
let winx = 0;
let wino = 0;


function checWinner() {
    //для крестиков
    if (allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X' ||
        allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X' ||
        allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X' ||
        allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X' ||
        allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X' ||
        allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML == 'X' ||
        allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X' ||
        allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X')
        { Reset(); alert('победили крестики'); winx++; }
    document.getElementById('xwin').innerHTML = winx;
    if (document.getElementById('xwin').innerHTML == 3) {
        alert('победил(а) ' + x);
        Reset();
        document.getElementById('xwin').innerHTML = 0;
        document.getElementById('owin').innerHTML = 0;
        winx = 0;
        wino = 0;

    }
    //для ноликов
    if (allblock[0].innerHTML == 'O' && allblock[1].innerHTML == 'O' && allblock[2].innerHTML == 'O' ||
        allblock[3].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[5].innerHTML == 'O' ||
        allblock[6].innerHTML == 'O' && allblock[7].innerHTML == 'O' && allblock[8].innerHTML == 'O' ||
        allblock[0].innerHTML == 'O' && allblock[3].innerHTML == 'O' && allblock[6].innerHTML == 'O' ||
        allblock[1].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[7].innerHTML == 'O' ||
        allblock[2].innerHTML == 'O' && allblock[5].innerHTML == 'O' && allblock[8].innerHTML == 'O' ||
        allblock[0].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[8].innerHTML == 'O' ||
        allblock[2].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[6].innerHTML == 'O')
        { Reset(); alert('победили нолики'); wino++;
    }
    document.getElementById('owin').innerHTML = wino;
    if (document.getElementById('owin').innerHTML == 3) {
        alert('победил(а) ' + y)
        Reset();
        document.getElementById('xwin').innerHTML = 0;
        document.getElementById('owin').innerHTML = 0;
        winx = 0;
        wino = 0;

    } }
// Игра XO
let listitem = 0;
function NewGame(){
gamexo.onclick = function (event) {
    console.log(event);

    if (event.target.className == 'block') {
        if (listitem % 2 == 0) {
            event.target.innerHTML = "X";
        }
        else { event.target.innerHTML = "O"; }
    }
    listitem++;
    checWinner()
}}
//__________________________________________________________
//___function algoritm - division search
let list = [1,3,5,7,9,11,35,68];
for (let l = 0; l < list.length; l++){
    list[l]
}
console.log(list.length);


function Binary_Search(list, item){
    let low = 0,
        mid,
        guess,
        hight = list.length - 1; 
    while (low <= hight) {
         mid = Math.round((low + hight) / 2) ;
         guess = list[mid];
         
         if (guess == item){
            return mid
        }
        if (guess > item){
            hight = mid - 1
        }
        else {
            low = mid + 1;
             }
    }
    return NaN; 
//_________________________________________________    
   
}
 function not_function(namber){
     
 }
 console.log(Binary_Search(list, 1));
 const menubtn = document.querySelector('.menu__btn')
 console.log(menubtn)
 menubtn.textContent = 'hello world'
 //___________________________________________________
 // function replacement color with help Math.random
 function math_random(number) {
   return  Math.floor((Math.random() * number) + 1)
   
 }
 function chek_background(color1, color2) {
      let random_n = math_random(3);
      
      if (random_n == 1 )  {
          document.querySelector('#btn').style.backgroundColor = color2
       }
      else if ( random_n == 2) {
        document.querySelector('#btn').style.backgroundColor = color1
      }
      
    }
    chek_background('green', 'white')
    //_______________________________________________________
        // if (allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X'){Reset(); alert('победили крестики'); winx++;}
        // if (allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X'){ alert('победили крестики'); winx++;}
        // if (allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X'){ alert('победили крестики'); winx++;}
        // if (allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X'){ alert('победили крестики'); winx++;}
        // if (allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X'){ alert('победили крестики'); winx++;}
        // if (allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML == 'X'){ alert('победили крестики'); winx++;}
        // if (allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X'){ alert('победили крестики'); winx++;}
        // if (allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X'){ alert('победили крестики'); winx++;}
        // document.getElementById('xwin').innerHTML = winx;

    //  let b = document.getElementById('btn');
    // b.onclick = function(){
    //     if (b.innerHTML == "привет"){
    //         b.innerHTML = "меню сайта"
    //     }
    //   else {b.innerHTML = "привет"}
    // }

//  function question() { let value = prompt("„Какое «официальное» название JavaScript?“",'');
//  (value == 'ECMAScript') ? alert("Верно!") :
//  alert("Не знаете? ECMAScript!")}
//  question();


// let username
// let password
//  function PassEnter() {
//     while (password != "дерпароль"){
//         password = prompt("Введите пароль",'');
//        (password == "дерпароль") ? alert("привет начальника") :
//        (password == '') ? alert("Вы ничего не ввели") :
//        (password == null) ? alert("отмена не сработает...ДЕБИЛ") :
//        alert("не верный пароль!!")
//     }
//  }
// while (username != 'admin'){
//     username = prompt("Привет! Введите логин", '');
//    (username == 'admin') ? PassEnter() :
//    (username == '') ? alert("Вы ничего не ввели"):
//    (username == null) ? alert("отмена не сработает...ДЕБИЛ") :
//     alert("не верный логин!!")
//  }





//  if (username == 'admin'){
//     let password = prompt("пароль?",'');
//     if (password == "дерпароль"){
//         alert("привет админ")
//     }
//     else if (password == '' || password == null){
//         alert("не верное значение пароля");
//         prompt("пароль?",'');
//     }
//     else{ alert("пароль не верен");
//           prompt("пароль?",'');

//         }
//  }
//  else if (username == '' || username == null){
//     alert("не верное значение логина", '');
//         username = "привет";
//     }
//  else {
//      alert("не верно");
//      prompt("привет", '');
// }

// var m = document.getElementById('mouse')
// var a = document.getElementsByClassName("first__li");

//     onmousewheel = function(){
//         if (m.style.display == "none"){
//             m.style.display = "inherit";}
//         else {m.style.display = "none" }


    //}

    // for (var i = 0; i < a.length; i++)
    //      a[i].onclick = function(){alert(b.textContent)}
    // for (var d = 0; d < b.length; d++)
    //      b[d].onclick = function() {
    //     alert("mmmmm");
    // }

