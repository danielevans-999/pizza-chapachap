function Order(type, crust, price, toppings) {
    this.type = type;
    this.crust = crust;
    this.price = price;
    this.toppings = toppings;
  }
  var selectedToppings = {
    name: "toppings",
    selected: []
  }
  
  const myPrices = {
    large: 800,
    medium: 600,
    small: 300
  }
  
  var pizzaFlavour = ["Chicken"]
  
  var myPrice = [];
  
 
    $("#explore").click(function() {
        $("body, html").animate({
          scrollTop: $("#menu").offset().top
        }, 1000)
      })

    //   $(".shopping-cart").hide()
      var pizzaAmount = 0;
      $(".items-added small").text(pizzaAmount)

      $(".cart .close").click(function() {
        $(".cart").fadeOut(500);
        $(".shopping-cart").show(500)
      })

      $(".shopping-cart").click(function() {
        $(".cart").fadeIn(500);
    
        $(".shopping-cart").hide()
        var lastPrice = 0;
    
       
        for (i = 0; i < finalPrice.length; i++) {
          lastPrice += finalPrice[i]
    
        }
        $("#price").text(lastPrice)
        // console.log("Total " + lastPrice)
      })
      $("#first").click(function() {
        $(".chicken").slideToggle();
         $('html, body').animate({
          scrollTop: $(".chicken").offset().top
        }, 1000);
    
       })
   


      $(".chicken .kuku").submit(function(){
         event.preventDefault();
         if ($("#quantity").val() == "") {
            alert("How many pizzas do you want please");
         }
     

         else{
      var pizza = pizzaFlavour[0];
      var cheeseTopping = $("#cheese");
      var peperoniTopping = $("#peperoni");
      var hamTopping = $("#ham")

      if (cheeseTopping.prop("checked") == true) {
        selectedToppings.selected.push(cheeseTopping.val())
      }
      if (peperoniTopping.prop("checked") == true) {
        selectedToppings.selected.push(peperoniTopping.val())
      }
      if (hamTopping.prop("checked") == true) {
        selectedToppings .selected.push(hamTopping.val())
      }
      var crust = $("input[name=crust]:checked").val();
      var quantity = parseInt($("#quantity").val());
      pizzaAmount += quantity;

      $(".items-added small").text(pizzaAmount)
     
      var summary = "";
     
      var price = (myPrices.large) * quantity + (selectedToppings.selected.length * 120);
      alert("oya")
      var order1 = new Order(pizza, crust, price, selectedToppings)
      
      if (order1.toppings.selected.length == 3) {
        var summary = "cheese, Peperoni, ham"
      } else if (order1.toppings.selected.length == 2) {
        var summary = " " + order1.toppings.selected[0] + "," + order1.toppings.selected[1];
      } else if (order1.toppings.selected == 1) {
        var summary = order1.toppings.selected[0]
      } else {
        var summary= "";
      }

      $(".cart1").append(
        "<tr>" +
        "<th scope='row'>1</th>" +
        "<td>" + order1.type + "</td>" +
        "<td>" + order1.crust + "</td>" +
        "<td>" + summary + "</td>" +
        "<td> Large </td>" +
        "<td>" + order1.price + "</td>" +
        "</tr>"
      )

      myPrice.push(price);

      $(".btn-l").delay(500).addClass("btn-success").text("Added + ✔️ ");
      $(".shopping-cart").show(500)
      } 
      
    })

    $("#delivery").click(function() {
        var location = prompt("Enter your Location");
        if (location == "") {
          $("#delivery").hide()
        } else {
          alert("Thank you. Pizzas will be delivered to " + location + " delivery Is Free")
          $("#delivery").hide()
        }
    
      })
      $("#checkout").click(function() {
        alert("Thank you")
        location.reload();
      })
// --------------------end---------------
   
      
      

      

