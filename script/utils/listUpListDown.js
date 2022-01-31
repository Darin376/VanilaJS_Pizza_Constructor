export const redrawListUp = (obj) => {
    
    for (const key in obj) {
        const value = obj[key];
        const { selectedIndexArr, arr } = value;
        const ul = document.querySelector(`#list-output [data-key-list=${key}]`);
        //очищаем ul
        ul.innerHTML = '';
        selectedIndexArr.forEach((indexInArr) => {
            const text = arr[indexInArr];
            const li = document.createElement('li');
            li.setAttribute('data-index',indexInArr);
            li.innerHTML = text.name;
            ul.append(li);
        });
    };
};

export const redrawListDown = (obj) => {
    for (const key in obj) {
        const value = obj[key];
        const { selectedIndexArr, arr } = value;
        const ul = document.querySelector(`#list [data-key-list=${key}]`);
        const listLi = ul.querySelectorAll('li');
        const listHoversLi = ul.querySelectorAll('li.hover');
        listHoversLi.forEach((li) => {
            li.classList.remove('hover');
 
        });
        selectedIndexArr.forEach((indexInArr) => {
            listLi[indexInArr].classList.add('hover');
        });
    };
};
export const redrawDom = (obj) => {
    redrawListUp(obj);
    redrawListDown(obj);
};