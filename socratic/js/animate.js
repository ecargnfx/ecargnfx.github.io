var w;
var w_height;
var image_bg_pause = 1;




$(function() {
  init();
  $(window).scroll(function() {
    w = $(this).scrollTop();

    /* ******************* */
    /* Categories
    /* *********************/
    
    if(w > $("#categories").data("scrolls")[0] && w < $("#categories").data("scrolls")[1]) {
      window.categories_rel = w - ($("#categories").data("scrolls")[0]);
      window.categories_ratio = ((window.categories_rel / ($("#categories").data("scrolls")[2] - 860 )));
      $("#categories_circle div").each(function(index){
        var ratio = window.categories_ratio
        
        if(ratio > 1) ratio = 1
        if(ratio < 0) ratio = 0
        
        var start_x = $(this).data("start_coords")[0];
        var end_x = $(this).data("end_coords").left;      
        var diff_x = end_x - start_x;
        var new_x = (diff_x * ratio) + start_x;
        
        var start_y = $(this).data("start_coords")[1];
        var end_y = $(this).data("end_coords").top;      
        var diff_y = end_y - start_y;
        var new_y = (diff_y * ratio) + start_y;

        $(this).stop().animate({
          left: new_x,
          top: new_y
        }, 100);
      }); 
    }
    