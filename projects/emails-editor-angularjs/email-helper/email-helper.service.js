'use strict';

angular
    .module('emailHelper', [])
    .factory('EmailHelper',
        function() {
            return {
                isEmailValid: function (email) {
                    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return reg.test(email.toLowerCase());
                },

                splitEmails: function (input) {
                    if (!input) {
                        return;
                    }
                    var emails = input.trim().split(/[,;]+/).filter(function (item) {
                        return !!item;
                    });
                    emails.forEach(function (item, i) {
                        emails[i] = item.trim();
                    });
                    return emails;
                },

                generateEmail: function () {
                    var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
                    var zones = ['.com', '.net', '.ru'];
                    var email = '';
                    var domain = '';

                    var length = Math.random() * 10 + 1;
                    for (var i = 0; i < length; i++) {
                        email += possible.charAt(Math.floor(Math.random() * possible.length));
                    }
                    for (var i = 0; i < length; i++) {
                        domain += possible.charAt(Math.floor(Math.random() * possible.length));
                    }
                    domain += zones[Math.floor(Math.random() * 3)];

                    return email + '@' + domain;
                }
            }
        }
    );
