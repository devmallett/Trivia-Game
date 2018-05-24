   <script type="text/javascript">
           
           $(document).ready(function () {
               
               var number = 5;
               $("#result").hide();
               content = '';

               var intervalId; //this is the interval counter 

               function run() {
                   clearInterval(intervalId);
                   intervalId = setInterval(decrement, 1000);
               }

               function decrement() {
                   number--;
                   $("#show-number").html("<h1> " + number + " </h1>");


                   if (number === 0) {
                       $("#quiz").hide();
                       $("#result").show();
                       stop();
                    //    alert("Times up")
                   }
               }

               function stop() {
                   clearInterval(intervalId)
               }

               run();
           });
           
            
           // var questions = [$(".question1"), $(".question2"), $(".question3"), $(".question4"), $(".question5"), $(".question6"), $(".question7"), $(".question8"), $(".question9"), $(".question10")];

             //   var answers = ["D", "C", "A", "B", "B", "A", "A", "C", "D", "B"];

//console.log(questions[3].val());
          
            
        
        </script>