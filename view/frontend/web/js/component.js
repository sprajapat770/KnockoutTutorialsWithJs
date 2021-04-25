define(['uiComponent','ko'],function(Component,ko){
    'use strict';

    return Component.extend({
        personName: ko.observable('suraj'),
        personAge: ko.observable(27)
    });
});
