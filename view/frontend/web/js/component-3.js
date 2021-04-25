define(['jquery', 'uiComponent', 'ko'],
    function ($, Component, ko) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Magento_KnockoutJs/booklists'
            },
            initialize: function () {
                this._super();
                this.booknamelist = ko.observableArray([]);
                this.bookname = ko.observable('');
            },

            addNewBook: function () {
                if (this.bookname() != ''){
                    this.booknamelist.push({name:this.bookname()});
                }
                this.bookname('');
            }


        });
    }
);
