sap.ui.define([],function(){
    "use strict";

    return {
        age : function(oDate) {
            var oDate1 = new Date(oDate);
            var ageDiff = Date.now() - oDate1.getTime();
            var ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    };
});