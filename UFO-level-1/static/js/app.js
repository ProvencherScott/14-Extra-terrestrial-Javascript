// from data.js
var UFOData = data;

// POPULATE THE INFORMATION TABLE

console.log(UFOData)

// Get a reference cor the table body
var tbody = d3.select("tbody");

// Loop throught tableDate and each weather report object to add the number of rows
// based on the legth of the object
UFOData.forEach((city) => {
    var row = tbody.append("tr");
    Object.entries(city).forEach(([key, value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

// FILTER THE INFORMATION

var button = d3.select("#filter-btn");
var form = d3.select("form");