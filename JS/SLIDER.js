//Almacenar slider y botones en una varible
var slider=$('#slider');
var siguiente=$('#btn-next');
var anterior=$('#btn-prev');

//Mover ultima imagen al pprincipio
$('#slider section:last').insertBefore('#slider section:first');

//Mostrar la primera magen coon un margen de -100%
slider.css('margin-left', '-'+120+'%');

function moverD(){
  slider.animate({
    marginLeft:'-'+240+'%'
  } ,700, function(){
    $('#slider section:first').insertAfter('#slider section:last');
    slider.css('margin-left', '-'+120+'%');
  });
}

function moverI(){
  slider.animate({
    marginLeft:0
  } ,700, function(){
    $('#slider section:last').insertBefore('#slider section:first');
    slider.css('margin-left', '-'+120+'%');
  });
}

siguiente.on('click', function(){
  moverD();
});

anterior.on('click', function(){
  moverI();
});
