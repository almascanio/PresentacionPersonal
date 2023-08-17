const menuListas = document.querySelectorAll(".menu-li");
const menuButton = document.querySelector("#menu-button");
const slider = document.querySelector('.slider');

menuListas.forEach(function(lista){
    lista.addEventListener("click", function(e){
        const activeLista = document.querySelector(".active");
        activeLista.classList.remove("active");
        e.target.classList.add("active");
    })
});

menuButton.addEventListener("click", function(){
    document.body.classList.toggle("menu-mobile")
});

window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    setTimeout(() => {
        loading.style.display = 'none';
        content.classList.remove('hidden');
    }, 800);
});
