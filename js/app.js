var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", { templateUrl : "pages/login.html",controller: "loginCtrl"})
    .when("/dashboard", {templateUrl : "pages/dashboard.html", controller:"dashboardControler"});
});
app.controller('loginCtrl',function($scope,$location,$http) {
    $scope.submit = function(){
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
        if(username == "admin" && password == "admin"){
          $location.path('/dashboard');
        }else {
          alert("password is wrong");
        }
    }

      $scope.storedata = function(obj) {
        var fd = new FormData();
        fd.append("name", document.getElementById('name').value);
        fd.append("mobile", document.getElementById('mobile').value);
        fd.append("email", document.getElementById('email').value);
        fd.append("password", document.getElementById('password').value);
        debugger
          $http.post('js/data.json', fd).success(function(data){
                debugger
                $scope.submitting = false;
            }).error(function(data){
                console.log(':(');
                $scope.submitting = false;
            });
            }

}).
controller('dashboardControler',function($scope,$location,$http) {
       $http.get('js/data.json')
             .then(function(res){
                $scope.todos = res.data;
              });
     });
