(() => {
    const inputs = document.querySelectorAll('.hole');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", myFunction);
    }
    function myFunction() {
        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");
        if (dead.textContent <= 11 & lost.textContent <= 5) {
            if (this.className == "hole hole_has-mole") {
                dead.textContent++ + 1;
            } else {
                lost.textContent++ + 1;
            }
        } else if (dead.textContent >= 11) {
            alert('Вы выйграли');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent >= 5){
            alert('Вы приграли');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    })();