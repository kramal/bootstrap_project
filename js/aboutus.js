$("#carouselExample").on("slide.bs.carousel", function(e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item")
          .eq(i)
          .appendTo(".carousel-inner");
      } else {
        $(".carousel-item")
          .eq(0)
          .appendTo(".carousel-inner");
      }
    }
  }
});

$("#carouselExample").carousel({
  interval: 2000
});

$(document).ready(function() {
  /* show lightbox when clicking a thumbnail */
  $("a.thumb").click(function(event) {
    event.preventDefault();
    var content = $(".modal-body");
    content.empty();
    var title = $(this).attr("title");
    $(".modal-title").html(title);
    content.html($(this).html());
    $(".modal-profile").modal({ show: true });
  });
});

// On history details clicked
$("#history_details_button").click(function(event) {
  event.stopPropagation();
  console.log($("#history_details").is(":hidden"));
  if ($("#history_details").is(":hidden")) {
    $("#history_details").show();
    $("#history_details_button").innerTEXT = "Свернуть";
  } else {
    $("#history_details").hide();
    $("#history_details_button").innerTEXT = "Развернуть";
  }
});
