var content = angular.module("contentData", []);

content.service("getContent", function(){
    return [{
        "productName": "HP 255 Laptop Computer",
        "productDsc": "Windows 7 Pro 64 bit Operating System with free upgrade to Windows 8",
        "productPrice": "1000",
        "currencyId": "$",
        "productImage": "https://godevmod.com/laptop1"
    },
    {
        "productName": "Samsung Series 5 550P",
        "productDsc": "Windows 7 Pro 64 bit Operating System with free upgrade to Windows 8",
        "productPrice": "850",
        "currencyId": "€",
        "productImage": "https://godevmod.com/laptop2"
    },
    {
        "productName": "Sony Vaio Fit 15E",
        "productDsc": "Windows 7 Pro 64 bit Operating System with free upgrade to Windows 8",
        "productPrice": "438",
        "currencyId": "€",
        "productImage": "https://godevmod.com/laptop3"
    },
    {
        "productName": "Sony Vaio Fit 15E",
        "productDsc": "Windows 7 Pro 64 bit Operating System with free upgrade to Windows 8",
        "productPrice": "438",
        "currencyId": "£",
        "productImage": "https://godevmod.com/laptop3"
    },
    {
        "productName": "Sony Vaio Fit 15E",
        "productDsc": "Windows 7 Pro 64 bit Operating System with free upgrade to Windows 8",
        "productPrice": "438",
        "currencyId": "$",
        "productImage": "https://godevmod.com/laptop3"
    },
    {
        "productName": "Test name for laptop",
        "productDsc": "Laptop description goes here",
        "productPrice": "950",
        "currencyId": "$",
        "justViewed": true,
        "productImage": "https://godevmod.com/laptop4"
    },
    {
        "productName": "Test name for laptop2",
        "productDsc": "Laptop description goes here",
        "productPrice": "438",
        "currencyId": "£",
        "justViewed": true,
        "productImage": "https://godevmod.com/laptop5"
    },
    {
        "productName": "Test name for laptop3",
        "productDsc": "Laptop description goes here",
        "productPrice": "5000",
        "currencyId": "€",
        "justViewed": true,
        "productImage": "https://godevmod.com/laptop6"
    }]
});