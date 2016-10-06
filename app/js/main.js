var app = angular.module("testApp", ["headerData", "contentData"]);

app.controller("testCtrl", ["$scope", "getHeader", "getContent", function($scope, getHeader, getContent){

    // header data
    $scope.header = {
        logo: getHeader.logo,
        pageTitle: getHeader.pageTitle,
        btnBack: getHeader.btnBack,
        btnFind: getHeader.btnFind,
        btnOrder: getHeader.btnOrder,
        btnFilter: getHeader.btnFilter,
        inputPlaceHolder: getHeader.inputPlaceHolder,
        peopleViewedTitle: getHeader.peopleViewedTitle
    }

    // content data
    $scope.generalDataArr = [];
    getContent.forEach( function(item) {  // productName, productDsc, productPrice, currencyId, productImage
         $scope.generalDataArr.push(item);
    });

    // block people also viewed
    var also = [];
    getContent.forEach( function(item, i) {
        if (i == 5 || i == 7 || i == 6) {
            also.push(item);
        }
    });

    var swapArrayElements = function(arr, indexA, indexB) {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;

        return arr;
    };

    $scope.alsoSorted = swapArrayElements(also, 1, 2);
    console.log($scope.alsoSorted);

    // filter
    $scope.filterData = function () {
        $scope.matchSearch = $scope.fieldInput;
    }


}]);