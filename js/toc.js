var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h6>Inhalt:</h6>" +
    "<ul>";

var newLine, el, title, link;

$('div[class="chapter"]').each(function() {

  el = $(this);
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        el.attr("id") +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);
