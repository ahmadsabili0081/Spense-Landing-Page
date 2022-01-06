const btnScroll = document.querySelector('.BtnScroll');
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('header__Sticky', scrollY > 30);
    btnScroll.classList.toggle('btnScroll', scrollY > 0);
});
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('navShow');
});

const btn = document.getElementsByClassName('btn__header__spense');
for(let i = 0; i < btn.length; i++ ){
    btn[i].addEventListener('click', BtnClick);
}
function BtnClick (){
    window.alert("Maaf, File Ini masih belum tersedia");
}
