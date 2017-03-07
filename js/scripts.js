//BACKEND
 function pizza(size, meat, veg, accent){
   this.pizzaSize = size;
   this.meatChoice = meat;
   this.vegChoice = veg;
   this.accentChoice = accent;
   this.pizzaCost = 7;
 }

 pizza.prototype.price = function(size) {
   if (this.pizzaSize === "large") {
     return this.pizzaCost * 2
        console.log(this.pizzaSize);
   }
    else if (size === "medium") {
       return this.pizzaCost * 1.5;
     }
       else if (size === "small") {
         return this.pizzaCost * 1;
       }

  for (i=0; i<meatChoice.length; i++) {
         this.pizzaCost + 2;
  })
  for (i=0; i<vegChoice.length; i++) {
         this.pizzaCost + 2;
  })
  for (i=0; i<accentChoice.length; i++){
         this.pizzaCost + 2;
  })
  return this.pizzaCost;

 };

//FRONTEND
 $(document).ready(function(){

   $("#form1").submit(function(event){
     event.preventDefault();
     var size = $("input:radio[name=size]:checked").val();
     console.log(size);

     $("input:checkbox[name=meat]:checked").each(function(){
       var meat = $(this).val();
       meatchoice.push(meat);
     });

     $("input:checkbox[name=vegetable]:checked").each(function(){
       var vegetable = $(this).val();
       vegchoice.push(veg);

     });

     $("input:checkbox[name=accent]:checked").each(function(){
       var accent = $(this).val();
       accentchoice.push(accent)

     });
     var pizzaChoice = new Pizza(size, meatChoice, vegChoice, accentChoice);
     var pizzaPrice = user.pizza.price;
     //$("#price").text("Your Pizza will be " + priceResult + " dollars");

   })
 });
