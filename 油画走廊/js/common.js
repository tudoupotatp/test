window.onload=function(){
        var light_second=document.getElementById("light_second");
        var light_first=document.getElementById("light_first");
        var h1=document.getElementsByTagName("h1");
        var flag=true;
        light_second.onclick=function(){
          	light_first.className=(light_first.className=="close1")?"open1":"close1";
          	light_second.className=(light_second.className=="close2")?"open2":"close2";
          			
          	if(flag)
	        {	
	          document.body.style.backgroundColor="#2F3238";
	          h1[0].style.color="#F5F5F5";
	          flag=false;
	         }
          	else{
          		document.body.style.backgroundColor="#F5F5F5";
          		h1[0].style.color="#2F3238";
          	    flag=true;
          		}
        }
    }

    otherWindow.postMessage(message, targetOrigin); 
    window.addEventListener("message", receiveMessage, false);
     function receiveMessage(event) {
    if (event.origin !== "http://example.org:8080") return;
}