const rating1 = document.querySelector('.primero');
const rating2 = document.querySelector('.segundo');
const rating3 = document.querySelector('.tercero');
const rating4 = document.querySelector('.cuarto');
const rating5 = document.querySelector('.quinto');

const button = document.querySelector('.submit_button');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');

rating1.addEventListener('click', changeColor1);
rating2.addEventListener('click', changeColor2);
rating3.addEventListener('click', changeColor3);
rating4.addEventListener('click', changeColor4);
rating5.addEventListener('click', changeColor5);

button.addEventListener('click', changePage);

const selectedRating = document.getElementById('selectedRating');
let value=0;

function changeColor1(){
    const isSelected = rating1.classList.contains('secondary');
    if(isSelected)
    {
        rating1.classList.remove('secondary');
        rating1.classList.add('primary');
    }
    else
    {
        rating1.classList.remove('primary');
        rating1.classList.add('secondary');
        value=1;

        rating2.classList.remove('secondary');
        rating2.classList.add('primary');
        rating3.classList.remove('secondary');
        rating3.classList.add('primary');
        rating4.classList.remove('secondary');
        rating4.classList.add('primary');
        rating5.classList.remove('secondary');
        rating5.classList.add('primary');
    }
}

function changeColor2(){
    const isSelected = rating2.classList.contains('secondary');
    if(isSelected)
    {
        rating2.classList.remove('secondary');
        rating2.classList.add('primary');
    }
    else
    {
        rating2.classList.remove('primary');
        rating2.classList.add('secondary');
        value=2;

        rating1.classList.remove('secondary');
        rating1.classList.add('primary');
        rating3.classList.remove('secondary');
        rating3.classList.add('primary');
        rating4.classList.remove('secondary');
        rating4.classList.add('primary');
        rating5.classList.remove('secondary');
        rating5.classList.add('primary');
    }
}

function changeColor3(){
    const isSelected = rating3.classList.contains('secondary');
    if(isSelected)
    {
        rating3.classList.remove('secondary');
        rating3.classList.add('primary');
    }
    else
    {
        rating3.classList.remove('primary');
        rating3.classList.add('secondary');
        value=3;

        rating1.classList.remove('secondary');
        rating1.classList.add('primary');
        rating2.classList.remove('secondary');
        rating2.classList.add('primary');
        rating4.classList.remove('secondary');
        rating4.classList.add('primary');
        rating5.classList.remove('secondary');
        rating5.classList.add('primary');
    }
}

function changeColor4(){
    const isSelected = rating4.classList.contains('secondary');
    if(isSelected)
    {
        rating4.classList.remove('secondary');
        rating4.classList.add('primary');
    }
    else
    {
        rating4.classList.remove('primary');
        rating4.classList.add('secondary');
        value=4;

        rating1.classList.remove('secondary');
        rating1.classList.add('primary');
        rating2.classList.remove('secondary');
        rating2.classList.add('primary');
        rating3.classList.remove('secondary');
        rating3.classList.add('primary');
        rating5.classList.remove('secondary');
        rating5.classList.add('primary');
    }
}

function changeColor5(){
    const isSelected = rating5.classList.contains('secondary');
    if(isSelected)
    {
        rating5.classList.remove('secondary');
        rating5.classList.add('primary');
    }
    else
    {
        rating5.classList.remove('primary');
        rating5.classList.add('secondary');
        value=5

        rating1.classList.remove('secondary');
        rating1.classList.add('primary');
        rating2.classList.remove('secondary');
        rating2.classList.add('primary');
        rating3.classList.remove('secondary');
        rating3.classList.add('primary');
        rating4.classList.remove('secondary');
        rating4.classList.add('primary');
    }
}

function changePage(){
    container2.removeAttribute('id', 'inactive');
    container1.setAttribute('id', 'inactive');
    selectedRating.textContent=value;
}