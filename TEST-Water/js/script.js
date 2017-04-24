/* Tabs */
(function() {
  var calcText = document.querySelectorAll('.calc__text2');

  calcText.forEach(function(item, i) {
    item.addEventListener('click', activeTab);
  });
  function activeTab(item) {
    calcText.forEach(function(item, i) {
      item.classList.remove('calc__text2_active');
    });
    item.target.classList.add('calc__text2_active');
  }
}());

$(document).ready(function() {
  /* Modal window */
  $('#modalWindow').click(function() {
    $('#overlay').fadeIn(400, function() {
      $('#modal-form').css('display', 'block').animate({
        opacity: 1,
        top: '50%'
      }, 200);
    });
  });
  $('#modal-close, #overlay').click(function() {
    $('#modal-form').animate({
      opacity: 0,
      top: '45%'
    }, 200, function() {
      $(this).css('display', 'none');
      $('#overlay').fadeOut(400);
    });
  });

  /* Slider setup */
  var result_outptut = $("#revenue span"),
    client = 100,
    revenue = 0,
    days = 50,
    time = 1;

  function recount() {
    var clientDays = client + days;
    var percent = 1.13;
    if (time == 1) {
      revenue = percent * (clientDays);
    } else if (time == 2) {
      revenue = percent * (percent * (clientDays));
    } else if (time == 3) {
      revenue = percent * (percent * (percent * (clientDays)));
    } else if (time == 4) {
      revenue = percent * (percent * (percent * (percent * (clientDays))));
    } else if (time == 5) {
      revenue = percent * (percent * (percent * (percent * (percent * (clientDays)))));
    } else if (time == 6) {
      revenue = percent * (percent * (percent * (percent * (percent * (percent * (clientDays))))));
    } else if (time == 7) {
      revenue = percent * (percent * (percent * (percent * (percent * (percent * (percent * (clientDays)))))));
    } else if (time == 8) {
      revenue = percent * (percent * (percent * (percent * (percent * (percent * (percent * (percent * (clientDays))))))));
    } else if (time == 9) {
      revenue = percent * (percent * (percent * (percent * (percent * (percent * (percent * (percent * (percent * (clientDays)))))))));
    } else if (time == 10) {
      revenue = percent * (percent * (percent * (percent * (percent * (percent * (percent * (percent * (percent * (percent * (clientDays))))))))));
    }
    result_outptut.html('$' + revenue.toFixed(0));
  }
  $(document).on("change", "#amount", function() {
    var value = +$(this).val();
    if (value == 1 || value == 2) {
      client = value * 100;
    } else {
      client = value * 50 + 100;
    }
    $("#slider").slider("value", client);
    recount();
  });
  $(document).on("change", "#amount1", function() {
    var value = +$(this).val();
    if (value == 1 || value == 2 || value == 3 || value == 4) {
      days = value * 50;
    } else {
      days = value * 25 + 100;
    }
    $("#slider1").slider("value", days);
    recount();
  });
  $(document).on("change", "#amount2", function() {
    time = +$(this).val();
    $("#slider2").slider("value", time);
    recount();
  });
  $(function() {
    $("#slider").slider({
      range: "min",
      value: 1,
      min: 1,
      max: 10,
      slide: function(event, ui) {
        $('#amount').val(ui.value).trigger("change");
      }
    });
    $("#amount").val($("#slider").slider("value"));
  });
  $(function() {
    $("#slider1").slider({
      range: "min",
      value: 1,
      min: 1,
      max: 30,
      slide: function(event, ui) {
        $("#amount1").val(ui.value).trigger("change");
      }
    });
    $("#amount1").val($("#slider1").slider("value"));
  });
  $(function() {
    $("#slider2").slider({
      range: "min",
      value: 1,
      min: 1,
      max: 10,
      slide: function(event, ui) {
        $("#amount2").val(ui.value).trigger("change");
      }
    });
    $("#amount2").val($("#slider2").slider("value"));
  });
});
