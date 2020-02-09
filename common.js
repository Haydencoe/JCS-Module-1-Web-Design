$(window).scroll(function() {
  // Darken the top navbar when scrolling down
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".top-navbar").addClass("dark");
  } else {
    $(".top-navbar").removeClass("dark");
  }
});

$(document).ready(function() {
  // Fade through slideshow on main page
  $("#slideshow > div:gt(0)").hide();
  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  }, 4000);
});

// Function that adds product to localstorage and navigates to cart page
function addCart(id, title, price) {
  localStorage.setItem(id, JSON.stringify({title: title, price: price}))
  location.href = 'cart.html';
}


$(function() {

  // Fill cart list with stored items
  var total = 0;
  for (var i = 0; i < localStorage.length; i++) {
    var itemId = localStorage.key(i),
      itemData = JSON.parse(localStorage.getItem(itemId));
    // Add up total as we go
    total += parseInt(itemData.price);//.substr(1));
    $('#cart-list').append('<li id="' + itemId + '"><span class="item-price">' + itemData.price + '</span><a href="#" class="remove">Remove</a><span class="item-title">' + itemData.title + '</span></li>');
  }
  // Set total
  $('#cart-total').text(total);

  // Remove item from localstorage when the remove link is clicked
  $(document).on('click', '.remove', function(e) {
    var itemId = $(e.target).parent().attr('id');
    localStorage.removeItem(itemId);
    location.reload();
  })

});



