/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="directive.ts"/>
module enjoyhint {

"use strict";

@directive("$rootScope", "$timeout")
export class InteractionHelperDirective implements ng.IDirective {
    public restrict = "E"; // as an element 
    public replace = false;
    public priority = 0; // force it to execute before angular anchor tag

    constructor(private $rootScope: ng.IRootScopeService) {

    }
    public link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: JQuery, attributes: ng.IAttributes, controller: any) => {
        element[0].addEventListener("click", (e: any) => {
            if ($("body").hasClass("enjoyhint-disabled-ui")) {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
            } else {
                angular.element("body").triggerHandler("ngClickcustom");
            }
        }, true);
    };
}
angular.module("enjoyhint.angular")
    .directive("a", <any>InteractionHelperDirective);
}