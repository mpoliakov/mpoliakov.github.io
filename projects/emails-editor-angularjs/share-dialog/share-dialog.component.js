'use strict';

angular
    .module('shareDialog', [])
    .component('shareDialog', {
            templateUrl: 'share-dialog/share-dialog.template.html',
            controller: ['$scope', 'EmailHelper', function ShareDialogController($scope, emailHelper) {

                var self = this;

                self.register = function (childCtrl) {
                    self.childCtrl = childCtrl;
                };

                $scope.addRandomEmail = function () {
                    if (self.childCtrl && self.childCtrl.addEmail) {
                        self.childCtrl.addEmail(emailHelper.generateEmail());
                    }
                };

                $scope.getEmailsCount = function () {
                    if (self.childCtrl && self.childCtrl.addEmail) {
                        alert(self.childCtrl.getEmailsCount());
                    }
                };
            }]
        }
    );