//Business Logic

function Ticket(buyerAge, movie, time, over18, firstRun) {
  this.buyerAge = buyerAge;
  this.movie = movie;
  this.time = time;
  this.over18 = over18;
  this.firstRun = firstRun;
}

Ticket.prototype.validSale = function() {
  if (this.over18 === false) {
    return true;
  } else if (this.over18 === true && this.buyerAge >= 18) {
    return true;
  } else {
    return false;
  }
}

Ticket.prototype.ticketPrice = function() {
  if (this.time < 1700 || this.buyerAge > 55 || this.firstRun === false ) {
    return "$" + 7.50;
  } else {
    return "$" + 15.00;
  }
}

//User Interface Logic

$(document).ready(function() {
  $("#new-ticket").submit(function(event) {
    event.preventDefault();

    var movieBuyerAge = $("#age").val();
    var movieName = $("input:radio[name=movies]:checked").val();
    var movieTime = $("input:radio[name=times]:checked").val();;
    var movieOver18 = true;
    var movieFirstRun = false;

    var userTicket = new Ticket(movieBuyerAge, movieName, movieTime, movieOver18, movieFirstRun);


    if (userTicket.validSale() === true ) {
      alert(userTicket.ticketPrice());
    } else {
      alert("I'm Sorry, This Sale is Not Valid");
    }

  }); // End Form Function
}); // End Document Ready Function
