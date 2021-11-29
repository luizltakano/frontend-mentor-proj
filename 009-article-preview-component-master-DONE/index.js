let elems = document.querySelectorAll("[data-active]");


for(let i = 0; i < elems.length; i++){
        elems[i].addEventListener("click", function(e) {

                e.preventDefault();

                this.classList.toggle("is-active");
                // console.log(this.classList);

                let linkedElement = document.querySelectorAll("." + this.getAttribute("data-active"));

                // console.log(linkedElement);

                // for(let i = 0; i < linkedElement.length; i++){
                //         linkedElement[i].classList.toggle("is-active");
                //         console.log(linkedElement[i].classList);
                // };
        });
}