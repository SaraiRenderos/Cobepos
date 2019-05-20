// Remover del carrito
function MinicartActions() {

    // Remover desde la X en mini cart
    $(document).on('click', '.minicart__products-wrapper .product-item .item-remove', function(e, o) {
        // console.log("---- Se dio click al remover el producto NUEVO");
        var productNameCart = $(this).parents(".product-item").find(".product-item__info .product-item__name").text(),
            productQuantityCart = $(this).parents(".product-item").find(".product-item__quantity .product-quantity__input").val(),
            productBrandCart = $(this).parents(".product-item").find(".product-item__info .product-item__brand").text(),
            productIdCart = $(this).parents(".product-item").attr('data-id');
        
        if($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--regular-price').length > 0 ) {
            var productPriceCart = parseInt($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--regular-price .product-prices__value').attr('data-price'));
        } else {
            var productPriceCart = parseInt($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--better-price .product-prices__value').attr('data-price'));
        }

        if (productQuantityCart.indexOf("kg") !== -1) {
            productQuantityCart = parseFloat(productQuantityCart.split(" ")[0]) * 1000;
        }


        try {
            var productRemove = {
                name: productNameCart,
                id: productIdCart,
                quantity: productQuantityCart,
                brand: productBrandCart,
                price: productPriceCart
            };
            ECImpressions.removeFromCart(productRemove)

        } catch (e) {
            console.log(e)
        }
    });

    // remover desde el "-" en el minicart
    $(document).on('click', '.minicart__products-wrapper .product-item .product-item__quantity .product-quantity__control--decrease', function(e, o) {
        // console.log("---- Se dio click al remover el producto NUEVO");
        var productNameCart = $(this).parents(".product-item").find(".product-item__info .product-item__name").text(),
            productQuantityCart = $(this).parents(".product-item").find(".product-item__quantity .product-quantity__input").val(),
            productBrandCart = $(this).parents(".product-item").find(".product-item__info .product-item__brand").text(),
            productIdCart = $(this).parents(".product-item").attr('data-id');
            
        if($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--regular-price').length > 0 ) {
            var productPriceCart = parseInt($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--regular-price .product-prices__value').attr('data-price'));
        } else {
            var productPriceCart = parseInt($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--better-price .product-prices__value').attr('data-price'));
        }

        if (productQuantityCart.indexOf("kg") !== -1) {
            productQuantityCart = parseFloat(productQuantityCart.split(" ")[0]) * 1000;
        }

        try {
            var productRemove = {
                name: productNameCart,
                id: productIdCart,
                quantity: "1",
                brand: productBrandCart,
                price: productPriceCart
            };
            ECImpressions.removeFromCart(productRemove)

        } catch (e) {
            console.log(e)
        }
    });

    // Agregar desde el "+" en el minicart
    $(document).on('click', '.minicart__products-wrapper .product-item .product-item__quantity .product-quantity__control--increase', function(e, o) {
        // console.log("---- Se dio click al remover el producto NUEVO");
        var productNameCart = $(this).parents(".product-item").find(".product-item__info .product-item__name").text(),
            productQuantityCart = $(this).parents(".product-item").find(".product-item__quantity .product-quantity__input").val(),
            productBrandCart = $(this).parents(".product-item").find(".product-item__info .product-item__brand").text(),
            productIdCart = $(this).parents(".product-item").attr('data-id');

        if($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--regular-price').length > 0 ) {
            var productPriceCart = parseInt($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--regular-price .product-prices__value').attr('data-price'));
        } else {
            var productPriceCart = parseInt($(this).parents(".product-item").find('.product-item__info .product-prices__wrapper .product-prices__price--better-price .product-prices__value').attr('data-price'));
        }

        try {
            var productRemove = {
                name: productNameCart,
                id: productIdCart,
                quantity: "1",
                brand: productBrandCart,
                price: productPriceCart

            };
            ECImpressions.addToCart(productRemove)

        } catch (e) {
            console.log(e)
        }
    });
}

// Agregar al carrito
function registerAddToCartInProductPage() {
    $(".product-add-to-cart").on("click", function(e, o) {
        var productQuantityCart = $('.product-info .info-wrapper .prod-controls .product-quantity input').val();
        var PUM = $(".product-content .product-info .product-prices__wrapper .product-prices__price--price-per-unit").text();
        var MeasureUnitValue = PUM.split(" a ")[0]
        if (MeasureUnitValue == ""){
            MeasureUnitValue = "Unidad";
        } 

        if (productQuantityCart.indexOf("kg") !== -1) {
            productQuantityCart = parseFloat(productQuantityCart.split(" ")[0]) * 1000;
        }

        try {
            if (void 0 != dataLayer[1].productId) {
                var r = {
                    brand: dataLayer[1].productBrandName,
                    category: dataLayer[1].productDepartmentName + "/" + dataLayer[1].productCategoryName,
                    id: dataLayer[1].productId,
                    name: dataLayer[1].productName,
                    price: parseInt(dataLayer[1].productPriceTo),
                    dimension1: MeasureUnitValue,
                    dimension2: dataLayer[1].sellerId,
                    quantity: productQuantityCart
                };
                ECImpressions.addToCart(r)
            }
        } catch (e) {
            console.log(e)
        }
    });
}

// Agregar al carrito desde listas
function registerAddToCartInListPage() {

    $(".shelf-content .product-shelf .product-item .product-item__add-to-cart").on("click", function(e, o) {

        try {
            var producttId = $(this).parents(".product-item").attr('data-id');
            var productName = $(this).parents(".product-item").find('.product-item__bottom .product-item__info .product-item__name span').text();
            var productBrand = $(this).parents(".product-item").find('.product-item__bottom .product-item__info .product-item__brand').text();
            var productPrice = parseInt($(this).parents(".product-item").find('.product-prices__wrapper .product-prices__price .product-prices__value--best-price').text().replace("$","").replace(".","").replace(".",""));
            var productQuantityCart = $(this).parents(".product-item").find('.product-item__controls .product-item__quantity .product-quantity__input').val();
            var productPum = $(this).parents(".product-item").find('.product-item__bottom .product-prices__wrapper .product-prices__price--price-per-unit').text();
            var urlSite = window.location.href;
            urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
            urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");
            Pum = productPum.split(" a ")[0];
            if (Pum == ""){
                Pum = "Unidad";
            } 

            if (productQuantityCart.indexOf("kg") !== -1) {
                productQuantityCart = parseFloat(productQuantityCart.split(" ")[0]) * 1000;
            }

            var r = {
                // list : urlSite,
                category: urlSite, 
                brand : productBrand,
                id : producttId,
                name : productName,
                price : productPrice,
                quantity : productQuantityCart,
                dimesion1 : Pum
            };
            ECImpressions.productClick(r), ECImpressions.addToCart(r)

            
        } catch (e) {
            console.log(e)
        }

    });
}

// ProductClick from listPage
function productClickInListPage() {

    // console.log('se ejecuta la función product click');

    // Click en nombre del producto
    $(".shelf-content .product-shelf .product-item .product-item__name").on("click", function(e, o) {
        console.log("hizo Click en nombre de producto");
        try {
            var producttId = $(this).parents(".product-item").attr('data-id');
            var productName = $(this).parents(".product-item").find('.product-item__bottom .product-item__info .product-item__name span').text();
            var productBrand = $(this).parents(".product-item").find('.product-item__bottom .product-item__info .product-item__brand').text();
            var productPrice = parseInt($(this).parents(".product-item").find('.product-prices__wrapper .product-prices__price .product-prices__value--best-price').text().replace("$","").replace(".","").replace(".",""));
            var productQuantityCart = $(this).parents(".product-item").find('.product-item__controls .product-item__quantity .product-quantity__input').val();
            var productPum = $(this).parents(".product-item").find('.product-item__bottom .product-prices__wrapper .product-prices__price--price-per-unit').text();
            var urlSite = window.location.href;
            urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
            urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");

            Pum = productPum.split(" a ")[0];
            if (Pum == ""){
                Pum = "Unidad";
            } 

            if (productQuantityCart.indexOf("kg") !== -1) {
                productQuantityCart = parseFloat(productQuantityCart.split(" ")[0]) * 1000;
            }
            var r = {
                // list : urlSite,
                category: urlSite,
                brand : productBrand,
                id : producttId,
                name : productName,
                price : productPrice,
                quantity : productQuantityCart,
                dimesion1 : Pum
            };
            ECImpressions.productClick(r)
            
        } catch (e) {
            console.log(e)
        }
    });

    // Click en imagen de producto
    $(".shelf-content .product-shelf .product-item .product-item__actions").on("click", function(e) {
        console.log("hizo Click en imagen de producto");
        if (e.target == this) {
            try {
                var producttId = $(this).parents(".product-item").attr('data-id');
                var productName = $(this).parents(".product-item").find('.product-item__bottom .product-item__info .product-item__name span').text();
                var productBrand = $(this).parents(".product-item").find('.product-item__bottom .product-item__info .product-item__brand').text();
                var productPrice = parseInt($(this).parents(".product-item").find('.product-prices__wrapper .product-prices__price .product-prices__value--best-price').text().replace("$","").replace(".","").replace(".",""));
                var productQuantityCart = $(this).parents(".product-item").find('.product-item__controls .product-item__quantity .product-quantity__input').val();
                var productPum = $(this).parents(".product-item").find('.product-item__bottom .product-prices__wrapper .product-prices__price--price-per-unit').text();
                var urlSite = window.location.href;
                urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
                urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");
                Pum = productPum.split(" a ")[0];

                if (Pum == ""){
                    Pum = "Unidad";
                } 

                if (productQuantityCart.indexOf("kg") !== -1) {
                    productQuantityCart = parseFloat(productQuantityCart.split(" ")[0]) * 1000;
                }
               
                var r = {
                    // list : urlSite,
                    category: urlSite,
                    brand : productBrand,
                    id : producttId,
                    name : productName,
                    price : productPrice,
                    quantity : productQuantityCart,
                    dimesion1 : Pum
                };
                ECImpressions.productClick(r)
                
            } catch (e) {
                console.log(e)
            }
        } 
    });

    // Click en Quickview
    $(".shelf-content .product-shelf .product-item .product-item__actions .product-item__action--quickview").on("click", function(e) {
        console.log("hizo Click en quickview de producto");
        if (e.target == this) {
            try {
                var producttId = $(this).parents(".product-item").attr('data-id');
                var productName = $(this).parents(".product-item").find('.product-item__bottom .product-item__info .product-item__name span').text();
                var productBrand = $(this).parents(".product-item").find('.product-item__bottom .product-item__info .product-item__brand').text();
                var productPrice = parseInt($(this).parents(".product-item").find('.product-prices__wrapper .product-prices__price .product-prices__value--best-price').text().replace("$","").replace(".","").replace(".",""));
                var productQuantityCart = $(this).parents(".product-item").find('.product-item__controls .product-item__quantity .product-quantity__input').val();
                var productPum = $(this).parents(".product-item").find('.product-item__bottom .product-prices__wrapper .product-prices__price--price-per-unit').text();
                var urlSite = window.location.href;
                urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
                urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");
                Pum = productPum.split(" a ")[0];

                if (Pum == ""){
                    Pum = "Unidad";
                } 

                if (productQuantityCart.indexOf("kg") !== -1) {
                    productQuantityCart = parseFloat(productQuantityCart.split(" ")[0]) * 1000;
                }
               
                var r = {
                    // list : urlSite,
                    category: urlSite,
                    brand : productBrand,
                    id : producttId,
                    name : productName,
                    price : productPrice,
                    quantity : productQuantityCart,
                    dimesion1 : Pum
                };
                ECImpressions.productClick(r),ECImpressions.productViewDetail(r)
                
            } catch (e) {
                console.log(e)
            }
        } 
    });
}

// Detalle del producto
function productView() {
    setTimeout(function () {
        var productQuantityCart = $('.product-info .info-wrapper .prod-controls .product-quantity input').val();
        var PUM = $(".product-content .product-info .product-prices__wrapper .product-prices__price--price-per-unit").text();
        var MeasureUnitValue = PUM.split(" a ")[0]

        if (MeasureUnitValue == ""){
            MeasureUnitValue = "Unidad";
        } 

        try {
            if (void 0 != dataLayer[1].productId) {
                var r = {
                    brand: dataLayer[1].productBrandName,
                    category: dataLayer[1].productDepartmentName + "/" + dataLayer[1].productCategoryName,
                    id: dataLayer[1].productId,
                    name: dataLayer[1].productName,
                    price: parseInt(dataLayer[1].productPriceTo),
                    dimension1: MeasureUnitValue,
                    dimension2: dataLayer[1].sellerId,
                };
                ECImpressions.productViewDetail(r)
            }
        } catch (e) {
            console.log(e)
        }
    }, 1000)
}

// promo impression /ofertas
function promoImpressionOffers () {

    var promos = [];
    var promos1 = [];
    var promos2 = [];
    var promos3 = [];
    var promos4 = [];
    var promos5 = [];
    var promos6 = [];

    var lengthPromos = $('.items-offers .item-offer').length;

    // for( var i = 0; i < lengthPromos; i ++ ) {
    //     if (i <= 19) {}
    // }

    $('.items-offers .item-offer').each(function(index, el) {
        // console.log(index)
        var promoName = $(this).find('a').attr('title');
        var promoPosition = $(this).index();
        var urlSite = window.location.href;
        urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
        urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");

        if (promoName.indexOf('"') ) {
            promoName = promoName.replace('"', '');
        }

        if (promoPosition <= 19) {
            // console.log(promoName + );
            promos1.push(
                {
                    'id': promoName,
                    'name': promoName,
                    'creative': urlSite,
                    'position': promoPosition
                }
            );

        } else if (promoPosition >= 20 && promoPosition <= 39) {
            promos2.push(
                {
                    'id': promoName,
                    'name': promoName,
                    'creative': urlSite,
                    'position': promoPosition
                }
            );
        } else if (promoPosition >= 40 && promoPosition <= 59) {
            promos3.push(
                {
                    'id': promoName,
                    'name': promoName,
                    'creative': urlSite,
                    'position': promoPosition
                }
            );
        } else if (promoPosition >= 60 && promoPosition <= 79) {
            promos4.push(
                {
                    'id': promoName,
                    'name': promoName,
                    'creative': urlSite,
                    'position': promoPosition
                }
            );
        } else if (promoPosition >= 80 && promoPosition <= 99) {
            promos5.push(
                {
                    'id': promoName,
                    'name': promoName,
                    'creative': urlSite,
                    'position': promoPosition
                }
            );
        } else {
            promos6.push(
                {
                    'id': promoName,
                    'name': promoName,
                    'creative': urlSite,
                    'position': promoPosition
                }
            );
        }   

    });

    if (promos1.length > 0) {
        ECPromoImpressions.promoOffers(promos1);
    }
    if (promos2.length > 0) {
        ECPromoImpressions.promoOffers(promos2);
    }
    if (promos3.length > 0) {
        ECPromoImpressions.promoOffers(promos3);
    }
    if (promos4.length > 0) {
        ECPromoImpressions.promoOffers(promos4);
    }
    if (promos5.length > 0) {
        ECPromoImpressions.promoOffers(promos5);
    }
    if (promos6.length > 0) {
        ECPromoImpressions.promoOffers(promos6);
    }

    
    // ECImpressions.ProductsImpression(products);

    $('.items-offers .item-offer').on('click', function(event) {
        // console.log("dfdfgfdg");
        var promoName = $(this).find('.title-product h3').text();
        var promoPosition = $(this).index();
        var urlSite = window.location.href;
        urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
        urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");

        var r = {
            id: promoName,
            name: promoName,
            creative: urlSite,
            position: promoPosition
        };
        ECPromoImpressions.promoClick(r)

    });
}

// Product impressions category
function productsImpressions(e) {

    if ($("body").hasClass('category') || $("body").hasClass('search-result')) {
        var products = [];

        setTimeout(function() {
            try {
                $(".shelf-content .product-shelf .product-item").each(function(index, el) {
                    
                    var producttId = $(this).attr('data-id');
                    var productName = $(this).find('.product-item__bottom .product-item__info .product-item__name span').text();
                    var productBrand = $(this).find('.product-item__bottom .product-item__info .product-item__brand').text();
                    var productPrice = $(this).find('.product-prices__wrapper .product-prices__price .product-prices__value--best-price').text().replace("$","").replace(".","");
                    var productQuantityCart = $(this).find('.product-item__controls .product-item__quantity .product-quantity__input').val();
                    var productPum = $(this).find('.product-item__bottom .product-prices__wrapper .product-prices__price--price-per-unit').text();
                    var urlSite = window.location.href;
                    urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
                    urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");
                    
                    Pum = productPum.split(" a ")[0];

                    if (Pum == ""){
                        Pum = "Unidad";
                    } 

                    if (productQuantityCart.indexOf("kg") !== -1) {
                        productQuantityCart = parseFloat(productQuantityCart.split(" ")[0]) * 1000;
                    }


                    products.push(
                        {
                        'category' : urlSite, 
                        'list' : urlSite,
                        'brand' : productBrand,
                        'id' : producttId,
                        'name' : productName,
                        'price' : productPrice,
                        // 'quantity' : productQuantityCart,
                        'dimesion1' : Pum
                        }
                    ); 
                });
                ECImpressions.ProductsImpression(products);
            } catch (e) {
                console.log(e)
            }
        },1000);   
    }

    
}

// Resumen de carrito /Cart
function cartResumeDetail(e) {

    if (window.location.pathname == "/cart") {

        // Resumen de productos
        var products1 = [];
        var products2 = [];
        var products3 = [];
        var products4 = [];
        var products5 = [];
        var products6 = [];
        // console.log(e);
        try {
            vtexjs.checkout.getOrderForm().done(order => {
                for( var i = 0; i < order.items.length; i ++ ) {
                    var categoryIds = [];
                    var categoryString = [];
                    categoryIds = order.items[i].productCategories
                    categoryIds = Object.keys(categoryIds);

                    for( var j = 0; j < categoryIds.length; j ++ ) {
                        categoryString.push(order.items[i].productCategories[categoryIds[j]]);
                    }
                    var breadcrumb = categoryString;
                    breadcrumb = breadcrumb.toString();
                    breadcrumb = breadcrumb.replace(",", "/");

                    var productQuantity = order.items[i].quantity
                    var propductPum = order.items[i].measurementUnit;

                    if (propductPum == "kg") {
                        productQuantity = (order.items[i].unitMultiplier * 1000) * productQuantity ;
                    }

                    if (propductPum == "kg") {
                        propductPum = "Gramo"
                    }

                    if (i <= 19) {
                        products1.push(
                            {
                                'brand' : order.items[i].additionalInfo.brandId,
                                'category' : breadcrumb,
                                'id' : order.items[i].id,
                                'name' : order.items[i].name,
                                'price' : order.items[i].sellingPrice / 100,
                                'quantity' : productQuantity,
                                'dimesion1' : propductPum,
                                'dimesion2' : order.items[i].seller
                            }
                        ); 
                    } else if (i >= 20 && i <= 39) {
                        products2.push(
                            {
                                'brand' : order.items[i].additionalInfo.brandId,
                                'category' : breadcrumb,
                                'id' : order.items[i].id,
                                'name' : order.items[i].name,
                                'price' : order.items[i].sellingPrice / 100,
                                'quantity' : productQuantity,
                                'dimesion1' : propductPum,
                                'dimesion2' : order.items[i].seller
                            }
                        ); 
                    } else if (i >= 40 && i <= 59) {
                        products3.push(
                            {
                                'brand' : order.items[i].additionalInfo.brandId,
                                'category' : breadcrumb,
                                'id' : order.items[i].id,
                                'name' : order.items[i].name,
                                'price' : order.items[i].sellingPrice / 100,
                                'quantity' : productQuantity,
                                'dimesion1' : propductPum,
                                'dimesion2' : order.items[i].seller
                            }
                        ); 
                    } else if (i >= 60 && i <= 79) {
                        products4.push(
                            {
                                'brand' : order.items[i].additionalInfo.brandId,
                                'category' : breadcrumb,
                                'id' : order.items[i].id,
                                'name' : order.items[i].name,
                                'price' : order.items[i].sellingPrice / 100,
                                'quantity' : productQuantity,
                                'dimesion1' : propductPum,
                                'dimesion2' : order.items[i].seller
                            }
                        ); 
                    } else if (i >= 80 && i <= 99) {
                        products5.push(
                            {
                                'brand' : order.items[i].additionalInfo.brandId,
                                'category' : breadcrumb,
                                'id' : order.items[i].id,
                                'name' : order.items[i].name,
                                'price' : order.items[i].sellingPrice / 100,
                                'quantity' : productQuantity,
                                'dimesion1' : propductPum,
                                'dimesion2' : order.items[i].seller
                            }
                        ); 
                    } else {
                        products6.push(
                            {
                                'brand' : order.items[i].additionalInfo.brandId,
                                'category' : breadcrumb,
                                'id' : order.items[i].id,
                                'name' : order.items[i].name,
                                'price' : order.items[i].sellingPrice / 100,
                                'quantity' : productQuantity,
                                'dimesion1' : propductPum,
                                'dimesion2' : order.items[i].seller
                            }
                        ); 
                    }
                };
                // ECImpressions.resumeCart(products, e);

                if (products1.length > 0) {
                    ECImpressions.resumeCart(products1, e);
                }
                if (products2.length > 0) {
                        ECImpressions.resumeCart(products2, e);
                }
                if (products3.length > 0) {
                        ECImpressions.resumeCart(products3, e);
                }
                if (products4.length > 0) {
                        ECImpressions.resumeCart(products4, e);
                }
                if (products5.length > 0) {
                        ECImpressions.resumeCart(products5, e);
                }
                if (products6.length > 0) {
                    ECImpressions.resumeCart(products6, e);
                }
            }); 
            
        } catch (e) {
            console.log(e)
        }

        
    } 
}

// Resumen de carrito /Cart
function cartResumeDetailOption(e) {

    if (window.location.pathname == "/cart") {
        var products = [];
        try {
            vtexjs.checkout.getOrderForm().done(order => {
                for( var i = 0; i < order.items.length; i ++ ) {
                    var categoryIds = [];
                    var categoryString = [];
                    categoryIds = order.items[i].productCategories
                    categoryIds = Object.keys(categoryIds);

                    for( var j = 0; j < categoryIds.length; j ++ ) {
                        categoryString.push(order.items[i].productCategories[categoryIds[j]]);
                    }
                    var breadcrumb = categoryString;
                    breadcrumb = breadcrumb.toString();
                    breadcrumb = breadcrumb.replace(",", "/");

                    var productQuantity = parseFloat(order.items[i].unitMultiplier);
                    var propductPum = order.items[i].measurementUnit;

                    products.push(
                        {
                          'brand' : order.items[i].additionalInfo.brandId,
                          'category' : breadcrumb,
                          'id' : order.items[i].id,
                          'name' : order.items[i].name,
                          'price' : Aurora.formatPrice(order.items[i].price / 100),
                          'quantity' : productQuantity,
                          'dimesion1' : propductPum,
                          'dimesion2' : order.items[i].seller
                        }
                    );  
                };

                ECImpressions.resumeCartOption(products, e);
            }); 
            
        } catch (e) {
            console.log(e)
        }
    }
}

// Buscar por lista
function searchList() {
    $("#header .search-wrapper .search-by-list-wrapper .search-by-list-button").on("click", function(e, o) {
        // console.log("Se dio click a busqueda por lista FUNCION");
        var urlSite = window.location.pathname;
        var search = 'Busqueda por lista';
        var tag = 'Inicio'
        try {
            var searchListData = {
                'event': "Interacción",
                'categoria': urlSite,
                'Accion': search,
                'Etiqueta': tag
            };
            ECImpressions.searchList(searchListData);
        } catch (e) {
            console.log(e)
        }
    });
}

// Buscar por lista - Borrar
function searchListDelete() {
    var tags = [];
    $("#header .search-wrapper .search-by-list-wrapper .search-product-list .search-product-list__control--reset").on("click", function(e, o) {
        $("#header .search-wrapper .search-by-list-wrapper .search-product-list .search-product-list__input-wrapper .search-product-list__list-items button.btn span.text").each(function(index, el) {
            tags.push($(this).text());
        });
        console.log("Se dio click a busqueda por lista FUNCION");
        var urlSite = window.location.pathname;
        var search = 'Busqueda por lista - Borrar';
        console.log(tags);
        try {
            var searchListData = {
                'event': "Interacción",
                'categoria': urlSite,
                'Accion': search,
                'Etiqueta': tags,
            };
            ECImpressions.searchListDelete(searchListData);
        } catch (e) {
            console.log(e)
        }
    });    
}

// Buscar por lista - Buscar
function searchListButton() {
    var tags = [];
    $("#header .search-wrapper .search-by-list-wrapper .search-product-list .search-product-list__control--search").on("click", function(e, o) {
        $("#header .search-wrapper .search-by-list-wrapper .search-product-list .search-product-list__input-wrapper .search-product-list__list-items button.btn span.text").each(function(index, el) {
            tags.push($(this).text());
        });
        console.log("Se dio click a busqueda por lista FUNCION");
        var urlSite = window.location.pathname;
        var search = 'Busqueda por lista - Buscar';
        console.log(tags);
        try {
            var searchListData = {
                'event': "Interacción",
                'categoria': urlSite,
                'Accion': search,
                'Etiqueta': tags,
            };
            ECImpressions.searchListButton(searchListData);
        } catch (e) {
            console.log(e)
        }
    });    
}

// Filtrar listas - Grilla
function filterList() {
    $(".product-list-wrapper .shelf-header .shelf-actions .shelf-view-type .change-view").on("click", function(e, o) {
        // console.log("Se dio click a busqueda por lista FUNCION");
        var urlSite = window.location.pathname;
        var search = 'Busqueda por lista';
        var tag = $(this).attr('data-shelf-view');
        try {
            var searchListData = {
                'event': "Interacción",
                'categoria': 'Filtro por Vista',
                'Accion': urlSite,
                'Etiqueta': tag
            };
            ECImpressions.filterList(searchListData);
        } catch (e) {
            console.log(e)
        }
    });

    $(".nm-view-type").on("click", function(e, o) {
        // console.log("Se dio click a busqueda por lista FUNCION");
        var urlSite = window.location.href;
        var search = 'Busqueda por lista';
        var tag = $(this).attr('data-value');
        urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
        try {
            var searchListData = {
                'event': "Interacción",
                'categoria': 'Filtro por Vista',
                'Accion': urlSite,
                'Etiqueta': tag
            };
            ECImpressions.filterList(searchListData);
        } catch (e) {
            console.log(e)
        }
    });
}

function filterOrder() {
    setTimeout(function () {
        $(".select2-selection__rendered").on("click", function(e, o) {
            // console.log("Se dio click en filtro por ordenacion");

            setTimeout(function () {
                console.log($(".select2-container.select2-container--orderBy .select2-dropdown .select2-results__option").length);
                $(".select2-container.select2-container--orderBy .select2-dropdown .select2-results__option").on("click", function(e, o) {
                    console.log("Se dio click en filtro por ordenacion");
                });

            },2000);
            
        });

        
    },2000);
        // var urlSite = window.location.pathname;
        // var search = 'Busqueda por lista';
        // var tag = $(this).text();
        // try {
        //     var searchListData = {
        //         'event': "Interacción",
        //         'categoria': 'Filtro por Ordenación',
        //         'Accion': urlSite,
        //         'Etiqueta': tag
        //     };
        //     ECImpressions.filterOrder(searchListData);
        // } catch (e) {
        //     console.log(e)
        // }
}

// Click Recipe
function clickRecipe() {
    $('.recipe-item__view-recipe, recipe-item__name').on('click', function(event) {
        var recipeName = $(this).parents(".recipe-item").find('.recipe-item__name').text();
        var urlSite = window.location.href;
        urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
        urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");

        var recipe = {
            name: recipeName,
            id: "Ver receta",
            category: urlSite
        };
        ECPromoImpressions.recipeClick(recipe)
    });
}


var ECImpressions = {
    impressionsBatchSize: 20,
    impressions: [],
    currentImpressions: [],
    impressionsSentToGTM: 0,
    push: function(e) {
        // console.log(e);
        e.position = ECImpressions.impressions.length + 1;
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), e.list = o, ECImpressions.impressions.push(e), ECImpressions.currentImpressions.push(e), ECImpressions.impressions.length % ECImpressions.impressionsBatchSize == 0 && (dataLayer.push({
            productImpressionsECData: void 0
        }), dataLayer.push({
            event: "enhancedEcommerceImpressions",
            productImpressionsECData: {
                ecommerce: {
                    impressions: ECImpressions.currentImpressions
                }
            }
        }), ECImpressions.impressionsSentToGTM++, ECImpressions.currentImpressions = [])
    },
    sendPendingImpressions: function() {
        ECImpressions.currentImpressions.length > 0 && (dataLayer.push({
            productImpressionsECData: void 0
        }), dataLayer.push({
            event: "enhancedEcommerceImpressions",
            productImpressionsECData: {
                ecommerce: {
                    impressions: ECImpressions.currentImpressions
                }
            }
        }), ECImpressions.impressionsSentToGTM++, ECImpressions.currentImpressions = [])
    },
    fixProductName: function(e) {
        return fixedName = e.replace(/&quot;/g, '"'), fixedName
    },
    fixBrand: function(e) {
        return fixedBrand = $(e).html(), fixedBrand.toUpperCase()
    },
    fixPrice: function(e) {
        return e = (e = (e = e.replace(",00", "")).replace("$", "")).replace(/\./g, ""), intPrice = parseInt(e), 0 == intPrice && (intPrice = void 0), intPrice
    },
    fixCategory: function(e, o) {
        return e + "/" + o
    },
    productClick: function(e) {
        // console.log("Se dio click al producto:" + e);
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productClickECEvent = {
            event: "productClick",
            productClickECData: {
                ecommerce: {
                    click: {
                        actionField: {
                            list: o
                        },
                        products: [e]
                    }
                }
            }
        }, dataLayer.push(productClickECEvent)
    },
    filterOrder: function(e) {
        dataLayer.push(e);
    },
    filterList: function(e) {
        dataLayer.push(e);
    },
    searchList: function(e) {
        dataLayer.push(e);
    },
    searchListDelete: function(e) {
        dataLayer.push(e);
    },
    searchListButton: function(e) {
        dataLayer.push(e);
    },
    getProductName: function(e) {
        return $("#" + e).text()
    },
    productViewDetail: function(e) {
        // console.log("Se visualizo el producto:" + e);
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productDetailECEvent = {
            event: "detail",
            productDetailECData: {
                ecommerce: {
                    detail: {
                        // actionField: {
                        //     list: o
                        // },
                        products: [e]
                    }
                }
            }
        }, dataLayer.push(productDetailECEvent)
    },
    addToCart: function(e) {
        // console.log("Se dio click addToCart:" + e);
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productAddECEvent = {
            event: "addToCart",
            productClickECData: {
                ecommerce: {
                    add: {
                        // actionField: {
                        //     list: o
                        // },
                        products: [e]
                    }
                }
            }
        }, dataLayer.push(productAddECEvent)
    },
    productClickList: function(e) {
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productAddECEvent = {
            event: "productClick",
            productClickECData: {
                ecommerce: {
                    Click: {
                        products: [e]
                    }
                }
            }
        }, dataLayer.push(productAddECEvent)
    },
    ProductsImpression: function(e) {
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productAddECEvent = {
            event: "productImpression",
            productsViewECData: {
                ecommerce: {
                    impressions: {
                        currencySite: o,
                        products: e
                    }
                }
            }
        }, dataLayer.push(productAddECEvent)
    },
    resumeCart: function(e, a) {
        var sustitute = a;
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productAddECEvent = {
            event: "checkout",
            productResumeECData: {
                ecommerce: {
                    checkout: {
                        actionField: {
                            step: "1",
                            option: sustitute
                        },
                        products: [e]
                    }
                }
            }
        }, dataLayer.push(productAddECEvent)
    },
    resumeCartOption: function(e, a) {
        var sustitute = a;
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productAddECEvent = {
            event: "checkoutOption",
            productClickECData: {
                ecommerce: {
                    checkout_option: {
                        actionField: {
                            step: "1",
                            option: sustitute
                        }
                    }
                }
            }
        }, dataLayer.push(productAddECEvent)
    },
    removeFromCart: function(e) {
        // console.log("se elimino producto del carrito" + e);
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productRemoveECEvent = {
            event: "removeFromCart",
            productRemoveData: {
                ecommerce: {
                    remove: {
                        // actionField: {
                        //     list: o
                        // },
                        products: [e]
                    }
                }
            }
        }, dataLayer.push(productRemoveECEvent)
    }
},
ECPromoImpressions = {
    impressionsBatchSize: 20,
    impressions: [],
    currentImpressions: [],
    impressionsSentToGTM: 0,
    push: function(e) {
        ECPromoImpressions.impressions.push(e), ECPromoImpressions.currentImpressions.push(e), ECPromoImpressions.impressions.length % ECPromoImpressions.impressionsBatchSize == 0 && (dataLayer.push({
            event: "PromoImpressions",
            promoImpressionsECData: {
                ecommerce: {
                    promoView: {
                        promotions: ECPromoImpressions.currentImpressions
                    }
                }
            }
        }), ECPromoImpressions.impressionsSentToGTM++, ECPromoImpressions.currentImpressions = [])
    },
    promoOffers: function(e) {
        // console.log("se elimino producto del carrito" + e);
        var o = window.location.pathname;
        void 0 != window.location.search && null != window.location.search && "" != window.location.search && (o += window.location.search), productRemoveECEvent = {
            event: "PromoImpressions",
            promoImpressionsECData: {
                ecommerce: {
                    promoView: {
                        promotions: e
                    }
                }
            }
        }, dataLayer.push(productRemoveECEvent)
    },
    promoClick: function(e) {
        var o = {
            event: "promotionClick",
            promoClickECData: {
                ecommerce: {
                    promoClick: {
                        promotions: [e]
                    }
                }
            }
        };
        dataLayer.push(o)
    },
    recipeClick: function(e) {
        var o = {
            event: "recipeClick",
            recipeClickECData: {
                ecommerce: {
                    promoClick: {
                        e
                    }
                }
            }
        };
        dataLayer.push(o)
    },
    sendPendingImpressions: function() {
        ECPromoImpressions.currentImpressions.length > 0 && (dataLayer.push({
            promoImpressionsECData: void 0
        }), dataLayer.push({
            event: "PromoImpressions",
            promoImpressionsECData: {
                ecommerce: {
                    promoView: {
                        promotions: ECPromoImpressions.currentImpressions
                    }
                }
            }
        }), ECPromoImpressions.impressionsSentToGTM++, ECPromoImpressions.currentImpressions = [])
    }
},
ECStorage = {
    name: "ec_ga_products",
    saveObject: function(e) {
        var o = ECStorage.getAllObjects();
        (o = o || {})[e.name] = e, localStorage.setItem(ECStorage.name, JSON.stringify(o))
    },
    deleteObject: function(e) {
        var o = ECStorage.getAllObjects();
        delete(o = o || {})[e.name], localStorage.setItem(ECStorage.name, JSON.stringify(o))
    },
    getAllObjects: function() {
        return JSON.parse(localStorage.getItem(ECStorage.name)) || {}
    }
};

window.ECImpressions = ECImpressions;
window.ECPromoImpressions = ECPromoImpressions;
window.ECStorage = ECStorage;

$(document).ready(function() {
    

    var sustitute = $(".cart-filled .cart-items .select-preferences-wrapper .preferences .item-preference.active .option-text").text();

    $(".cart-filled .cart-items .select-preferences-wrapper .preferences .item-preference").on('click', '.option-text, .icon, .radio', function(event) {
        event.preventDefault();
        sustitute = $(this).parent(".item-preference").find(".option-text").text();
        cartResumeDetailOption(sustitute);
    });

    setTimeout(function() {
        productClickInListPage();
        registerAddToCartInListPage();
    },2000);

    // $(".shelf-content .product-shelf .product-item .product-item__add-to-cart").on("click", function(e, o) {
    //     console.log('hizo click en agregar producto al carrito');
    //     registerAddToCartInListPage();
    // });
       

    MinicartActions(), promoImpressionOffers(), productClickInListPage(), productsImpressions(), productView(), cartResumeDetail(sustitute), filterOrder(), filterList(), searchListDelete(), searchListButton(), searchList(), cartResumeDetail(sustitute), registerAddToCartInProductPage(), ECImpressions.sendPendingImpressions(), $("[data-position]").each(function() {
        var dPosition = $(this).attr("data-position");
        var urlSite = window.location.href;
        urlSite = urlSite.replace("https://busqueda.tiendasjumbo.co", "");
        urlSite = urlSite.replace("https://www.tiendasjumbo.co", "");

        if (dPosition.length) {
            var productData, idImg = "";
            $(this).find("img").length ? idImg = (idImg = $(this).find("img").attr("data-src") ? $(this).find("img").attr("data-src").split("/") : $(this).find("img").attr("src").split("/"))[idImg.length - 1].replace(".jpg", "") : idImg = (idImg = $(this).attr("data-src") ? $(this).attr("data-src").split("/") : $(this).css("background-image").split("/"))[idImg.length - 1].replace(/^url|[\(\)"]/g, "").replace(".jpg", ""), productData = {
                id: idImg,
                name: idImg,
                creative: urlSite,
                position: dPosition
            }, ECPromoImpressions.push(productData), $(this).on("click", function() {
                ECPromoImpressions.promoClick(productData)
            })
        }
    }), ECPromoImpressions.sendPendingImpressions();

    
});