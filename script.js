window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${(e.key).toUpperCase()}`;
    let path="./AudioSound/"+`${e.key}.wav`
    playSound(path);
    highFun((e.key).toUpperCase())
}, false);

function playSound(sound){
var audio = new Audio(sound);
audio.play();
}

function highFun(alpa){  
    let target=document.getElementById(alpa)
    setClass(target)
    setTimeout(() => { 
        removeClass(target)
    }, 2000);
}

function setClass(target) {      
    target.classList.add('animate-pulse'); 
}

function removeClass(target) {   
    target.classList.remove('animate-pulse'); 
}

