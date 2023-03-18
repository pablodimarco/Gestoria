const desplazamiento = document.querySelector("#desplazamiento");

function frames() {

    const anim = desplazamiento.animate([
        { transform: "TranslateY(0px)" },
        { transform: `TranslateY(${screen.width > 475 ? -16 : -16}vw)`},
    ], {
        easing: "linear",
        iterations: 1,
        duration: 800,
    });

    return anim.finished;
}

function displace() {

    frames().then(() => {
        desplazamiento.appendChild(document.querySelectorAll("#desplazamiento > li")[0]);
    })
}


setInterval(() => {
    displace();
}, 5000);
