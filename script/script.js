import { btn } from './utils/buttonClear.js';
import { redrawDom } from './utils/listUpListDown.js';
import { funkImg } from './utils/orderCounter.js';
import { obj1, obj2, obj3, obj4 } from './utils/objectPizza.js';

export const totalAmount = document.querySelector('.summa');

const btnOrder = document.querySelector('.btnOrder');
btnOrder.addEventListener('click', btn);

const redrawLis = (obj) => {
    for (const key in obj) {
        const value = obj[key];
        const list = document.querySelector(`#list [data-key-list=${key}]`);
        const listUp = document.querySelector(`#list-output [data-key-list=${key}]`);
        // распечатка li
        value.arr.forEach((name, index) => {
            const li = document.createElement('li');
            li.setAttribute('data-index', index);
            li.innerHTML = name.name;
            list.append(li);
        });
        list.addEventListener('click', (event) => {
            const currentUl = event.currentTarget;
            const currentLi = event.target;
            if (currentLi.localName != 'li') return;
            const key = currentUl.getAttribute('data-key-list');
            const maxCount = value.maxCount;
            const indexElement = currentLi.getAttribute('data-index');
            const selectedIndexArr = obj[key].selectedIndexArr;
       
            const index = selectedIndexArr.findIndex((indexArr) => indexArr == indexElement);
            if (index === -1 && selectedIndexArr.length < maxCount) {
                selectedIndexArr.push(indexElement);
            }
            redrawDom(obj);
            funkImg();
            totalAmount.innerHTML =`${price()}p`
        });
        listUp.addEventListener('click', (event) => {
            const currentUl = event.currentTarget;
            const currentLi = event.target;
            if (currentLi.localName != 'li') return;

            const key = currentUl.getAttribute('data-key-list');
            const indexElement = currentLi.getAttribute('data-index');
            const selectedIndexArr = obj[key].selectedIndexArr;

            const index = selectedIndexArr.findIndex((indexArr) => indexArr == indexElement);
            
            if (index !== -1) {
                selectedIndexArr.splice(index, 1);
            }
            redrawDom(obj);
            funkImg();
            totalAmount.innerHTML =`${price()}p`
        });
    }
}
redrawLis(obj1);
redrawLis(obj2);
redrawLis(obj3);
redrawLis(obj4);

const price =  () => priceObj(obj1) + priceObj(obj2) + priceObj(obj3) + priceObj(obj4);

const priceObj = (obj) => {
    let finalPrice = 0;
    for (const key in obj) {
        const value = obj[key];
        const { selectedIndexArr, arr } = value;
            selectedIndexArr.reduce((acc,indexInArr) => {
                const text = arr[indexInArr];
                finalPrice = acc +Number(text.price);
                return finalPrice;
            }, 0);
    }
return finalPrice
}