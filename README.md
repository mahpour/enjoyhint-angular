# enjoyhint-angular
Added support to work with angular ngClick events

## How to use
1. Clone/grab the enjoyhint library from [mahpour/enjoyhint](https://github.com/mahpour/enjoyhint)
2. Add 'enjoyhint' to your application module dependencies
    ```javascript
    angular.module('app',['enjoyhint',...])
    ```
2. Use 'ngClick' as the value for `event` along with `event_type: "custom"`in your enjoyhint steps configuration. Example:

    ```json
    [{
        "selector": "a.dropdown-toggle",
        "event": "ngClick",
        "event_type": "custom",
        "description": "To begin, click on drop down menu near the top of the screen.",
        "showSkip": true
    }, 
    {
        "selector": "ul.dropdown-menu:visible li:nth-child(2) a",
        "timeout": "300",
        "event_type": "custom",
        "event": "ngClick",
        "description": "Now, select  the 2nd item",
        "showSkip": true
    }]
    ```