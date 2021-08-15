document.getElementById('firstClass-increase').addEventListener('click',function(){
 add(true, 'firstClass' );
 
})

document.getElementById('firstClass-decrease').addEventListener('click',function(){
  
add(false, 'firstClass');
})


function add( adder,product ){
   
   const first= document.getElementById( product+'-input');
   const converts= parseInt(first.value);
   let main;
   if( adder=== true){
   main = converts+1;
   }
   if(adder=== false){
      main = converts-1;
   }

    document.getElementById( product+'-input').value=main;
    
    
     total()
  }
   


    


document.getElementById('ecoClass-increase').addEventListener('click',function(){
   add(true,'ecoClass' );
})

document.getElementById('ecoClass-decrease').addEventListener('click',function(){
   add(false,'ecoClass')
})



 
function total(){
   const sub = document.getElementById('firstClass-input').value;
   const convert1 = parseInt(sub);
     const change= convert1*150;


   const subb = document.getElementById('ecoClass-input').value;
   const convert2 = parseInt(subb);
   const change2= convert2*100;

   const mainn= change+change2;

   document.getElementById('subtotal').innerText= mainn;

   const tax = mainn*0.1;
   document.getElementById('tax').innerText= tax;

   document.getElementById('total').innerText= mainn+tax;

   






 }

