let input = document.querySelector("input");
let coinTable = document.querySelector(".coin-table");

API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  fetch(API_URL)
  .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
        displayData(data)

input.addEventListener('input' , function(){
    filterData(data)
} )

});

function filterData(data){
    userInput = input.value;
    if(userInput.trim().length != 0){
data = data.filter(function(currency){
 return currency.name.toLowerCase().includes(userInput);
})
}
displayData(data);
}

    //display data function
    function displayData(data) {
        coinTable.innerHTML = "";

        data.forEach(function (data) {
            coinTable.innerHTML += `
          <div class='d-flex container col-7 justify-content-between border-bottom'>
          <p class='my-3'><img class='icon' src="${data.image}" alt="">  ${data.id}</p>
          <p class='my-4'>${data.symbol}</p>
          <p class='my-4'>${data.current_price}</p>
          <p class='priceChange my-4'>${data.price_change_24h}</p>
          <p class='my-4'>${data.market_cap_change_24h}</p>
          </div>`;
          });

          let priceChange = document.getElementsByClassName('priceChange');
          console.log(priceChange);

          for (let i = 0; i < priceChange.length; i++) {
               if(priceChange[i].innerHTML > 0){
                   priceChange[i].classList.add('text-success')
               }else{
                priceChange[i].classList.add('text-danger')
               }
          }
    }




















