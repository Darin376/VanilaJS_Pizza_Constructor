const ul1 = document.querySelector('.ul1');
const ul2 = document.querySelector('.ul2');
const ul3 = document.querySelector('.ul3');
const ul4 = document.querySelector('.ul4');
export const pizza = document.querySelector('.pizza-img');

export const funkImg = () => {
    const acc = check(ul1) + check(ul2) + check(ul3) + check(ul4);
    if (acc === 1) {
        pizza.style.backgroundImage = "url('/img/1.png')";
    } else if (acc === 2) {
        pizza.style.backgroundImage = "url('/img/2.png')";
    } else if (acc === 3) {
        pizza.style.backgroundImage = "url('/img/3.png')";
    } else if (acc === 4) {
        pizza.style.backgroundImage = "url('/img/4.png')";
    } else if (acc < 1) {
        pizza.style.backgroundImage = 'url()';
    };
};
const check = (ul) => ul.children.length >= 1 ? 1 : 0;
 