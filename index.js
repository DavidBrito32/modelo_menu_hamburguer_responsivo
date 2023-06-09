//botão

const btnMobile = document.querySelector('#btn-menu');

const toggleMenu = (event) => {
    if(event.type === 'touchstart') {
        event.preventDefault(); //evita comportamento padrão (para nao abrir e fechar)
    }

    const nav = document.querySelector('nav');//informa quem eu quero atingir no html

    nav.classList.toggle('active'); // o toggle basicamente adiciona se nao existe, e se existe ele remove
}


btnMobile.addEventListener('click', toggleMenu);//fica monitorando um evento acontecer, no caso o click
btnMobile.addEventListener('touchstart', toggleMenu);//fica monitorando um evento acontecer, no caso o touch do celular, em caso mobile