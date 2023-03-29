"use strict";
const table = document.getElementById("table");
// xml object
const xmlObj = new XMLHttpRequest();
// fetching data
xmlObj.open("get", "https://jsonplaceholder.typicode.com/users");
xmlObj.send();
xmlObj.onload = function () {
    // error handling
    if (xmlObj.status == 200) {
        // parsing to json data
        const data = JSON.parse(xmlObj.response);
        data.forEach((tblData) => {
            // creating table dynamically using data we retrieved
            const tblrow = document.createElement("tr");
            tblrow.innerHTML = `
        <td>${tblData.id}</tb>
        <td>${tblData.name}</tb>
        <td>${tblData.email}</tb>
        <td>${tblData.phone}</tb>
        `;
            // appending to DOM
            table.appendChild(tblrow);
        });
    }
    else {
        throw new Error("Unsuccessful");
    }
};
