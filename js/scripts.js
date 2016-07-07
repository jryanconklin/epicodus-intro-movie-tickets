//Business Logic

function Movie(name) {
  this.name = name;
}

function Ticket(movie, price) {
  this.movie = movie;
  this.price = "$" + 14;
}

Ticket.prototype.ticketPrice = function() {
  console.log(this.movie + " is " + this.price);
}

//User Interface Logic

$(document).ready(function() {
  $("#new-ticket").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("input:radio[name=movie]:checked").val();

    var newTicket = new Ticket(inputtedMovie)

    // alert(inputtedMovie);

    newTicket.ticketPrice();

  }); // End Form Function
}); // End Document Ready Function
