function getDog(){
   fetch("https://dog.ceo/api/breeds/image/random")
    .then(response =>{
     return response.json();
   })
  .then(message =>{
     document.getElementById('image').src = (message['message']);
   })
}
