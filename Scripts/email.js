//"use strict";

$(document).ready(function() {
    $('.btn_submit').click(function() {
       // console.log("test");

        var name = $('#name').val();
        var email = $('#emailid').val();
        var phoneno = $('#phonno').val();
        phoneno = phoneno.replace(" ","");

        checkboxIsChecked = $('#tncagree').is(':checked');
        var flag = true;


/*----Remove Main class Css and add it to induvudial textboxes---*/
  $(".fldbox").css("border-bottom", "none");
  $("#name").css("border-bottom", "1px solid #6d6e70");
  $("#emailid").css("border-bottom", "1px solid #6d6e70");
  $("#phonno").css("border-bottom", "1px solid #6d6e70");
/*-------*/

        if (name == "" || email == "" ) {
            flag = false;
            //$(".fldbox").css
          // $(".fldbox").css("border-bottom", "1px solid #E91E63");

            $("#name").css("border-bottom", "1px solid #E91E63");
            $("#emailid").css("border-bottom", "1px solid #E91E63");



           $("#error").html("<sup>*</sup> Fields are mandatory");
            return;
        }



        if (flag == false) {
            //alert("error");
        }

         if (name == "" ){
         	 $("#error").html("<sup>*</sup>Invalid Name");
             $("#name").css("border-bottom", "1px solid #E91E63");
            flag = false;
            return;
         }



        if (!validateEmail(email)) {
            //  alert('Email is invalid');
            $("#error").html("<sup>*</sup>Invalid Email");
            $("#emailid").css("border-bottom", "1px solid #E91E63");
            flag = false;
           return;
        }


     if(phoneno !=""){
       if (!validatePhone(phoneno) || phoneno.length < 6) {
            //  alert('ph is invalid');
            $("#error").html("<sup>*</sup>Invalid Phone Number");
            $("#phonno").css("border-bottom", "1px solid #E91E63");
            flag = false;
            return;
        }
    }


        if (checkboxIsChecked == false) {

        	$("#error").html("<sup>*</sup>Accept Terms of Use and Privacy Policy/PDPA.");
            flag = false;
            return;
        }






        if (flag === true) {


            $.ajax({
                type: "POST",
                url: "./submitSmallEmail.php",
                data: $("#commentForm").serialize(), // serializes the form's elements.
                success: function(data) {

        	$("#error").html("");
                console.log("Response Recived : \n" + data); // show response from the php script.
               // console.log("submitted");

                $('#thankyouModal').modal('show');
                }
            });
        }

       
    });
});

//Validation functions//
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}



function validatePhone(txtPhone) {
    
    var filter = /^[0-9-+]+$/;
    if (filter.test(txtPhone)) {
        return true;
    }
    else {
        return false;
    }
}