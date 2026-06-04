let navContainer = document.getElementById("navContainer");
let hamburgerContainer = document.getElementById("hamburgerContainer");

hamburgerContainer.addEventListener("click", () => {
    if(navContainer.style.display != "flex"){
        navContainer.style.display = "flex";
        hamburgerContainer.style.display = "none";
    } else{
        navContainer.style.display = "none";
    }
});

navContainer.addEventListener("click", (e) => {
    if(e.target.classList.value === "navlink"){
        navContainer.style.display = "none";
        hamburgerContainer.style.display = "block";
    }
});