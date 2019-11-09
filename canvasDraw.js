window.onload = function() {
    initCanvas();
  };
  
      function initCanvas(){
          //Set width and height to 80 vw and 80 vh
          var windowWidth = $(window).width();
          var windowHeight = $(window).height();
          var canvas = document.getElementById("myCanvas");
          w=canvas.width = 0.8*windowWidth; 
          h=canvas.height = 0.8 * windowHeight;
  
          //Function calls
          var color=[];
          var ctx = [canvas.getContext("2d")];
          draw(color,ctx,canvas);
          changeColor(color,ctx,w,h);
  
          
      }	
  
  
  function changeColor(color,ctx,w,h ){
      document.getElementById("picker").addEventListener('change', function(){
           color[0] = document.getElementById("picker").value; 
      });
      document.addEventListener('keydown',event =>{
      
          if(event.key == 'b'){
              color[0]="blue";
          }
          else if(event.key == 'r'){
              color[0]="red";
          }
          else if(event.key == 'g'){
              color[0]="green";
          }
          else if(event.key == 'y'){
              color[0]="yellow";
          }
          else if (event.keyCode ==32){
              ctx[0].clearRect(0,0,w,h);
          }
          
      });
      
  }
  function draw(color,ctx,canvas){
      
      ctx[0].canvas.addEventListener("mousemove",myDraw);
      document.addEventListener('keydown',event=>{
          if(event.key == "ArrowUp"){
              ctx[0].canvas.removeEventListener("mousemove",myDraw);
          }
          if(event.key == "ArrowDown"){
              ctx[0].canvas.addEventListener("mousemove",myDraw);
          }
      })
  
      function myDraw(event){
          var rect = canvas.getBoundingClientRect();
          var mouseX = event.clientX - rect.left;
          var mouseY = event.clientY - rect.top;
          ctx[0].beginPath();
          ctx[0].arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
          ctx[0].fillStyle = color[0];
          
          ctx[0].fill();
  }
  }