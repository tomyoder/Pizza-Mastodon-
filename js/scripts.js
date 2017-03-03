//BACKEND
 function pizza(size,[topping]){
   this.pizzaSize = size;
   this.pizzaTopping = topping;
   this.pizzaCost = 7;
 }

 pizza.prototype.price = function(size) {
   if (size === "large") {
     return this.pizzaCost * 2;
        console.log(size);
   }
     else if (size === "medium") {
       return this.pizzaCost * 1.5;
     }
       else if (size === "small") {
         return this.pizzaCost * 1;
       }
  meat.foreach(function(meat) {
    return this.pizzaCost + 2;
  })
  vegetable.foreach(function(vegetable) {
    return this.pizzaCost + 2;
  })
  accent.foreach(function(accent){
    return this.pizzaCost + 2;
  })

 };

//FRONTEND
 $(document).ready(function(){

   $("#form1").submit(function(event){
     event.preventDefault();
     var size = $("input:radio[name=size]:checked").val();
     console.log(size);

     $("input:checkbox[name=meat]:checked").each(function(){
       var meat = $(this).val();
     });

     $("input:checkbox[name=vegetable]:checked").each(function(){
       var vegetable = $(this).val();

     });

     $("input:checkbox[name=accent]:checked").each(function(){
       var accent = $(this).val();

     });

   })
 });
