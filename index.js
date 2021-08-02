"use strict";
exports.__esModule = true;
exports.Innings = void 0;
var Innings = /** @class */ (function () {
    function Innings() {
    }
    Innings.prototype.displayInningsDetails = function () {
        var promptSync = require('prompt-sync')();
        this.teamName = promptSync('Enter the team name:'),
            this.inningsName = promptSync('Enter Innings name:'),
            this.runs = promptSync('Enter runs:');
        console.log("Outout:\n");
        console.log("Enter the team name:" + this.teamName + " \nEnter Innings name:" + this.inningsName + " \nEnter runs:" + this.runs);
    };
    return Innings;
}());
exports.Innings = Innings;
var inn = new Innings();
inn.displayInningsDetails();
