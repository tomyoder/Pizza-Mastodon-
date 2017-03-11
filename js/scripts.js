//BACKEND
function Pizza(size, meat, veg, accent) {
  this.pizzaSize = size;
  this.meatChoice = meat;
  this.vegChoice = veg;
  this.accentChoice = accent;
  this.pizzaCost = 7;
}

Pizza.prototype.price = function() {

  if (this.pizzaSize === "large") {
    return this.pizzaCost *= 2;
  }

    else if (this.pizzaSize === "medium") {
      return this.pizzaCost *= 1.5;
    }
      else if (this.pizzaSize === "small") {
        return this.pizzaCost *= 1;
      }

  for (i=0; i<this.meatChoice.length; i++) {
          this.pizzaCost += 2;
  }
  for (i=0; i<vegChoice.length; i++) {
          this.pizzaCost += 2;
  }
  for (i=0; i<accentChoice.length; i++) {
          this.pizzaCost += 2;
  }
  return this.pizzaCost;
}

//FRONTEND
 $(document).ready(function(){
   $("#form1").submit(function(event){
     event.preventDefault();

     var size = $("input:radio[name=size]:checked").val();


     var meat = [];
     $("input:checkbox[name=meat]:checked").each(function(){
       var inputMeat = $(this).val();
       meat.push(inputMeat);
     });

     var veg = [];
     $("input:checkbox[name=veg]:checked").each(function(){
       var inputVeg = $(this).val();
       veg.push(inputVeg)
     });

     var accent = [];
     $("input:checkbox[name=accent]:checked").each(function(){
       var inputAccent = $(this).val();
       accent.push(inputAccent);
     });

     var newPizza = new Pizza(size, meat, veg, accent);

     $("#price").text("Pizza Mastodon says Thank You! Your Pizza will be $ " + this.pizzaCost);

   });
 });
