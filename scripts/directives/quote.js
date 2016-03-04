angular.module('randomQuoteGenerator')
.directive('quote',function(){
   return{
       templateUrl: 'templates/quotes.html',
       replace: true
   };
});