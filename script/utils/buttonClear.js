import { pizza } from './orderCounter.js';
import { totalAmount } from '../script.js';
import { obj1, obj2, obj3, obj4 } from './objectPizza.js';

const removeObj = (obj) => {
    for (const key in obj) {
        obj[key].selectedIndexArr = [];
    };
};

export function btn() {
    let massElem = [];
    const SpisokElem = document.querySelectorAll('.hover');
    const nodesArray = Array.from(SpisokElem);
    nodesArray.map(item => {
        massElem.push(item.textContent);
        return massElem;
    });
    if (pizza.style.backgroundImage == 'url("/img/4.png")') {
        console.log(` Элементы принятого заказа : ${massElem.join(', ')}.  На сумму ${totalAmount.textContent}.`)
        alert(`Ваш заказ на сумму ${totalAmount.textContent} выполнен!`);
        massElem = [];
        newOrder()     
    } else {
        alert('Собери целую пиццу для выполнения заказа!')
        massElem = [];
    };
};

function newOrder() {
    const allLi = document.querySelectorAll('li');
    const massAllLi= Array.from(allLi);
    const matches = document.querySelectorAll("ul.lik > li");
    massAllLi.forEach(item => {
        return item.classList.remove('hover');
    });
    matches.forEach(item => {
        item.classList.remove('hover');
        return item.remove();
    });
    pizza.style.backgroundImage = 'url()';
    totalAmount.innerHTML = `0 p`;
    removeObj(obj1);
    removeObj(obj2);
    removeObj(obj3);
    removeObj(obj4);
};