function generateNoiseorenge(opacity) {  
   if ( !!!document.createElement('canvas').getContext ) {  
      return false;  
   }  
  
   var canvas = document.createElement("canvas"),  
   ctx = canvas.getContext('2d'),  
   x, y,  
   number,  
   opacityopacity = opacity || .2;  
  
   canvas.width = 200;  
   canvas.height = 200;  
  
   for ( x = 0; x < canvas.width; x++ ) {  
      for ( y = 0; y < canvas.height; y++ ) {  
         number = Math.floor( Math.random() * 128 );  
         //FF8000
  
  
  
         ctx.fillStyle = "rgba(" + 255 + "," + (255-number) + ","+(255-number*2)+"," + opacity + ")";  
         ctx.fillRect(x, y, 1, 1);  
      }  
   }  
  
   document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";  
}

function generateNoise(opacity) {  
   if ( !!!document.createElement('canvas').getContext ) {  
      return false;  
   }  
  
   var canvas = document.createElement("canvas"),  
   ctx = canvas.getContext('2d'),  
   x, y,  
   number,  
   opacityopacity = opacity || .2;  
  
   canvas.width = 200;  
   canvas.height = 200;  
  
   for ( x = 0; x < canvas.width; x++ ) {  
      for ( y = 0; y < canvas.height; y++ ) {  
         number = Math.floor( Math.random() * 45 )+138;  
         number2 = Math.floor( Math.random() * 45 )+138; 
         number3 = Math.floor( Math.random() * 45 )+138; 
         //FF8000
  
  
  
         ctx.fillStyle = "rgba(" + number + "," + number2 + ","+ number3 +"," + opacity + ")";  
         ctx.fillRect(x, y, 1, 1);  
      }  
   }  
  
   document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";  
}  
