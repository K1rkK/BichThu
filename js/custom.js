// JavaScript Document
    
	 $(document).ready(function(){
      
		 $(".nav-toggle").click(function(){
			 $(".menu").slideToggle()
		 })
        
	 })
var typed = new Typed('.element', {
               	strings: ["Web Designer.", "Code Developer.","Apps Designer."],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
$('#banner').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
 
})