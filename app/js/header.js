var header = angular.module("headerData", []);

header.service("getHeader", function(){
    return {
        logo: "https://godevmod.com/pathToLogo",
        pageTitle: "Catalogue",
        btnBack: "Back",
        btnFind: "Find",
        btnOrder: "Order",
        btnFilter: "Filter",
        inputPlaceHolder: "Filter by product name",
        peopleViewedTitle: "People also viewed"
    }
});