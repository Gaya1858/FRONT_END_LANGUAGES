//DOM manipulation
//Document Object Model manipulation
//Document is a special method and it is an instance of HTMLDocument

//console.log(document.getElementById("title"))
//console.log()
// window object used to retrieve html document by calling window.document - returns html document
// you can use document to get the element by id as below function
// innerHTML method can be used when there is a html tag involved in the output  check below for innerhTML
//function sayHello(){
//    var name =document.getElementById("name").value;
//    var message ="<h2>Hello " + name + "!</h2>";
////    document
////    .getElementById("content")
////    .textContent = message;
//
//    document
//        .getElementById("content")
//        .innerHTML =message;
//
//    if(name === "student"){
//        var title = document.querySelector("#title").textContent;
//        // document.getElementById("title") document.querySelector("#title) ---> CSS selector
//        title +="& Lovin' it!";
//        document.querySelector("#title").textContent =title;
//
//    }
//}
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    function sayHello (event) {
      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title =
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);



// document.querySelector("button")
//   .onclick = sayHello;




