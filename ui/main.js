//counter code
var button=document.getElementById('counter');
button.onclick=function (){
    //make a request to the counter endpoint
    var request= new XMLHttpRequest();
    
    //get the response and store it in a varible
    request.onreadystatechange =function(){
      if(request.readyState==XMLHttpRequest.DONE)
      //take some action
      if(request.status==200)
      {
          var counter=request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();
          
      }
    };
    
    //render the variable in the correct span

};