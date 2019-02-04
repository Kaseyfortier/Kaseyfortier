function calculer() {
    console.log("calculer");
}

$(function(){

    if ($('input[name=gender]:checked').length > 0) {
        // do something here
    }


    $("input[type=radio][name='gammes']").change(function() {
        console.log("change gammes");
        var prix_cage = determine_prix_cage(); 
        console.log('prix cage = ' + prix_cage);
        
    }); 

    console.log("cache toute");

    $("#corbuild").hide();
    $("#hybbuild").hide();
    $("#resbuild").hide();
    $("#combuild").hide();



        
     //_________RESIDNETIAL___
  
        $("input[type='radio']").on('click', function(){

             var resnoa=parseInt(document.getElementById("resnoa").value);
             console.log("RESNOA = " + resnoa);
             var resnof=parseInt(document.getElementById("resnof").value);
             console.log("RESNOF =" + resnof);
             var resnob=parseInt(document.getElementById("resnob").value);
             console.log("RESNOB =" + resnob);
             var radioValue1 = parseInt($("input[id='radiobut1']:checked").val());
             var radioValue2 = parseInt($("input[id='radiobut2']:checked").val());
             var radioValue3 = parseInt($("input[id='radiobut3']:checked").val());
            
            if(radioValue1){

              var resx20=Math.ceil(resnof/20)
              console.log("resx20 ="+resx20)
              var resmoyenlogement=parseInt(Math.ceil((resnoa) /(resnof)));
              console.log("resmoyenlogement ="+ resmoyenlogement)
              var rescageelevator=parseInt(Math.ceil((resmoyenlogement/6)));
              console.log("rescageelevator ="+rescageelevator)
              var avectax1=radioValue1*1.10;
              console.log("x1.13 ="+avectax1)
              var resnumt=rescageelevator*resx20
              console.log("resnumt ="+ resnumt)
     
              document.getElementById("resultres").value =(resnumt*avectax1).toFixed(2);
            console.log("resultt ="+document.getElementById("resultres").value )
            }
            if(radioValue2){
    
                var resx20=Math.ceil(resnof/20)
                console.log("resx20 ="+resx20)
                var resmoyenlogement=parseInt(Math.ceil((resnoa) /(resnof)));
                console.log("resmoyenlogement ="+ resmoyenlogement)
                var rescageelevator=parseInt(Math.ceil((resmoyenlogement/6)));
                console.log("rescageelevator ="+rescageelevator)
                var avectax2=radioValue2*1.13;
                console.log("x1.13 ="+avectax1)
                var resnumt=rescageelevator*resx20
                console.log("resnumt ="+ resnumt)
       
                document.getElementById("resultres").value =( resnumt*avectax2).toFixed(2);
              console.log("resultt ="+document.getElementById("resultres").value )
            }
            if(radioValue3){
    
                var resx20=Math.ceil(resnof/20)
                console.log("resx20 ="+resx20)
                var resmoyenlogement=parseInt(Math.ceil((resnoa) /(resnof)));
                console.log("resmoyenlogement ="+ resmoyenlogement)
                var rescageelevator=parseInt(Math.ceil((resmoyenlogement/6)));
                console.log("rescageelevator ="+rescageelevator)
                var avectax3=radioValue3*1.16;
                console.log("x1.13 ="+avectax1)
                var resnumt=rescageelevator*resx20
                console.log("resnumt ="+ resnumt)
       
                document.getElementById("resultres").value =( resnumt*avectax3).toFixed(2);
              console.log("resultt ="+document.getElementById("resultres").value )
            }
     });


// _____________RESIDENTIAL_______

        

       //_________COMMERCIAL___
  

        $("input[type='radio']").on('click', function(){
            
         var comnodb=parseInt(document.getElementById("comnodb").value);
         console.log("COMNODB ="+ comnodb);
         var comnof=parseInt(document.getElementById("comnof").value);
         console.log("COMNOF ="+ comnof);
         var comnob=parseInt(document.getElementById("comnob").value);
         console.log("COMNOB ="+ comnob);
         var comnops=parseInt(document.getElementById("comnops").value);
         console.log("COMNOPS ="+ comnops);
         var comnolc=parseInt(document.getElementById("comnolc").value);
         console.log("COMNOLC ="+ comnolc);

         var radioValue1 = parseInt($("input[id='radiobut1']:checked").val())
         var radioValue2 = parseInt($("input[id='radiobut2']:checked").val())            
         var radioValue3 = parseInt($("input[id='radiobut3']:checked").val());
            
            if(radioValue1){
    
 
                var num_cage =comnolc ;
                var avectax1=radioValue1*1.10;
                console.log("x1.13 ="+avectax1) 
        
                document.getElementById("resultcom").value =num_cage*avectax1.toFixed(2);         
            }
            if(radioValue2){
    
 
                var num_cage =comnolc ;
                var avectax2=radioValue2*1.13;
                console.log("x1.13 ="+avectax2) 
        
                document.getElementById("resultcom").value =num_cage*avectax2.toFixed(2);         
            }
            if(radioValue3){
    
 
                var num_cage =comnolc ;
                var avectax3=radioValue3*1.16;
                console.log("x1.13 ="+avectax3) 
        
                document.getElementById("resultcom").value =num_cage*avectax3.toFixed(2);         
            }
        
        
     });

//   //_________CORPORATE_________

     $("input[type='radio']").on('click', function(){   
    
         
        var cornostc=parseInt(document.getElementById("cornostc").value);
        console.log("CORNOSTC ="+ cornostc);
        var cornof=parseInt(document.getElementById("cornof").value);
        console.log("CORNOF ="+ cornof);
        var cornob=parseInt(document.getElementById("cornob").value);
        console.log("CORNOB ="+ cornob);
        var cornops=parseInt(document.getElementById("cornops").value);
        console.log("CORNOPS ="+ cornops);
        var cornoo=parseInt(document.getElementById("cornoo").value);
        console.log("CORNOO ="+ cornoo);

        var radioValue1 = parseInt($("input[id='radiobut1']:checked").val())
        var radioValue2 = parseInt($("input[id='radiobut2']:checked").val())            
        var radioValue3 = parseInt($("input[id='radiobut3']:checked").val());

        if(radioValue1){
    
         var avectax1=radioValue1*1.10;
                console.log("x1.13 ="+avectax1)
            var cormaxflor=parseInt(cornof)+parseInt(cornob);
            var cortotalocc=(cornoo)*(cormaxflor);
            var corelenum=Math.ceil((cortotalocc)/(1000));
            var cornumcolon=Math.ceil((cormaxflor/20))
            var corpluss=Math.ceil(corelenum/cornumcolon);
            var corelv=(corpluss)*(cornumcolon)
    
            document.getElementById("resultcor").value =corelv*avectax1.toFixed(2);
        }
        if(radioValue2){
    
            var avectax2=radioValue2*1.13;
                   console.log("x1.13 ="+avectax2)
               var cormaxflor=parseInt(cornof)+parseInt(cornob);
               var cortotalocc=(cornoo)*(cormaxflor);
               var corelenum=Math.ceil((cortotalocc)/(1000));
               var cornumcolon=Math.ceil((cormaxflor/20))
               var corpluss=Math.ceil(corelenum/cornumcolon);
               var corelv=(corpluss)*(cornumcolon)
       
               document.getElementById("resultcor").value =corelv*avectax2.toFixed(2);
           }
           if(radioValue3){
    
            var avectax3=radioValue3*1.16;
                   console.log("x1.13 ="+avectax3)
               var cormaxflor=parseInt(cornof)+parseInt(cornob);
               var cortotalocc=(cornoo)*(cormaxflor);
               var corelenum=Math.ceil((cortotalocc)/(1000));
               var cornumcolon=Math.ceil((cormaxflor/20))
               var corpluss=Math.ceil(corelenum/cornumcolon);
               var corelv=(corpluss)*(cornumcolon)
       
               document.getElementById("resultcor").value =corelv*avectax3.toFixed(2);
           }
        

    });

// ________________CORPORATE

    //  //_________HYBRID_______

    $("input[type='radio']").on('click', function(){

        var hybnodb=parseInt(document.getElementById("hybnodb").value);
        console.log("HYBNODB ="+ hybnodb);
        var hybnof=parseInt(document.getElementById("hybnof").value);
        console.log("HYBNOF ="+ hybnof);
        var hybnob=parseInt(document.getElementById("hybnob").value);
        console.log("HYBNOB ="+ hybnob);
        var hybnops=parseInt(document.getElementById("hybnops").value);
        console.log("HYBNOPS ="+ hybnops);
        var hybnolc=parseInt(document.getElementById("hybnolc").value);
        console.log("HYBNOLC ="+ hybnolc);
        var hybnoo=parseInt(document.getElementById("hybnoo").value);
        console.log("HYBNOO ="+ hybnoo);

        var radioValue1 = parseInt($("input[id='radiobut1']:checked").val())
        var radioValue2 = parseInt($("input[id='radiobut2']:checked").val())            
        var radioValue3 = parseInt($("input[id='radiobut3']:checked").val());

        if(radioValue1){
    
            var avectax1=radioValue1*1.10;
             console.log("x1.13 ="+avectax1)
            var hybmaxflor=parseInt(hybnof)+parseInt(hybnob);
            var hybtotalocc=(hybnoo)*(hybmaxflor);
            var hybelenum=Math.round((hybtotalocc)/(1000));
            var hybnumcolon=Math.round((hybmaxflor/20))
            var hybpluss=Math.ceil(hybelenum/hybnumcolon)
            var hybelv=Math.round((hybpluss)*(hybnumcolon))
           
            document.getElementById("resulthyb").value =hybelv*avectax1.toFixed(2);       
       
               
         }
       
        if(radioValue2){
    
            var avectax2=radioValue2*1.13;
             console.log("x1.13 ="+avectax2)
            var hybmaxflor=parseInt(hybnof)+parseInt(hybnob);
            var hybtotalocc=(hybnoo)*(hybmaxflor);
            var hybelenum=Math.round((hybtotalocc)/(1000));
            var hybnumcolon=Math.round((hybmaxflor/20))
            var hybpluss=Math.ceil(hybelenum/hybnumcolon)
            var hybelv=Math.round((hybpluss)*(hybnumcolon))
           
            document.getElementById("resulthyb").value =hybelv*avectax2.toFixed(2);    
        }         
               
        if(radioValue3){
    
            var avectax3=radioValue3*1.16;
             console.log("x1.13 ="+avectax3)
            var hybmaxflor=parseInt(hybnof)+parseInt(hybnob);
            var hybtotalocc=(hybnoo)*(hybmaxflor);
            var hybelenum=Math.round((hybtotalocc)/(1000));
            var hybnumcolon=Math.round((hybmaxflor/20))
            var hybpluss=Math.ceil(hybelenum/hybnumcolon)
            var hybelv=Math.round((hybpluss)*(hybnumcolon))
           
            document.getElementById("resulthyb").value =hybelv*avectax3.toFixed(2);    
        }         
        
// __________HYBRID_____________
    });
});


     

   $("#building").change(function(){
    
    var current_building_type = $("#building").val();

    console.log("building type change");
    console.log("building type = " + current_building_type );
   
    $("#corbuild").hide();
    $("#hybbuild").hide();
    $("#combuild").hide();
    $("#resbuild").hide();

        // Hide de toue

       if (current_building_type=="residential"){
           $("#resbuild").show();
       }

       if (current_building_type=="commercial"){
        $("#combuild").show();
    }
    if (current_building_type=="corporate"){
        $("#corbuild").show();
    }
    if (current_building_type=="hybrid"){
        $("#hybbuild").show();
    }
   });



function determine_prix_cage(){
    console.log('determine prix cage');
    var gamme_selectionne = $('input[name=gammes]:checked').val()
    console.log('gamme = ' + gamme_selectionne);
    if( gamme_selectionne == '15400') {
        return 15400;
    }
    if( gamme_selectionne == '7565') {
        return 7565;
    }
    if( gamme_selectionne == '12345') {
        return 12345;
    }
}

function determine_total_avec_frais_installation(prix){
    console.log('determine_frais_installation');
    console.log('prix = ' + prix);
    var gamme_selectionne = $('input[name=gammes]:checked').val()
    console.log('gamme = ' + gamme_selectionne);
    if( gamme_selectionne == 'excelium') {
        return prix*1.16;
    }
    if( gamme_selectionne == 'standard') {
        return prix*1.13;
    }
    if( gamme_selectionne == '') {
        return prix*1.13;
    }
}

// function calculer() {
// }







$(document).ready(function(){
    $("input[type='button']").on('click', function(){
        var radioValue = $("input[name='gender']:checked").val();
        if(radioValue){
            alert(radioValue);
        }
    });
});