let signupbtn= document.querySelector('.signupbtn');
let signinbtn= document.querySelector('.signinbtn');
let namefiled= document.querySelector('.namefield');
let title= document.querySelector('.title');
let underline= document.querySelector('.underline');
let text= document.querySelector('.text');

signinbtn.addEventListener('click',()=>{namefiled.style.maxHeight= '0';
    title.innerHTML= 'Sign in';
    text.innerHTML= 'forgot passoward';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    underline.style.transform= 'translateX(35px)'

});
signupbtn.addEventListener('click',()=>{namefiled.style.maxHeight= '60px';
    title.innerHTML= 'Sign up';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    underline.style.transform= 'translateX(35px)'

});