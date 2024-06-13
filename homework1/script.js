let textHeading = document.querySelector('#textHeading');
let textFooter = document.querySelector('#textFooter')
let containerMain = document.querySelector('#containerMain');
let border = document.querySelector('#border');
let image = document.querySelector('#image');
let main = document.querySelector('#main')
let header = document.querySelector('.header')

function windowsScroll(){
    if(window.scrollY <= 100){
        textHeading.style.fontSize = 45 + 'px';
    }
    if(window.scrollY >= 100 && window.scrollY <= 200){
        textHeading.style.fontSize = 55 + 'px';
    }
    if(window.scrollY >= 200 && window.scrollY <= 300){
        textHeading.style.fontSize = 65 + 'px';
    }
    if(window.scrollY >= 300 && window.scrollY <= 400){
        textHeading.style.fontSize = 75 + 'px';
    }
    if(window.scrollY >= 400 && window.scrollY <= 500){
        textHeading.style.fontSize = 78 + 'px';
        containerMain.style.transform = `translateX(100px)`
        border.style.width = 270 + 'px'

    }
    if(window.scrollY >= 500 && window.scrollY <= 600){
        textHeading.style.fontSize = 78 + 'px';
        containerMain.style.transform = `translateX(120px)`
        border.style.width = 290 + 'px'
    }
    if(window.scrollY >= 600 && window.scrollY <= 700){
        textHeading.style.fontSize = 78 + 'px';
        containerMain.style.transform = `translateX(140px)`
        border.style.width = 310 + 'px'

    }
    if(window.scrollY >= 700 && window.scrollY <= 800){
        textHeading.style.fontSize = 78 + 'px';
        containerMain.style.transform = `translateX(140px)`
        border.style.width = 330 + 'px'

    }
    if(window.scrollY >= 800 && window.scrollY <= 900){
        textHeading.style.fontSize = 78 + 'px';
        containerMain.style.transform = `translateX(160px)`
        border.style.width = 350 + 'px'
        image.style.transform = `translateX(-100px)`

    }
    if(window.scrollY >= 900 && window.scrollY <= 1000){
        textHeading.style.fontSize = 78 + 'px';
        containerMain.style.transform = `translateX(180px)`
        border.style.width = 380 + 'px'
        image.style.transform = `translateX(-150px)`
    }
    if(window.scrollY >= 1000 && window.scrollY <= 1100){
        textHeading.style.fontSize = 78 + 'px';
        containerMain.style.transform = `translateX(180px)`
        border.style.width = 420 + 'px'
        image.style.transform = `translateX(-180px)`
    }
    if(window.scrollY >= 1380 && window.scrollY <= 1500){
        textFooter.style.fontSize = 80 + 'px';
    }
    if(window.scrollY >= 1500 && window.scrollY <= 1600){
        textFooter.style.fontSize = 76 + 'px';
    }
    if(window.scrollY >= 1600 && window.scrollY <= 1700){
        textFooter.style.fontSize = 72 + 'px';
    }
    if(window.scrollY >= 1700 && window.scrollY <= 1800){
        textFooter.style.fontSize = 68 + 'px';
    }
}

function clickDown(){
    main.scrollIntoView({behavior: 'smooth'});
}


function clickUp(){
    header.scrollIntoView({behavior: 'smooth'});
}

window.addEventListener('scroll' , windowsScroll);
textHeading.addEventListener('click', clickDown);
textFooter.addEventListener('click', clickUp);



// console.log(textHeading)