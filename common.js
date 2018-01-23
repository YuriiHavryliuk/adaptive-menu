(function ($, window, document) {

  $(function () {
    menu.init();
  });

  var menu = {
    $el : $('.js-menu'),
    triggerClass: '.js-menu-trigger',
    init: function() {
      if (!this.$el.length) return;
      $(this.triggerClass).on('click', this.toggle);
      this.clone();
    },
    toggle: function() {
      $('html').toggleClass('menu-open');
      $('.js-menu-trigger').toggleClass('menu-m__close');
      // $(document).trigger("menu:open");
    },
    clone: function() {

 
    var arr = $(".js-menu-item").sort(function (a, b) {
 return ($(a).data('menu-order') - $(b).data('menu-order'));
    });

    $(arr).clone(true).removeClass('mobile-hide').addClass('menu-m__item').appendTo('.menu-m .container')

  }
};

  // $(document).on('menu:open', function(){
  //   console.log('MAGIC WOW');
  // });
  
}(window.jQuery, window, document));