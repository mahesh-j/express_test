sap.ui.define(['sap/ui/core/UIComponent'],function(UIComponent){
    return UIComponent.extend("org.mah.app.Component",{
        "metadata" : {
            "manifest" : "json"
        },
        
        init : function() {
            UIComponent.prototype.init.apply(this,arguments);
        }
    });
});