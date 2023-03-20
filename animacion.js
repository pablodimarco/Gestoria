const desplazamiento = document.querySelector("#desplazamiento");

function frames() {

    const anim = desplazamiento.animate([
        { transform: "TranslateY(0px)" },
        { transform: `TranslateY(${screen.width > 1100 ? -5 : screen.width > 900 ? -13 : screen.width > 475 ? -15 : -18}vw)`},
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
