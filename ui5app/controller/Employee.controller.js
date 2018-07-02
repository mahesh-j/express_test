sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'org/mah/app/controller/formatter'
],function(jQuery, Controller, formatter){
    var CController = Controller.extend("org.mah.app.controller.Employee",{
        formatter : formatter
    });

    return CController;
})