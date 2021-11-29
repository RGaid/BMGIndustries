// Override Settings
var bcSfFilterSettings = {
        showLimitList: '12,24,48,96',
        activeFilterScrollbar: !1,
        loadProductFirst: false,
        sortingList: ['manual', 'price-ascending', 'price-descending', 'title-s-ascending', 'title-s-descending', 'published-descending', 'published-ascending', 'sale-descending'],
        showFilterOptionCount: false,
        capitalizeFirstLetterFilterOptionValues: true,
        capitalizeFilterOptionValues: false
    },
    template: {
        filterTreeMobileButton: '<button id="bc-sf-filter-tree-mobile-button" type="button">FILTER BY</button>'
    },
    label: {
        sorting: {
            'manual': bcSfFilterConfig.label.sorting_featured,
            'title-s-ascending': bcSfFilterConfig.label.sorting_title_ascending,
            'title-s-descending': bcSfFilterConfig.label.sorting_title_descending,
            'price-ascending': bcSfFilterConfig.label.sorting_price_ascending,
            'price-descending': bcSfFilterConfig.label.sorting_price_descending,
            'published-descending': bcSfFilterConfig.label.sorting_date_ascending,
            'published-ascending': bcSfFilterConfig.label.sorting_date_descending,
            'sale-descending': '% Off',
        }
    }
};
  
// Declare Templates
var bcSfFilterTemplate = {
    'soldOutClass': 'soldout',
    'onSaleClass': 'onsale',
    'textCenterClass': 'text-center',
    'imageSoldOutClass': 'grid-link__image-sold-out',
    'badgeSmallClass': 'badge__text--small',
  
    'saleLabelHtml': '<span class="badge badge--sale"><span class="badge__text {{itemBadgeSmallClass}}">{{itemPercentSale}}%<br>off</span></span>',
    'soldOutLabelHtml': '<span class="badge badge--sold-out"><span class="badge__text {{itemBadgeSmallClass}}">' + bcSfFilterConfig.label.sold_out + '</span></span>',
    'vendorHtml': '<p class="grid-link__title grid-link__vendor">{{vendor}}</p>',
    'reviewHtml': '<span class="stamped-product-reviews-badge" data-id="{{itemId}}" data-product-sku="{{itemSku}}" data-product-type="{{itemType}}" data-product-title="{{itemTitle}}"></span>',
  
    'productGridItemHtml':  '<div class="grid__item wide--one-third medium--one-half small--one-half">' +
                                '<div class="prodbox item{{itemId}} {{soldOutClass}} {{onSaleClass}}">' +
                                    '<div class="relatedprodgriditemimgholder" >' +
                                        '<a href="{{itemUrl}}" class="grid-link">' +
                                            '<div class="grid-link__image grid-link__image--product" style="heigh: 280px">' +
                                                '<div class="productimageholder">' +
                                                    '{{itemSaleLabel}}' +
                                                    '{{itemSoldOutLabel}}' +
                                                    '<div class="productimageholderinner">' +
                                                        '<div class="responsive-image__wrapper ">' +
                                                            '{{itemImages}}' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +
                                        '</a>' +
                                    '</div>' +
                                    '<div class="listitemholder centeralign">' +
                                        '{{itemAddToCart}}' +
                                        '<div class="yotpogridholder">{{itemReview}}</div>' +
                                        '<a href="{{itemUrl}}" class="grid-link {{textCenterClass}}">' +
                                            '<div class="grid-link__title relatedprodgridlinktitle">{{itemTitle}}</div>' +
                                        '</a>' +
                                        '<span class="relatedprodgridlinkprice">' +
                                            '{{itemPrice}}' +
                                        '</span>' +
                                    '</div>' +
                                '</div>' +
                            '</div>',
  
  
    'productListItemHtml': '<div class="wide--one-quarter large--one-quarter medium-down--one-half listview">' +
                                '<div class="{{soldOutClass}} {{onSaleClass}}">' +
                                    '<a href="{{itemUrl}}" class="grid-link {{textCenterClass}}">' +
                                        '<span class="grid-link__image {{imageSoldOutClass}} grid-link__image--product" style="height: 327px;">' +
                                            '{{itemSaleLabel}}' +
                                            '{{itemSoldOutLabel}}' +
                                            '<span class="grid-link__image-centered"><img src="{{itemThumbUrl}}" alt="{{itemTitle}}" /></span>' +
                                        '</span>' +
                                    '</a>' +
                                    '<div class="listitemholder">' +
                                        '<a href="{{itemUrl}}" class="grid-link {{textCenterClass}}">' +
                                            '<div class="grid-link__title">{{itemTitle}}</div>' +
                                        '</a>' +
                                        '{{itemPrice}}' +
                                        '{{itemReview}}' +
                                        '{{itemVendor}}' +
                                        '<div class="space20"></div>' +
                                        '<span class="variant-sku">SKU: {{itemSkuLabel}} </span>' +
                                        '<div class="product-single_free_shipping">' +
                                            '<p>Free Shipping Over $99.99 (CAD)<br>$9.99 On Other Orders</p>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>',
  
    'previousHtml': '<li><a href="{{itemUrl}}"><i class="fa fa-caret-left" aria-hidden="true"></i></a></li>',
    'nextHtml': '<li><a href="{{itemUrl}}"><i class="fa fa-caret-right" aria-hidden="true"></i></a></li>',
    'pageItemHtml': '<li><a href="{{itemUrl}}">{{itemTitle}}</a></li>',
    'pageItemSelectedHtml': '<li class="active"><span>{{itemTitle}}</span></li>',
    'pageItemRemainHtml': '<li><span>{{itemTitle}}</span></li>',
    'paginateHtml': '<ul class="pagination-custom">{{previous}}{{pageItems}}{{next}}</ul>',
  
    'sortingHtml': '<label for="SortBy">' + bcSfFilterConfig.label.sorting + '</label><select name="SortBy" id="SortBy">{{sortingItems}}</select>',
    'showLimitHtml': '<label>Show</label><select>{{showLimitItems}}</select>',
  
    'breadcrumbHtml': '<nav class="breadcrumb" role="navigation" aria-label="breadcrumbs"><a href="/" title="Back to the frontpage">Home</a><span aria-hidden="true" class="breadcrumb__sep">›</span><span>{{itemSelected}}</span></nav>'
  };
  
// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function (data, index) {

    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100;

    var soldOut = !data.available;
    var onSale = data.compare_at_price_min > data.price_min;
    var priceVaries = data.price_min != data.price_max;
    var images = data.images_info;

    var itemHtml = bcSfFilterTemplate.productGridItemHtml;

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);

    // Add onSale class
    var onSaleClass = onSale ? bcSfFilterTemplate.onSaleClass : '';
    itemHtml = itemHtml.replace(/{{onSaleClass}}/g, onSaleClass);

    var textCenterClass = bcSfFilterConfig.section.center_grid_link ? bcSfFilterTemplate.textCenterClass : '';
    itemHtml = itemHtml.replace(/{{textCenterClass}}/g, textCenterClass);

    var imageSoldOutClass = bcSfFilterConfig.section.show_sold_out_circle ? bcSfFilterTemplate.imageSoldOutClass : '';
    itemHtml = itemHtml.replace(/{{imageSoldOutClass}}/g, imageSoldOutClass);

    // Add onSale label
    if (onSale && bcSfFilterConfig.section.show_sale_circle) {
        // {{ featured.compare_at_price_max | minus: featured.price | times: 100.0 | divided_by: featured.compare_at_price_max | money_without_currency | times: 100 | remove: '.0'}}%<br>off
        var percentSale = Math.round((data.compare_at_price_min - data.price_min) / data.compare_at_price_min * 100);
        var itemSaleLabelHtml = (bcSfFilterConfig.label.sale.size > 7) ? bcSfFilterTemplate.saleLabelHtml.replace(/{{itemBadgeSmallClass}}/g, bcSfFilterTemplate.badgeSmallClass) : bcSfFilterTemplate.saleLabelHtml.replace(/{{itemBadgeSmallClass}}/g, '');
        itemSaleLabelHtml = itemSaleLabelHtml.replace(/{{itemPercentSale}}/g, percentSale);
        itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);
    } else {
        itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, '');
    }

    // Add soldOut label
    if (soldOut && bcSfFilterConfig.section.show_sold_out_circle) {
        var itemSoldOutHtml = (bcSfFilterConfig.label.sold_out.size > 9) ? bcSfFilterTemplate.soldOutLabelHtml.replace(/{{itemBadgeSmallClass}}/g, bcSfFilterTemplate.badgeSmallClass) : bcSfFilterTemplate.soldOutLabelHtml.replace(/{{itemBadgeSmallClass}}/g, '');
        itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutHtml);
    } else {
        itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, '');
    }


    // Add Thumbnail
    var images = Object.keys(data.images).map(function (key) {
        return data.images[key];
    });
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0], '600x') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

    // Add item Cart
    var itemCartHtml = '';
    var firstVariant = data['variants'][0];
    itemCartHtml += '<form method="post" action="/cart/add" class="gridproductform bcform">' +
        '<input type="hidden" name="id" value="' + (firstVariant.available ? firstVariant.id : '') + '" />' +
        '<button type="submit" name="add" id="AddToCart" class="btn xquickadd" ' + (soldOut ? 'disabled' : '') + '>' +
        (soldOut ? 'Sold out' : 'Add to cart') +
        '</button>' +
        '</form>';
    itemHtml = itemHtml.replace(/{{itemAddToCart}}/g, itemCartHtml);

    // Add Vendor
    var itemVendorHtml = bcSfFilterConfig.section.vendor_enable ? bcSfFilterTemplate.vendorHtml.replace(/{{vendor}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

    // Add Price
    var itemPriceHtml = '';
    if (data.title != '') {
        itemPriceHtml += '<p class="grid-link__meta">';
        if (priceVaries) {
            itemPriceHtml += (bcSfFilterConfig.label.from_price).replace(/{{ price }}/g, this.formatMoney(data.price_min, this.moneyFormat));
        } else {
            if (onSale) {
                itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.sale_price + '</span>';
            } else {
                itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            }
            itemPriceHtml += this.formatMoney(data.price_min, this.moneyFormat);
        }
        if (onSale) {
            itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            itemPriceHtml += '<s class="grid_product_price_cross">' + this.formatMoney(data.compare_at_price_min, this.moneyFormat) + '</s> ';
          itemPriceHtml += "<br/><span class='grid_prod_savngs'>Save: "+ this.formatMoney(data.compare_at_price_min - data.price_min, this.moneyFormat) +"</span>"
        }
        itemPriceHtml += '</p>';
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add Review
    var itemReviewHtml = bcSfFilterConfig.section.show_review ? bcSfFilterTemplate.reviewHtml : '';
    itemHtml = itemHtml.replace(/{{itemReview}}/g, itemReviewHtml);

    // Add item images
    var itemImagesHtml = '';
    var aspect_ratio = 1;
    if (images.length > 0) {
        aspect_ratio = images[0]['width'] / images[0]['height'];
    }
    var imgId = 'ImageWrapper-'+ data.id;
    itemImagesHtml += '<img id="' + imgId + '" ' +
    'class="responsive-image__wrapper lazyload Image--fadeIn" ' +
    'src="' + this.getFeaturedImage(images, '300x300') + '" ' +
    'data-src="' + this.getFeaturedImage(images, '{width}x') + '" ' +
    'data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" ' +
    'data-aspectratio="' + aspect_ratio + '" ' +
    'data-sizes="auto" ' +
    'alt="{{itemTitle}}"><span class="Image__Loader"/></span>';
    itemImagesHtml += '<noscript><img src="' + this.getFeaturedImage(images, '2048x2048') + '" alt="{{itemTitle}}"></noscript>';
    itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);

    // Add main attribute
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(/{{itemType}}/g, data.product_type);
  itemHtml = itemHtml.replace(/{{itemSku}}/g, data['variants'][0]['sku']);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    return itemHtml;
};

// List
BCSfFilter.prototype.buildProductListItem = function (data) {
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100;

    var soldOut = !data.available;
    var onSale = data.compare_at_price_min > data.price_min;
    var priceVaries = data.price_min != data.price_max;

    var itemHtml = bcSfFilterTemplate.productListItemHtml;

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);

    // Add onSale class
    var onSaleClass = onSale ? bcSfFilterTemplate.onSaleClass : '';
    itemHtml = itemHtml.replace(/{{onSaleClass}}/g, onSaleClass);

    var textCenterClass = bcSfFilterConfig.section.center_grid_link ? bcSfFilterTemplate.textCenterClass : '';
    itemHtml = itemHtml.replace(/{{textCenterClass}}/g, textCenterClass);

    var imageSoldOutClass = bcSfFilterConfig.section.show_sold_out_circle ? bcSfFilterTemplate.imageSoldOutClass : '';
    itemHtml = itemHtml.replace(/{{imageSoldOutClass}}/g, imageSoldOutClass);

    // Add onSale label
    if (onSale && bcSfFilterConfig.section.show_sale_circle) {
        // {{ featured.compare_at_price_max | minus: featured.price | times: 100.0 | divided_by: featured.compare_at_price_max | money_without_currency | times: 100 | remove: '.0'}}%<br>off
        var percentSale = Math.round((data.compare_at_price_max - data.price_min) / data.compare_at_price_max * 100);
        var itemSaleLabelHtml = (bcSfFilterConfig.label.sale.size > 7) ? bcSfFilterTemplate.saleLabelHtml.replace(/{{itemBadgeSmallClass}}/g, bcSfFilterTemplate.badgeSmallClass) : bcSfFilterTemplate.saleLabelHtml.replace(/{{itemBadgeSmallClass}}/g, '');
        itemSaleLabelHtml = itemSaleLabelHtml.replace(/{{itemPercentSale}}/g, percentSale);
        itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);
    } else {
        itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, '');
    }

    // Add soldOut label
    if (soldOut && bcSfFilterConfig.section.show_sold_out_circle) {
        var itemSoldOutHtml = (bcSfFilterConfig.label.sold_out.size > 9) ? bcSfFilterTemplate.soldOutLabelHtml.replace(/{{itemBadgeSmallClass}}/g, bcSfFilterTemplate.badgeSmallClass) : bcSfFilterTemplate.soldOutLabelHtml.replace(/{{itemBadgeSmallClass}}/g, '');
        itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutHtml);
    } else {
        itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, '');
    }

    // Add Thumbnail
    var images = Object.keys(data.images).map(function (key) {
        return data.images[key];
    });
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0], '246x246') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

    // Add Vendor
    var itemVendorHtml = bcSfFilterConfig.section.vendor_enable ? bcSfFilterTemplate.vendorHtml.replace(/{{vendor}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

    // Add Price
    var itemPriceHtml = '';
    if (data.title != '') {
        itemPriceHtml += '<p class="grid-link__meta">';
        if (onSale) {
            itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            itemPriceHtml += '<s class="grid-link__sale_price">' + this.formatMoney(data.compare_at_price_min, this.moneyFormat) + '</s> ';
        }
        if (priceVaries) {
            itemPriceHtml += (bcSfFilterConfig.label.from_price).replace(/{{ price }}/g, this.formatMoney(data.price_min, this.moneyFormat));
        } else {
            if (onSale) {
                itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.sale_price + '</span>';
            } else {
                itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            }
            itemPriceHtml += this.formatMoney(data.price_min, this.moneyFormat);
        }
        itemPriceHtml += '</p>';
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add Review
    var itemReviewHtml = bcSfFilterConfig.section.show_review ? bcSfFilterTemplate.reviewHtml : '';
    itemHtml = itemHtml.replace(/{{itemReview}}/g, itemReviewHtml);

    // Add Sku
    itemHtml = itemHtml.replace(/{{itemSkuLabel}}/g, data['variants'][0]['sku']);

    // Add Sku
    itemHtml = itemHtml.replace(/{{itemType}}/g, data.product_type);

    // Add main attribute
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);

    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    return itemHtml;
};

// Build Pagination
BCSfFilter.prototype.buildPagination = function (totalProduct) {
    // Get page info
    var currentPage = parseInt(this.queryParams.page);
    var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

    // If it has only one page, clear Pagination
    if (totalPage == 1) {
        jQ(this.selector.bottomPagination).html('');
        return false;
    }

    if (this.getSettingValue('general.paginationType') == 'default') {
        var paginationHtml = bcSfFilterTemplate.paginateHtml;

        // Build Previous
        var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousHtml : '';
        previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
        paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

        // Build Next
        var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextHtml : '';
        nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
        paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

        // Create page items array
        var beforeCurrentPageArr = [];
        for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
            beforeCurrentPageArr.unshift(iBefore);
        }
        if (currentPage - 4 > 0) {
            beforeCurrentPageArr.unshift('...');
        }
        if (currentPage - 4 >= 0) {
            beforeCurrentPageArr.unshift(1);
        }
        beforeCurrentPageArr.push(currentPage);

        var afterCurrentPageArr = [];
        for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
            afterCurrentPageArr.push(iAfter);
        }
        if (currentPage + 3 < totalPage) {
            afterCurrentPageArr.push('...');
        }
        if (currentPage + 3 <= totalPage) {
            afterCurrentPageArr.push(totalPage);
        }

        // Build page items
        var pageItemsHtml = '';
        var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
        for (var iPage in pageArr) {
            if (pageArr[iPage] == '...') {
                pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
            } else {
                pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
            }
            pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
            pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
        }
        paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

        jQ(this.selector.bottomPagination).html(paginationHtml);
    }
};

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function () {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content 
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                sortingItemsHtml += '<option value="' + k + '">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            console.log(html);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// Build Show Limit block
BCSfFilter.prototype.buildFilterShowLimit = function () {
    if (bcSfFilterTemplate.hasOwnProperty('showLimitHtml')) {
        jQ(this.selector.topShowLimit).html('');

        var numberList = this.getSettingValue('general.showLimitList');
        if (numberList != '') {
            // Build content
            var showLimitItemsHtml = '';
            var arr = numberList.split(',');
            for (var k = 0; k < arr.length; k++) {
                showLimitItemsHtml += '<option value="' + arr[k] + '">' + arr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
            jQ(this.selector.topShowLimit).html(html);

            // Set value
            jQ(this.selector.topShowLimit + ' select').val(this.queryParams.limit);
        }
    }
};

// Build Display type
BCSfFilter.prototype.buildFilterDisplayType = function () {
    var itemHtml = '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="btn btnalt2 bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><span class="icon icon-grid-view" aria-hidden="true"></span></span></a>';
    itemHtml += ' <a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="btn btnalt2 bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><span class="icon icon-list-view" aria-hidden="true"></span></span></a>';
    jQ(this.selector.topDisplayType).html(itemHtml);

    // Active current display type
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
    if (this.queryParams.display == 'list') {
        jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
    } else if (this.queryParams.display == 'grid') {
        jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
    }
};

BCSfFilter.prototype.buildBreadcrumb = function (data) {
    var breadcrumbHtml = bcSfFilterTemplate.breadcrumbHtml.replace(/{{itemSelected}}/g, data);
    jQ(this.selector.breadcrumb).html(breadcrumbHtml);
};

BCSfFilter.prototype.buildAdditionalElements = function (data, eventType) {
    if (jQ("#bc-sf-filter-tree-mobile-button").is(":visible") &&
        jQ("#bc-sf-filter-tree").html().trim().length == 0) {
        jQ("#bc-sf-filter-tree-mobile-button").hide();
    }
    var currentUrl = window.location.href.split('?')[0] + '?view=description';
    jQ.ajax({
        method: 'GET',
        url: currentUrl,
        //dataType: 'json',
        success: function (data) {
            var result = JSON.parse(data);
            //console.log(data);
            if (result.collection.hasOwnProperty('title') && result.collection.title != '' && result.collection.hasOwnProperty('description') && result.collection.description != '') {
                jQ('#bc-sf-filter-collection-detail').show();
            } else {
                jQ('#bc-sf-filter-collection-detail').hide();
            }

            if (result.collection.hasOwnProperty('title') && result.collection.title != '') {
                jQ('.bc-sf-filter-collection-title').html(result.collection.title);

            }
            if (result.collection.hasOwnProperty('description') && result.collection.description != '') {
                jQ('.bc-sf-filter-collection-description').html(result.collection.description);
            }
            if (result.collection.hasOwnProperty('page_description') && result.collection.page_description != '') {
                jQ('.bc-sf-filter-page-description').html(result.collection.page_description);
            }

        },
    });
    // Recall Ajaxify
//    Shopify.AjaxifyCart.init();
};

// Build Filter option Label
BCSfFilter.prototype.buildFilterOptionLabel = function (label, productNumber, fOData) {
    // Customize label
    label = this.customizeFilterOptionLabel(label, fOData.prefix, fOData.filterType, fOData.displayAllValuesInUppercaseForm);
    label = label.toUpperCase();
    // Build Labels
    var itemLabelHtml = this.getTemplate('filterOptionLabel').replace(/{{itemValue}}/g, label);
    if (this.getSettingValue('general.showFilterOptionCount') && fOData.displayType != 'box') {
        if (fOData.keepValuesStatic !== true && productNumber !== null && ((productNumber > 0 && this.getSettingValue('general.showOutOfStockOption') == false) || this.getSettingValue('general.showOutOfStockOption') == true)) {
            return itemLabelHtml.replace(/{{itemAmount}}/g, '(' + productNumber + ')');
        }
    }
    return itemLabelHtml.replace(/{{itemAmount}}/g, '');
}

// Build Filter Option item in general
BCSfFilter.prototype.buildFilterOptionItem = function (html, iLabel, iValue, fOType, fOId, fOLabel, fODisplayType, fOSelectType, fOItemValue, fOData) {
    var keepValuesStatic = fOData.hasOwnProperty('keepValuesStatic') ? fOData.keepValuesStatic : false;

    // Get Title which is only text and doesn't contain "product count"
    if (fOType == 'review_ratings' && this.getSettingValue('general.ratingSelectionStyle') == 'text') {
        var title = this.getReviewRatingsLabel(fOItemValue.from);
    } else {
        var title = this.customizeFilterOptionLabel(iLabel, fOData.prefix, fOType, fOData.displayAllValuesInUppercaseForm);
    }
    //console.log(title);

    // Get product number
    if (keepValuesStatic === true) var productNumber = null;
    else var productNumber = fOItemValue.hasOwnProperty('doc_count') ? fOItemValue.doc_count : 0;

    // Build main attributes
    html = html.replace(/{{itemLabel}}/g, this.buildFilterOptionLabel(iLabel, productNumber, fOData));
    html = html.replace(/{{itemLink}}/g, this.buildFilterOptionLink(fOId, iValue, fOType, fODisplayType, fOSelectType, keepValuesStatic));
    html = html.replace(/{{itemValue}}/g, encodeURIParamValue(iValue));
    html = html.replace(/{{itemTitle}}/g, title);
    html = html.replace(/{{itemFunc}}/g, "onInteractWithFilterOptionValue(event, this, '" + fOType + "', '" + fODisplayType + "', '" + fOSelectType + "', '" + keepValuesStatic + "')");
    // Check if item is selected or not
    html = this.checkFilterOptionSelected(fOId, iValue, fOType, fODisplayType) ? html.replace(/{{itemSelected}}/g, 'selected') : html.replace(/{{itemSelected}}/g, '');
    // Add additional attributes
    var htmlElement = jQ(html);
    htmlElement.children().attr({
        'data-id': fOId,
        'data-value': fOType == 'collection' ? encodeURIParamValue(iValue.split(':')[0]) : encodeURIParamValue(iValue),
        'data-parent-label': fOLabel,
        'data-title': title,
        'data-count': productNumber
    });
    // Add nofollow to all filter option links to increase SEO
    if (this.getSettingValue('general.enableSeo') && fOType != 'collection') {
        htmlElement.children().attr('rel', 'nofollow');
    }
    // Build Collection scope (for only Collection type)
    if (fOType == 'collection') htmlElement.children().attr('data-collection-scope', fOItemValue.key);
    return jQ(htmlElement)[0].outerHTML;
};

BCSfFilter.prototype.buildFilterTreeMobileButtonEvent = function () {
    var _this = this;
    var filterSelector = this.getSelector('filterTree');
    var mobileBtnSelector = this.getSelector('filterTreeMobileButton');
    jQ(mobileBtnSelector).unbind('click');
    jQ(mobileBtnSelector).on('click', function () {
        var style = _this.mobileStyle;
        // Full Width style
        if (style == 'style2' || style == 'style3') {
            jQ(filterSelector).toggleClass('bc-sf-filter-tree-mobile-open');
            // Build mobile content
            _this.buildFilterTreeMobile();
            // Remove scrollbar
            _this.removeScrollbar(jQ('.' + _this.class.filterBlockContent));
        }
        // Default style
        else {
            // Change button text when clicking
            if (_this.getSettingValue('general.changeMobileButtonLabel')) {
                var openClass = _this.class.mobileButtonOpen;
                jQ(this).toggleClass(openClass);
                var label = jQ(this).hasClass(openClass) ? _this.getSettingValue('label.refineMobileCollapse') : _this.getSettingValue('label.refineMobile');
                jQ(this).text(label);
            }
            jQ(filterSelector).slideToggle(function () {
                jQ(filterSelector).toggleClass('bc-sf-filter-tree-mobile-open');
                _this.buildFilterOptionBoxStyle(jQ(this));
                // Re-initialize jscrollpane
                _this.buildFilterScrollbar();
            });
        }
    });
};
// After Build Filter Tree
BCSfFilter.prototype.afterBuildFilterTree = function (data, filterTreeId) {
    // Wrap all filter option blocks for styling
    jQ(this.getSelector('filterTree') + filterTreeId).children().wrapAll('<div id="bc-sf-filter-options-wrapper"></div>');
    if (this.isMobile()) {
        var clearButton = '<a href="javascript:;" class="button-clear-all bc-sf-filter-clear-all" onclick="clearAllFilterOptions(event)">Clear All</a>';
        if (jQ(this.getSelector('filterTree') + filterTreeId).find('.bc-sf-filter-clear-all').length === 0) {
            jQ(this.getSelector('filterTree') + filterTreeId).append(clearButton);
        }
    }
    // Box Style
    this.buildFilterOptionBoxStyle(null, filterTreeId);
    // Add scroll bar for block has long content, except the filter option which is range
    this.buildFilterShowMore();
    // Collapse all filter options by default
    if (!this.checkIsFullWidthMobile()) this.collapseFilterOption();
};

BCSfFilter.prototype.buildExtrasProductList = function (data) {
    if (typeof StampedFn !== 'undefined' && typeof StampedFn.loadBadges == 'function') {
        StampedFn.loadBadges();
    }
};

/* Start Fix version 2.3.2 */
BCSfFilter.prototype.addFilterTreeItem=function(e,r,t,i){e=jQ.parseHTML(e),i=void 0!==i?i:this.getSelector("filterTree");void 0!==r&&"before"==r?jQ(i+t).prepend(e):jQ(i+t).append(e)};
/* End Fix version 2.3.2 */

// Fix image url issue of swatch option
function getFilePath(fileName, ext, version) {
    var self = bcsffilter;
    var ext = typeof ext !== 'undefined' ? ext : 'png';
    var version = typeof version !== 'undefined' ? version : '1';
    var prIndex = self.fileUrl.lastIndexOf('?');
    if (prIndex > 0) {
        var filePath = self.fileUrl.substring(0, prIndex);
    } else {
        var filePath = self.fileUrl;
    }
    filePath += fileName + '.' + ext + '?v=' + version;
    return filePath;
}

// Build Default layout
BCSfFilter.prototype.buildDefaultElements=function(){var isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,isSafari=/Safari/.test(navigator.userAgent),isBackButton=window.performance&&window.performance.navigation&&2==window.performance.navigation.type;if(!(isiOS&&isSafari&&isBackButton)){var self=this,url=window.location.href.split("?")[0],searchQuery=self.isSearchPage()&&self.queryParams.hasOwnProperty("q")?"&q="+self.queryParams.q:"";window.location.replace(url+"?view=bc-original"+searchQuery)}};


BCSfFilter.prototype.getFilterData=function(eventType,errorCount){function BCSend(eventType,errorCount){var self=bcsffilter;var errorCount=typeof errorCount!=="undefined"?errorCount:0;self.showLoading();if(typeof self.buildPlaceholderProductList=="function"){self.buildPlaceholderProductList(eventType)}self.beforeGetFilterData(eventType);self.prepareRequestParams(eventType);self.queryParams["callback"]="BCSfFilterCallback";self.queryParams["event_type"]=eventType;var url=self.isSearchPage()?self.getApiUrl("search"):self.getApiUrl("filter");var script=document.createElement("script");script.type="text/javascript";var timestamp=(new Date).getTime();script.src=url+"?t="+timestamp+"&"+jQ.param(self.queryParams);script.id="bc-sf-filter-script";script.async=true;var resendAPITimer,resendAPIDuration;resendAPIDuration=2e3;script.addEventListener("error",function(e){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}if(errorCount<3){errorCount++;if(resendAPITimer){clearTimeout(resendAPITimer)}resendAPITimer=setTimeout(self.getFilterData("resend",errorCount),resendAPIDuration)}else{self.buildDefaultElements(eventType)}});document.getElementsByTagName("head")[0].appendChild(script);script.onload=function(){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}}}this.requestFilter(BCSend,eventType,errorCount)};BCSfFilter.prototype.requestFilter=function(sendFunc,eventType,errorCount){sendFunc(eventType,errorCount)};
