let screenWidth = window.innerWidth;
let nav = document.querySelector('#headerNav');

const burgerMenu = document.createElement('div');
burgerMenu.className = 'burger-menu';

const bar1 = document.createElement('div');
bar1.className = 'bar';
const bar2 = document.createElement('div');
bar2.className = 'bar';
const bar3 = document.createElement('div');
bar3.className = 'bar';

burgerMenu.appendChild(bar1);
burgerMenu.appendChild(bar2);
burgerMenu.appendChild(bar3);

window.addEventListener('resize', function() {
    screenWidth = window.innerWidth;
    if (screenWidth < 480) {
        if (!document.querySelector('.burger-menu')) {
            nav.style.display = 'none';
            nav.parentNode.insertBefore(burgerMenu, nav);
        }
    } else {
        if (document.querySelector('.burger-menu')) {
            burgerMenu.parentNode.removeChild(burgerMenu);
            nav.style.display = 'flex';
        }
    }
});

burgerMenu.addEventListener('click', function(){
    nav.style.display = nav.style.display == 'flex' ? 'none' : 'flex';
})