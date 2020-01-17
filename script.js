console.warn("start of Script");

document.getElementById("adviceButton").addEventListener("click", function(event){
    document.getElementById("advice").innerHTML = "Get clean Socks"
})

// fetch("https://api.adviceslip.com/advice") // make the request
//   .then(response => response.json()) // convert response to json
//   .then(myJson => { // display data in the browser
//     document.body.innerHTML =
//       "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
//   })
