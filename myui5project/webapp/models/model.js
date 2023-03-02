//Scaffolding , AMD
sap.ui.define([
    
], function() {
    return {
        createJSONModel: function(){
            //Step 1: Create a brand new model object
            var oModel = new sap.ui.model.json.JSONModel();

            //Step 2: Set or Load data into the model
            oModel.setData({
                "empStr": {
                    "empId": "1003",
                    "empName": "Anubhav",
                    "salary": 9000,
                    "currency": "AED",
                    "smoker": false,
                    "gender": "M",
                    "mStat": "S",
                    "rating": 4,
                    "city": "Gurgaon",
                    "country": "IN"
                }
            });

            return oModel;
        },
        createXMLModel: function(){

        },
        createResourceModel: function(){
            
        }
    };
});