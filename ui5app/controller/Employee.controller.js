sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'org/mah/app/controller/formatter'
],function(jQuery, Controller, formatter){
    var CController = Controller.extend("org.mah.app.controller.Employee",{
        formatter : formatter,
        onInit : function() {
            $.post({
                    url : 'http://localhost:3001/graphql',
                    data : JSON.stringify({ query : '{ getEmployees(first:5) { id first_name last_name email } }' }),
                    contentType : 'application/json'
            })
            .done(function(data){
                console.log(data);
            })
            .fail((err) => {
                console.log(err);
            });

        }
    });

    return CController;
})