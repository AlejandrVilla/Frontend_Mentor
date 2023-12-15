const minusPlusIcon1 = document.querySelector('.question_1');
const minusPlusIcon2 = document.querySelector('.question_2');
const minusPlusIcon3 = document.querySelector('.question_3');
const minusPlusIcon4 = document.querySelector('.question_4');

const answerParagraph1 = document.querySelector('.answer_1');
const answerParagraph2 = document.querySelector('.answer_2');
const answerParagraph3 = document.querySelector('.answer_3');
const answerParagraph4 = document.querySelector('.answer_4');

minusPlusIcon1.addEventListener('click', toggleAnswer1);
minusPlusIcon2.addEventListener('click', toggleAnswer2);
minusPlusIcon3.addEventListener('click', toggleAnswer3);
minusPlusIcon4.addEventListener('click', toggleAnswer4);

function changeIcon(nodo, paragraph){
    const oldIcon = nodo.querySelector('.icon');
    nodo.removeChild(oldIcon);

    const newIcon = document.createElement('img');
    newIcon.classList.add('icon');
    const isPlusIcon = paragraph.classList.contains('inactive');
    if(isPlusIcon)
        newIcon.setAttribute('src', './assets/images/icon-minus.svg');
    else
        newIcon.setAttribute('src', './assets/images/icon-plus.svg');
    nodo.appendChild(newIcon);
}

function changeIcon2(nodo, paragraph){
    
    const isMinusIcon = !paragraph.classList.contains('inactive');
    if(isMinusIcon)
    {
        const oldIcon = nodo.querySelector('.icon');
        nodo.removeChild(oldIcon);
        const newIcon = document.createElement('img');
        newIcon.classList.add('icon');
        newIcon.setAttribute('src', './assets/images/icon-plus.svg');
        nodo.appendChild(newIcon);
    }
}

function toggleAnswer1(){
    changeIcon(minusPlusIcon1, answerParagraph1);
    answerParagraph1.classList.toggle('inactive');

    changeIcon2(minusPlusIcon2, answerParagraph2);
    answerParagraph2.classList.add('inactive');
    changeIcon2(minusPlusIcon3, answerParagraph3);
    answerParagraph3.classList.add('inactive');
    changeIcon2(minusPlusIcon4, answerParagraph4);
    answerParagraph4.classList.add('inactive');
}

function toggleAnswer2(){
    changeIcon(minusPlusIcon2, answerParagraph2);
    answerParagraph2.classList.toggle('inactive');
    
    changeIcon2(minusPlusIcon1, answerParagraph1);
    answerParagraph1.classList.add('inactive');
    changeIcon2(minusPlusIcon3, answerParagraph3);
    answerParagraph3.classList.add('inactive');
    changeIcon2(minusPlusIcon4, answerParagraph4);
    answerParagraph4.classList.add('inactive');
}

function toggleAnswer3(){
    changeIcon(minusPlusIcon3, answerParagraph3);
    answerParagraph3.classList.toggle('inactive');

    changeIcon2(minusPlusIcon1, answerParagraph1);
    answerParagraph1.classList.add('inactive');
    changeIcon2(minusPlusIcon2, answerParagraph2);
    answerParagraph2.classList.add('inactive');
    changeIcon2(minusPlusIcon4, answerParagraph4);
    answerParagraph4.classList.add('inactive');
}

function toggleAnswer4(){
    changeIcon(minusPlusIcon4, answerParagraph4);
    answerParagraph4.classList.toggle('inactive');
    
    changeIcon2(minusPlusIcon1, answerParagraph1);
    answerParagraph1.classList.add('inactive');
    changeIcon2(minusPlusIcon2, answerParagraph2);
    answerParagraph2.classList.add('inactive');
    changeIcon2(minusPlusIcon3, answerParagraph3);
    answerParagraph3.classList.add('inactive');
}