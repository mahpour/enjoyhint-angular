var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angularjs/angular.d.ts"/>
var enjoyhint;
(function (enjoyhint) {
    "use strict";
    function directive() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i - 0] = arguments[_i];
        }
        return function (target) {
            var directive = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return (function (classConstructor, args, ctor) {
                    ctor.prototype = classConstructor.prototype;
                    var child = new ctor;
                    var result = classConstructor.apply(child, args);
                    return typeof result === "object" ? result : child;
                })(target, args, function () {
                    return null;
                });
            };
            directive.$inject = values;
            return directive;
        };
    }
    enjoyhint.directive = directive;
})(enjoyhint || (enjoyhint = {}));
/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="directive.ts"/>
var enjoyhint;
(function (enjoyhint) {
    "use strict";
    var InteractionHelperDirective = (function () {
        function InteractionHelperDirective($rootScope) {
            this.$rootScope = $rootScope;
            this.restrict = "E"; // as an element 
            this.replace = false;
            this.priority = 0; // force it to execute before angular anchor tag
            this.link = function (scope, element, attributes, controller) {
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
            enjoyhint.directive("$rootScope", "$timeout"), 
            __metadata('design:paramtypes', [Object])
        ], InteractionHelperDirective);
        return InteractionHelperDirective;
    }());
    enjoyhint.InteractionHelperDirective = InteractionHelperDirective;
    angular.module("enjoyhint.angular")
        .directive("a", InteractionHelperDirective);
})(enjoyhint || (enjoyhint = {}));
//# sourceMappingURL=enjoyhint-angular.js.map