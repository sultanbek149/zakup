$(".carousel").owlCarousel({
    items: 1,
    autowidth: true,
    center: true,
    nav: true,
    dots: true,
    navText: ["<i style='font-size:11px; color: white;' class='fa'>&#xf104;</i>", "<i style='font-size:11px; color: white; transform: rotate(180deg);' class='fa'>&#xf104;</i>"],
    onInitialized: addRemove,
    onTranslated : addRemove,
    responsive: {
        0: {
        },
        600: {
        },
        1000: {
        }
    }
})


function addRemove(event) {
    var element = event.target;         // DOM element, in this example .owl-carousel
    var items = event.item.count;     // Number of items
    var item = event.item.index + 1;     // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
        item = item - items
    }

    if (item === 1) {
        $('.owl-prev').addClass('disappear')
    } else {
        $('.owl-prev').removeClass('disappear')
    }  

    if(item === items) {
        $('.owl-next').addClass('disappear')
    } else {
        $('.owl-next').removeClass('disappear')
    }
}




