//focus состяние form-group
$('.form-group.light input').focus(function (){
  $(this).closest('.form-group').addClass('has-focus');
});

$('.form-group.light input').blur(function (){
  $(this).closest('.form-group').removeClass('has-focus');
});

//каталог
$('.catalog-link').click(function (e){
  e.preventDefault();
  $(this).toggleClass('active');
  $('.catalog').toggleClass('show')
});