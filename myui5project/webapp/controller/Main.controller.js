sap.ui.define(['sap/ui/core/mvc/Controller',
               'mickey/models/model'],
//call back which will get called when all dependencies are loaded
    function (Vinod, Model) {
        return Vinod.extend("mickey.controller.Main", {
            anotherFx: function(){
                //this- is the default object of current class - Main Controller
                //in OOPS ABAP it is compared with - ME
                var oView = this.getView();
                //From the view, we will get the control object
                //Opt 1
                var oInp = oView.byId("idInp");
                //Opt 2
                var oInp2 = sap.ui.getCore().byId("idXMLView--idInp");
                //Print the value
                alert(oInp.getValue());

                //alert("my xml view is live in action 😊");
            },
            callMe: function () {
                //alert('welcome');

                //we can use the object of the button
                //First get the ui5 application object
                var oCore = sap.ui.getCore();

                //get the ui control object on which we can call ui5 functions
                var oBtn = oCore.byId("idSpiderman");

                //chaining is possible like below
                //sap.ui.getCore().byId("idSpiderman")
                
                //NEVER use the document API
                //var oBtn = document.getElementById("idSpiderman");

                //we can change the text using the setter function
                oBtn.setText("Change ho gaya!");
            },
            //any function of our controller can access this global variable using this
            anu: 100,
            onInit: function(){
                //alert('my controller object is ready');
                this.anu = this.anu + 120;
                //alert("global variable value is " + this.anu);
                var oModel = Model.createJSONModel();               

                //Step 3: Make the model aware to the application or view or control
                sap.ui.getCore().setModel(oModel);

                //Syntax No. 3: for binding property
                this.getView().byId("idSal").bindValue("/empStr/salary");
                //Syntax No. 4 : using generic method for binding value property
                this.getView().byId("idCurr").bindProperty("value", "/empStr/currency");
                

            },
            onBeforeRendering: function(){
                // this.getView().byId("idEmpId").setValue("1001");
                // this.getView().byId("idEmpName").setValue("Anubhav");
                // this.getView().byId("idSal").setValue("10000");
                // this.getView().byId("idCurr").setValue("EUR");
                // this.getView().byId("idSmk").setSelected(false);
            },
            onAfterRendering: function(){
                $("#idXMLView--idSal").fadeOut(1000).fadeIn(5000);
            }
        });
    });