let heart_count = 0;
document.querySelectorAll(".add_hearts").forEach(function(heart){
    heart.addEventListener("click", function(e){
        e.preventDefault();
        heart_count++;
        heart_counter.innerText = heart_count;
    });
});


let coins = 100;
document.querySelectorAll(".coin_deduct").forEach(function(coin){
    coin.addEventListener("click", function(e){
        e.preventDefault();
        const service_name = coin.getAttribute("data-name");
        const service_number = coin.getAttribute("data-number");
        if (coins>=20) {
            coins -= 20;
            document.getElementById("coin_counter").innerText = coins;
            alert(`Calling ${service_name} ${service_number}`);
        } 
        else{
            alert("You do not have enough coins! Each call costs 20 coins!");
        }
    });
});


let copy_count = 0;
document.querySelectorAll(".add_copy").forEach(function(copy){
    copy.addEventListener("click", function(e){
        e.preventDefault();
        const service_number_copy = copy.getAttribute("data-number");
        copy_count++;
        copy_counter.innerText = copy_count;
        alert(`Copied number ${service_number_copy}`);
    });
});

