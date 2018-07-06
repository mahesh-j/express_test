sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'org/mah/app/controller/formatter'
],function(jQuery, Controller, formatter){
    var CController = Controller.extend("org.mah.app.controller.Employee",{
        formatter : formatter,
        onInit : function() {
            $.post('http://localhost:3001/graphql',{ "query" : "{ getEmployees(first:5) { id first_name last_name email } }" })
                .done(function(data){
                    console.log(data);
                })

        }
    });

    return CController;
})