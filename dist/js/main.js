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
  $('.catalog').toggleClass('show');
});
$('.close-catalog').click(function (){
  $('.catalog-link').removeClass('active');
  $('.catalog').removeClass('show');
  $('.header-row-toggle').removeClass('active');
  $('.header-main-row').removeClass('show');
  $('body').removeClass('scroll-locked');
})

//поиск в header
$('.search-btn').click(function (){
  $('.header-search-form').addClass('show');
});
$('.close-header-search').click(function (){
  $('.header-search-form').removeClass('show');
  $('.header-search-form input').val('');
  $('.header-search-dropdown').removeClass('show');
});

$('.header-search-form input').on('input', function (){
  if($(this).val().length > 0) {
    $('.header-search-dropdown').addClass('show');
  } else {
    $('.header-search-dropdown').removeClass('show');
  }
});

//поиск в мобильном header
$('.close-search-xs').click(function (){
  $('.search-xs-form').removeClass('show');
  $('.search-xs-form input').val('');
  $('.search-xs-dropdown').removeClass('show');
});

$('.search-xs-form input').on('input', function (){
  if($(this).val().length > 0) {
    $('.search-xs-dropdown').addClass('show');
  } else {
    $('.search-xs-dropdown').removeClass('show');
  }
});

//меню header в мобилке
$('.header-row-toggle').click(function (){
  $(this).toggleClass('active');
  $('.header-main-row').toggleClass('show');
  $('body').toggleClass('scroll-locked');
})

