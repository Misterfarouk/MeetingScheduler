$(document).ready(function(){

    $.ajax({
        url: './backend/data_retrieval.php',
        type: 'get',
        dataType: 'json',
        success: function(data){
         
            //staff selection
            $.each(data, function(index, key){

                var option = new Option(key.staff_name, key.id);
                console.log("fghj:"+ key.staff_name);
                 $("#selection").append(option);
            });
                //Change the text of the default "loading" option.
                $('#staff_selection').text('Please select a staff');

            }

    });
    
    $.ajax({
        url: './backend/data_retrieval2.php',
        type: 'get',
        dataType: 'json',
        success: function(data){
         
            //staff selection
            $.each(data, function(index, key){

                var option = new Option(key.meeting_topics, key.id);
                console.log("fghj:"+ key.meeting_topics);
                 $("#topic").append(option);
            });
                //Change the text of the default "loading" option.
                $('#topic_selection').text('Please select a topic');

            }

    });

    // just a test

    $.ajax({
        url: './backend/data_retrieval3.php',
        type: 'get',
        dataType: 'json',
        success: function(data){
         
            //staff selection
            $.each(data, function(index, key){

                var option = new Option(key.meeting_time, key.id);
                console.log("fghj:"+ key.meeting_time);
                 $("#time").append(option);
            });
                //Change the text of the default "loading" option.
                $('#Meeting_time').text('Please select a meeting time');

            }

    });

    $("#stff").on('change', function(e){
        $('#tpc').show();
        $(this).hide();
    });

    $("#tpc").on('change', function(e){
        $('#tme').show();
        $(this).hide();
    });
    
    $("#tme").on('change', function(e){
        $('#book_meeting').show();
        $(this).hide();
    });

    $(".meeting_schedule").submit(function(e){
        e.preventDefault();
        var dataToSend = $(this).serialize();
        $.ajax({
            url: './insert.php',
            type: 'POST',
            data: dataToSend,
            dataType: 'json',
            success: function(data){

            }
          
        });
    });

  









//         var customer_email = $("input#email").val();
//     var customer_name = $("input#username").val();
//     var amount = $("input#okc").val();
//     console.log(amount);
//     payWithPaystack(customer_email, customer_name, amount);    



//     function payWithPaystack(customer_email, customer_name, amt){
//         var handler = PaystackPop.setup({
//           key: 'pk_test_cdcc421dda96b12747c881e87864b28dc25bc05b',
//           email: customer_email,
//           amount: amt,
//           currency: "NGN",
//           ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
//           firstname: customer_name,
//           lastname: '',
//           // label: "Optional string that replaces customer email"
//           metadata: {
//              custom_fields:[
//                 {
//                     display_name: "Mobile Number",
//                     variable_name: "mobile_number",
//                     value: "+2348012345678"
//                 }
//             ]
//           },
//           callback: function(response){
//              alert('success. transaction ref is ' + response.reference);
//               perforDBUpdate(customer_email, customer_name, amt,  response.reference);
//           },
//           onClose: function(){
//               alert('window closed');
//           }
//         });

//         handler.openIframe();
//       };

// function  perforDBUpdate(customer_email, customer_name, amt, transaction_ref){

//           // setup some local variables
//         var $form = $("#contactForm");

//         // Let's select and cache all the fields
//         var $inputs = $form.find("input, select, button, textarea");

//         // Serialize the data in the form
//         var serializedData = $form.serializeArray();
//         var tx = {
//             'name': 'transaction_ref',
//             'value': transaction_ref
//         };
//         serializedData.push(tx);
//         console.log(serializedData);



    

    
});