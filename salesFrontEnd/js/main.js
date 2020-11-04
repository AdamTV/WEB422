/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: ADAM STINZIANI Student ID: 124521188 Date: 2020-09-28
********************************************************************************/

let saleData = [];
let page = 1;
const perPage = 10;

let saleTableTemplate = _.template(`<% _.forEach(sales, function(sale) { %>
                                            <tr data-id="<%- sale._id %>">
                                                <td><%- sale.customer.email %></td>
                                                <td><%- sale.storeLocation %></td>
                                                <td><%- sale.items.length %></td>
                                                <td><%- moment.utc(sale.saleDate).local().format('LLLL') %></td>
                                            </tr>
                                        <% }); %>`);

let saleModelBodyTemplate = _.template(`<h4>Customer</h4>
                                        <strong>email:</strong> <%- sale.customer.email %><br>
                                        <strong>age:</strong> <%- sale.customer.age %><br>
                                        <strong>satisfaction:</strong> <%- sale.customer.satisfaction %> / 5
                                        <br><br>
                                        <h4> Items: $<%- sale.total.toFixed(2) %> </h4>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Product Name</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    </tr>
                                            </thead>
                                            <tbody>
                                              <% _.forEach(sale.items, function(item) { %>  
                                                <tr>
                                                    <td><%- item.name %></td>
                                                    <td><%- item.quantity %></td>
                                                    <td><%- item.price %></td>
                                                </tr>
                                       <% }); %>`);

function loadSaleData() {
    console.log('in loadSaleData');
    var request = new XMLHttpRequest();
    request.open('GET', `https://web422astinziani.herokuapp.com/api/sales?page=${page}&perPage=${perPage}`, true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response).sales;

        console.log(data);
        if (request.status >= 200 && request.status < 400) {
            saleData = data;
            var test = moment.utc(data[0].saleDate).local().format('LLLL');
            console.log(test);
            var tableTemplateResult = saleTableTemplate({ 'sales': data });
            console.log(tableTemplateResult);

            $("#sales-table tbody").html(tableTemplateResult);
            $("#current-page").html(page);
        } else {
            console.log('error');
        }
    }
    request.send();
}

$(function () {
    loadSaleData();

    $("button").on("click", function () {
        console.log("button clicked")
    });

    $("#sales-table tbody").on("click", "tr", function () {
        var clickedId = $(this).attr("data-id");
        var clickedSale = _.find(saleData, { '_id': clickedId });
        clickedSale.total = 0;
        clickedSale.items.forEach(item => {
            clickedSale.total += (item.price * item.quantity);
        });
        $(".modal-title").html(`Sale: ${clickedSale._id}`);
        $(".modal-body").html(saleModelBodyTemplate({ 'sale': clickedSale }));
        $("#sales-modal").modal();
    });

    $("#previous-page").on("click", function () {
        if (page > 1) page -= 1;
        loadSaleData();
    });
    $("#next-page").on("click", function () {
        page += 1;
        loadSaleData();
    });
});