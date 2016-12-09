/// <reference path="../typings/angularjs/angular.d.ts"/>
module enjoyhint {
    "use strict";

    export function directive(...values: string[]): any {
        return (target: Function) => {
            const directive: Function = (...args: any[]): Object => {
                return ((classConstructor: Function, args: any[], ctor: any): Object => {
                    ctor.prototype = classConstructor.prototype;
                    const child: Object = new ctor;
                    const result: Object = classConstructor.apply(child, args);
                    return typeof result === "object" ? result : child;
                })(target,
                    args,
                    (): any => {
                        return null;
                    });
            };
            directive.$inject = values;
            return directive;
        };
    }
}