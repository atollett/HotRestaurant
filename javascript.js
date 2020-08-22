$("#add-btn").on("click", function (event) {
    event.preventDefault();
    var newReservation = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#phone").val().trim(),
        id: $("#idNum").val().trim()
    };
console.log(newReservation);

    $.post("/api/tables", newReservation)
        .then(function (data) {
            // console.log("make.html", data);
            console.log("Reservation saved!")
            alert("You're on the list!");
        });
});

//AJAX Call for tables.html
