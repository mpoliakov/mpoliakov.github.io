'use strict';

angular
    .module('emailsEditor', [])
    .directive('emailsEditor', ['EmailHelper', function(emailHelper) {
        return {
            restrict: 'E',
            templateUrl: 'emails-editor/emails-editor.template.html',
            scope: {},
            require: ['emailsEditor', '^^shareDialog'],
            controller: function EmailsEditorController ($scope) {

                $scope.emailHelper = emailHelper;
                $scope.emails = [];
                $scope.emailInput = '';

                var self = this;

                self.clearInput = function() {
                    $scope.emailInput = '';
                };

                self.getEmailsCount = function() {
                    return $scope.emails.filter(function (item) {
                        return emailHelper.isEmailValid(item);
                    }).length;
                };

                self.addEmails = function(items) {
                    if (items !== undefined && items.length > 0) {
                        items.forEach(function (element, index) {
                            items[index] = element.trim().toLowerCase();
                        });

                        var unique = items.filter(function (item) {
                            return $scope.emails.indexOf(item) === -1;
                        });

                        unique.forEach(function(item){
                            if (!item){
                                return;
                            }
                            $scope.emails.push(item);
                        });
                    }
                };

                self.addEmail = function(item){
                    if (!item){
                        return;
                    }
                    self.addEmails([item]);
                };

                self.deleteEmail = function(email){
                    if (!email) {
                        return;
                    }
                    $scope.emails = $scope.emails.filter(function (item) {
                        return item !== email
                    });
                };

                $scope.onKeyDown = function(event){
                    switch (event.keyCode) {
                        case 8:   // backspace
                            if (!self.emailInput) {
                                self.deleteEmail($scope.emails[$scope.emails.length - 1]);
                                event.preventDefault();
                            }
                            break;
                        case 9:   // tab
                        case 13:  // enter
                        case 32:  // enter
                        case 186: // semicolon
                        case 188: // comma
                            self.addEmail($scope.emailInput);
                            self.clearInput();
                            event.preventDefault();
                            break;
                    }
                };

                $scope.onPaste = function(event){
                    var clipboardData = event.clipboardData || (event.originalEvent && event.originalEvent.clipboardData);
                    var content = clipboardData.getData('text/plain');

                    if (content !== '') {
                        var emails = emailHelper.splitEmails(content);
                        self.addEmails(emails);
                        self.clearInput();
                        event.preventDefault();
                    }
                };

                $scope.onBlur = function(){
                    self.addEmail($scope.emailInput);
                    self.clearInput();
                };

                $scope.onDeleteEmail = function(event){
                    self.deleteEmail(event.target.getAttribute('data-id'));
                };
            },
            link: function ($scope, $elem, $attrs, $ctrls) {
                var ctrl = $ctrls[0];
                var shareDialogCtrl = $ctrls[1];
                shareDialogCtrl.register(ctrl);
            }
        };
    }]);

