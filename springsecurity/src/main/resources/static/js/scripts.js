var user = getCookie("user");
var keyword = "";
var pageDefault = 0;
var cart = {
    id: "",
    buyer: "",
    listProduct: [],
    status: ""
};


var url      = window.location.href;
var origin   = window.location.origin;
var pathname = window.location.pathname;
// Returns path only (/path/example.html)

switch (pathname) {
        case "/home":
            $("li.home").addClass("active");
            break;
        case "/shop":
            $("li.shop").addClass("active");
            break;
        case "/cart":
            $("li.cart").addClass("active");
            break;
        case "/checkout":
            $("li.checkout").addClass("active");
            break;
        default :
            $("li").removeClass("active");
            break;
    }

if(url == origin+"/login?error=true") {
    setCookie("user", "");
}

function saveUserName() {
    let username = $("#username").val().trim();
    if(username != null) {
        setCookie("user", username);
    }
    console.log(username);
}
    
function forPagination(totalPage) {
    $("#pagination").empty();
    for(let i = 0; i < totalPage; i++) {
        if(i == pageDefault) {
            $("#pagination").append(`<li class="page-item active"><a class="page-link" onclick='paginationProduct(${i})' >0${i+1}.</a></li>`);
        }else {
            $("#pagination").append(`<li class="page-item"><a class="page-link" onclick='paginationProduct(${i})' >0${i+1}.</a></li>`);
        }
    }
}

function forStar(star) {
    let starWrite = "";
    for (let i=1; i <= 5; i++) {
        if(i > star) {
            starWrite += "<i class=\"fa fa-star\" aria-hidden=\"true\"></i>";
        }else {
            starWrite += "<i class=\"fa fa-star\" aria-hidden=\"false\"></i>";
        }
    }
    return starWrite;
}

function rederData(data) {
    $("#lst-product").empty();
    if(typeof data != "undefined"
        && data != null
        && data.length != null
        && data.length > 0 != null) {
        data.map(item => {
            $('#lst-product').append(
                `<div class="col-12 col-sm-6 col-md-12 col-xl-6">
                    <div  class="single-product-wrapper">
                        <!-- Product Image -->
                        <div class="product-img">
                            <img src="${item.image.imageOne}" alt="">
                            <!-- Hover Thumb -->
                            <img class="hover-img" src="${item.image.imageTwo}" alt="">
                        </div>

                        <!-- Product Description -->
                        <div class="product-description d-flex align-items-center justify-content-between">
                            <!-- Product Meta Data -->
                            <div class="product-meta-data">
                                <div class="line"></div>
                                <p class="product-price">$${item.price}</p>
                                <a href="/product-details?id=${item.id}">
                                    <h6>${item.name}</h6>
                                </a>
                            </div>
                            <!-- Ratings & Cart -->
                            <div class="ratings-cart text-right">
                                <div id="ratings" class="ratings">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div class="cart">
                                    <a onclick="addToCastDB(${item.id})" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
        });
    }else{
        $("#lst-product").text("Sản phẩm không tồn tại");
    }
}

function rederDataCastBoxUp(data) {
    $("#box-up-lst-prodcut-in-cast").empty();
    if(typeof data != "undefined"
        && data != null
        && data.length != null
        && data.length > 0 != null) {
        data.map(item => {
            $('#box-up-lst-prodcut-in-cast').append(
                `<tr style="position: relative;">
                    <td class="cart_product_img">
                        <a href="#"><img width="50" height="50" src="${item.image.imageOne}" alt="Product"></a>
                    </td>
                    <td class="cart_product_desc">
                        <h5>${item.name}</h5>
                    </td>
                    <td class="price">
                        <span>$${item.price}</span>
                    </td>
                    <td style="position: relative;" onclick="deleteItem(${item.id})" class="remove-item">
                        <span>x</span>
                    </td>
                </tr>`
            );
        });
    }else{
        $("#box-up-lst-prodcut-in-cast").text("Sản phẩm không tồn tại");
    }
}

function rederDataCast(data) {
    $("#lst-product-in-cast").empty();
    if (typeof data != "undefined"
        && data != null
        && data.length != null
        && data.length > 0) {
        data.map(item => {
            $('#lst-product-in-cast').append(
                `<tr style="position: relative;">
                <td class="cart_product_img">
                    <a href="#"><img src="${item.image.imageOne}" alt="Product"></a>
                </td>
                <td class="cart_product_desc">
                    <h5>${item.name}</h5>
                </td>
                <td class="price">
                    <span>$${item.price}</span>
                </td>
                <td class="qty">
                    <div class="qty-btn d-flex">
                        <p>Qty</p>
                        <div class="quantity">
                            <span class="qty-minus" onclick="removeItem('${item.id}')"><i class="fa fa-minus" aria-hidden="true"></i></span>
                            <input type="number" class="qty-text" id="qty2" step="1" min="1" max="300" name="quantity" value="${item.number ? item.number : 0}">
                            <span class="qty-plus" onclick="addItem('${item.id}')"><i class="fa fa-plus" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </td>
                <td onclick="deleteItem(${item.id})" class="remove-item">
                    <span>x</span>
                </td>
            </tr>`
            );
        });
    } else {
        $('#lst-product-in-cast').html("<h3>Sản phẩm không tồn tại!</h3>");
    }
}

function getTotalProductInCast(cast) {
    let total = cart.listProduct.length;
    if (total <= 0) {
        $("#total-cast").text(`(0)`);
    } else {
        $("#total-cast").text(`(${total})`);
    }
}

function getPriceProductInCast(cast) {
    let price_number = 0;
    if (cast.listProduct != null) {
        let length = cast.listProduct.length;
        for (let i = 0; i < length; i++) {
            price_number += (cast.listProduct[i].price * cast.listProduct[i].number);
        }
        $("#price-number").text("$" + price_number);
    }

}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}