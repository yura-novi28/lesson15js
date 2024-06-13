let inputText = document.querySelector('.input-text');
let button = document.querySelector('.button');
let ipadContainer = document.querySelector('.ipad__container-list');
let inputCheck = document.querySelectorAll('.inputCheck');
let closeEle = document.querySelector('#close');
let create;
let inputCreate;
let labelCreate;
let mathRandom;
let count = 2;
function clickButton() {
    event.preventDefault();
    if (inputText.value != '') {
        create = document.createElement('div');
        ipadContainer.append(create);
        create.classList.add('ipad__block');
        inputCreate = document.createElement('input');
        inputCreate.setAttribute('id', `${count}`);
        inputCreate.setAttribute('type', `checkbox`);
        inputCreate.classList.add('inputCheck');
        create.append(inputCreate)
        labelCreate = document.createElement('label');
        labelCreate.setAttribute('for', `${count}`);
        labelCreate.innerHTML = `${inputText.value}`;
        create.append(labelCreate);
        inputText.value = '';
        inputCheck = document.querySelectorAll('.inputCheck')
        count++
    }
    else{
        document.querySelector('#alertNull').style.display = 'flex';
        document.querySelector('#textOne') .style.display = 'none';
        document.querySelector('#textNull') .style.display = 'block';
    }
}

function deleteTag() {
    if (event.target.className == 'inputCheck') {
        inputCheck = document.querySelectorAll('.inputCheck')
        if (inputCheck.length > 1) {
            event.target.parentElement.remove();
            event.target.nextElementSibling.remove();
            event.target.remove();
        }
        else{
            document.querySelector('#alertNull').style.display = 'flex';
            document.querySelector('#textNull') .style.display = 'none';
            document.querySelector('#textOne') .style.display = 'block';
        }
    }
}

function closeAlert(){
    document.querySelector('#alertNull').style.display = 'none';
}

ipadContainer.addEventListener('click', deleteTag);
button.addEventListener('click', clickButton);
closeEle.addEventListener('click', closeAlert);
// console.log(button)