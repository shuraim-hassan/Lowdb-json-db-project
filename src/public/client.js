$(function () {
  $.get("/users", function (users) {
    users.forEach(function (user) {

      $("<li class='border bg-white subpixel-antialiased text-center text-sky-400 list-none rounded-sm px-3 py-3 cursor-pointer hover:text-white hover:bg-sky-500'</li >")
        .text(user.name)
        .appendTo("ul#users")

    });
  });
});


