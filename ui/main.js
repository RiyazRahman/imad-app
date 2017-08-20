// Counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function (){
  //Make arequest to the counter end point
  var request=new XMLHttpRequest();


  //Capture the response and store it in a variable
  request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE){
          //Take some action
      if(request.status === 200){
        var counter=  request.responseText;
         var span = document.getElementById('count');
          span.innerHTML = counter.toString();
        
      }
          
      }
      
      //Not done yet
  };
 

};