let el = document.querySelector('.menu-icon');

el.addEventListener('click',()=>{
let menuItens = document.querySelector('.menu-itens');

if(menuItens.classList.contains('show')){
    menuItens.classList.add('hide');
    menuItens.classList.remove('show');
}else{
    menuItens.classList.add('show');
    menuItens.classList.remove('hide');
}
});