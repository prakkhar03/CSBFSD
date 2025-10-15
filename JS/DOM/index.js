// const div=document.getElementsByTagName('div');

// div[0].innerText="ABES Engineering College";
// div[0].style.color='brown';
// div[0].style.backgroundColor='cyan';

const div=document.getElementsByClassName('container');

div[0].innerHTML=`<h2>ABES Engineering College</h2>`;
div[0].style.color='black';
div[0].style.backgroundColor='white';

const h2=document.createElement('h2');
h2.innerText="This is created using JS";
h2.style.color='blue';
h2.style.backgroundColor='white';

div[0].appendChild(h2);

//image

const img=document.createElement('img');
img.src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=";
img.classList.add('custom-img');
div[0].appendChild(img);

function changeBg(){
    div[0].style.backgroundColor='lightgreen';
}
if (button) {
    button.addEventListener('click', changeBg);
}
const button1=document.getElementById('btn1');
function displayData(){
    loading.innerHTML=`<h3>Loading...</h3>`;
    const h3=document.createElement('h3');
}

// console.log("Hello World");
// const div=document.getElementsByTagName('div');

// div[0].innerText="ABES Engineering College";
// div[0].style.color='brown';
// div[0].style.backgroundColor='cyan';



const button=document.getElementById('btn');
console.log(button);
const loading=document.getElementById('disp');
function displayData() {
    loading.innerHTML='<h2>Data ios loading...</h2>'

    //console.log("Hiii... inside displayData function");
    setTimeout(()=>{
        const img=document.createElement('img');
        const h2=document.createElement('h2');
h2.innerText="Legendary AP";
h2.style.backgroundColor='cadetblue';
console.log(h2);
div[0].appendChild(h2);


img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xuefiBGUB-epGJf50kyzrnCBPTN9slFNaw&s';
img.setAttribute('height',200);
img.setAttribute('width',200);
console.log(img);
div[0].appendChild(img);


    },2000);
    const div=document.getElementsByClassName('container');
console.dir(div);
div[0].innerHTML=`<h2 style=color:purple> Hii, I am using DOM</h2>`;
div[0].style.backgroundColor='Yellow';

    loading.innerHTML='';
}
button.addEventListener('click',displayData);