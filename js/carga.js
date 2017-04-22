$(document).ready(iniciar);


function iniciar(){


cargar("footer","html/partials/footer.html");   
cargar("main","html/partials/main.html");
cargar("header","html/partials/header.html");   //nos va inyectar dinamicamente en el header lo que escribamos en header.html


$("header").on("click","#menu",menuxs);          /*hacemos "click" no hay nada en el header
	                                          "span" el segundo parametro indica elemento futuro que esta por venir
                                                 cuando llegue el elemento futuro se le aplicara la funcion que invocamos abajo*/


$("header").on("click",".pagina",pagina);
$("header").on("click",".formacion",formacion);
$("header").on("click",".servicios",servicios);
$("header").on("click",".contacto",contacto);



$("header").on("click","#flecha",desplazamiento);


};


function menuxs(){

$("nav").slideToggle("slow");
$("nav").removeClass("hidden-xs");
$("nav").removeClass("hidden-sm");

};


function pagina(){
var objetivo = $(this).data('objetivo');                                //almacenamos en una variable el data-objetivo que hemos invocado mas arriba

$("html, body").animate({ scrollTop:$(objetivo).offset().top}, 1250); //offset top cuantos pixeles ay desde arriba hasta el elemnto


return false;

};

function formacion(){

var objetivo = $(this).data('objetivo');

$("html, body").animate({ scrollTop:$(objetivo).offset().top}, 1250);
return false;
};



function servicios(){

var objetivo = $(this).data('objetivo');

$("html, body").animate({ scrollTop:$(objetivo).offset().top}, 1250);
return false;
};

function contacto(){

var objetivo = $(this).data('objetivo');

$("html, body").animate({ scrollTop:$(objetivo).offset().top}, 1250);
return false;

};



function desplazamiento(){
var arriba = $(this).data("arriba")

$("html, body").animate({scrollTop:$(arriba).offset().top}, 1250)

};


/*------------ FUNCION CARGAR AJAX CUANDO APRENDA ANGULAR SERA MUCHO MEJOR ----------------*/


function cargar (destino,ruta){    //destino:header      //ruta:"html/partials/header.html"

$.ajax({

url:ruta,
success:function(data){
$(destino).html(data);

}


});




};









