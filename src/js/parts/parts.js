export class Parts{

    init() {
        this.buttonsticky();
        this.HeaderClick();
        this.burgerMenu();
        this.selectTo();
    }

    selectTo(){
      $(document).ready(function () {
        $(".js-select2").select2({
          closeOnSelect: true,
          minimumResultsForSearch: Infinity,
          allowClear: false,
          dropdownCssClass: "categories-select2",
      }); 
      })
    }

    buttonsticky(){
        $(document).ready(function () {
            var $btnGroup = $(".tab-btn-group-container");
            var offsetTop = $btnGroup.offset().top;
        
            $(window).on("scroll", function () {
                if ($(window).scrollTop() >= offsetTop) {
                    $btnGroup.addClass("button-sticky");
                } else {
                    $btnGroup.removeClass("button-sticky");
                }
            });
        });
        
    }

    HeaderClick(){
     
        $(document).ready(function(){
          console.log('djshhdhshjdhdhsh');
            $(".menu-item > a").on("click", function(e){
              var $menuItem = $(this).closest(".menu-item");
          
              if ($menuItem.find(".sub-menu").length > 0) {
                e.preventDefault(); // stop redirect
          
                if ($menuItem.hasClass("menu-active")) {
                  // agar already open hai to close karo
                  $menuItem.removeClass("menu-active");
                } else {
                  // sabhi se hatao
                  $(".menu-item").removeClass("menu-active");
                  // clicked wale me add karo
                  $menuItem.addClass("menu-active");
                }
              }
            });
        });   
    }

    burgerMenu(){
      $(document).ready(function () {
        $(".burger-menu-container").on("click", function () {
          if ($(this).hasClass("activate")) {
            $(this).removeClass("activate");
            $("body").removeClass("overflow-hidden");
            $("nav").addClass("d-none");
            $("header").removeClass("header-active");
            $(".menu-item").removeClass("menu-active");
          } else {
            $(this).addClass("activate");
            $("body").addClass("overflow-hidden");
            $("nav").removeClass("d-none");
            $("header").addClass("header-active");
          }
        });
      });
      
    }
}
