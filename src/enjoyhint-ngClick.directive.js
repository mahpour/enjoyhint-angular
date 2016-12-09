var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../typings/angularjs/angular.d.ts"/>
var enjoyhint;
(function (enjoyhint) {
    "use strict";
    var InteractionHelperDirective = (function () {
        function InteractionHelperDirective($rootScope) {
            this.$rootScope = $rootScope;
            this.restrict = "E"; // as an element 
            this.replace = false;
            this.priority = 0; // force it to execute before angular anchor tag
            this.scope = {
                name: "="
            };
            this.link = function (scope, element) {
                element[0].addEventListener("click", function (e) {
                    if ($("body").hasClass("enjoyhint-disabled-ui")) {
                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    }
                    else {
                        angular.element("body").triggerHandler("ngClickcustom");
                    }
                }, true);
            };
        }
        InteractionHelperDirective = __decorate([
            enjoyhint.directive("$rootScope", "$timeout")
        ], InteractionHelperDirective);
        return InteractionHelperDirective;
    }());
    enjoyhint.InteractionHelperDirective = InteractionHelperDirective;
    angular.module("enjoyhint.angular")
        .directive("a", InteractionHelperDirective);
})(enjoyhint || (enjoyhint = {}));
