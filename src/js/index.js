// $window.on('scroll resize', check_if_in_view);

// function check_if_in_view() {
//     var window_height = $window.height();
//     var window_top_position = $window.scrollTop();
//     var window_bottom_position = (window_top_position + window_height);

//     $.each($animation_elements, function () {
//         var $element = $(this);
//         var element_height = $element.outerHeight();
//         var element_top_position = $element.offset().top;
//         var element_bottom_position = (element_top_position + element_height);

//         //check to see if this current container is within viewport
//         if ((element_bottom_position >= window_top_position) &&
//             (element_top_position <= window_bottom_position)) {
//             $element.addClass('in-view');
//         } else {
//             $element.removeClass('in-view');
//         }
//     });
// }

// var leftItems = document.getElementsByClassName('item-left');
// var rightItems = document.getElementsByClassName('item-right');

// for (var i = 0; i < 3; i++) {
//     leftItems[i].style.animation = 'translating-left ' + (i + 1) + 's';
//     rightItems[i].style.animation = 'translating-right ' + (i + 1) + '.5s';
// }


var $animation_elements = $('.item-left');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            var leftItems = document.getElementsByClassName('item-left');
            var rightItems = document.getElementsByClassName('item-right');

            for (var i = 0; i < 3; i++) {
                leftItems[i].style.animation = 'translating-left ' + (i + 1) + 's';
                rightItems[i].style.animation = 'translating-right ' + (i + 1) + '.5s';
            }
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');