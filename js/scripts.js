//BACKEND
 function Pizza (size, [topping]){
   this.pizzaSize = size;
   this.pizzaTopping = topping;
   this.pizzaCost = 7;
 }



 Pizza.prototype.cost = function(inputSize) {
   if (inputSize === "large") {
     return this.pizzaCost * 2;
     console.log(inputSize);
   }
     else if (inputSize === "medium") {
       return this.cost * 1.5;
     }
       else if (inputSize === "small") {
         return this.cost * 1;
       }

 };

//FRONTEND
 $(document).ready(function(){
   $("#form1").submit(function(event){
     event.preventDefault();
     var inputSize = $("input:radio[name=size]:checked").val();
     console.log(inputSize);

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
