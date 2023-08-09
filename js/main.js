const menuListas = document.querySelectorAll(".menu-li");
const menuButton = document.querySelector("#menu-button")

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

