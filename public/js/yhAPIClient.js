// newiyo5137@wowcg.com - YH API

$(document).ready(function() {
  
    var symbols = "MSFT,NVDA,SHOP";
    var apiKey = "replace this string with API Key";      // put in the api key here
    
    $("#quoteButton").on("click", function() {
      $.ajax({
        type: "GET",
        url: "https://yfapi.net/v6/finance/quote",
        headers: { 'x-api-key': apiKey },
        data: {"symbols": `${symbols}`, "region": "US", "lang": "en"},
        dataType: "json"
      }).done(function(data) {
        console.log(data);
        
        var result = data["quoteResponse"]["result"];
  
        var quoteTableRows = "";
        for (var stock of result) {
          quoteTableRows += `          
          <tr>
              <td>${stock["shortName"]}</td>
              <td>${stock["symbol"]}</td>
              <td>${stock["currency"]}</td>
              <td>${stock["regularMarketPrice"]}</td>
              <td>${stock["fiftyDayAverage"]}</td>
              <td>${stock["regularMarketVolume"]}</td>
            </tr>`;
        }
        var quoteTable = `
        <table id="quoteTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Currency</th>
              <th>Price</th>
              <th>Fifty Day Average</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            ${quoteTableRows}
          </tbody>
        </table>`;
        
        $("#quoteTableContainer").html(quoteTable);
      });
    });
  });