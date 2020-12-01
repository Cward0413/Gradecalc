$(document).ready(
    function () {

        //add event handlers
        $("#calc").click(calcGrade);
        //all other functions (program logic)
        var studentGrade = {};

        function calcGrade(){
            event.preventDefault()
            studentGrade.fName = $("#fName").val();
            studentGrade.lName = $("#lName").val();
            var studentPoints = $("#points").val();
            var maxPoints = $("#posPoints").val();

            studentGrade.percent = ((studentPoints/maxPoints) * 100).toFixed(2);

            if (studentGrade["percent" ] >= 93){
                studentGrade.letterGrade = "A";
            }
            else if (studentGrade["percent"] >= 90){
                studentGrade.letterGrade = "A-";
            }
            else if (studentGrade["percent"] >= 87){
                studentGrade.letterGrade = "B+";
            }
            else if (studentGrade["percent"] >= 83){
                studentGrade.letterGrade = "B";
            }
            else if (studentGrade["percent"] >= 80){
                studentGrade.letterGrade = "B-";
            }
            else if (studentGrade["percent"] >= 77){
                studentGrade.letterGrade = "C+";
            }
            else if (studentGrade["percent"] >= 73){
                studentGrade.letterGrade = "C";
            }
            else if (studentGrade["percent"] >= 70){
                studentGrade.letterGrade = "C-";
            }
            else if (studentGrade["percent"] >= 67){
                studentGrade.letterGrade = "D+";
            }
            else if (studentGrade["percent"] >= 63){
                studentGrade.letterGrade = "D";
            }
            else if (studentGrade["percent"] >= 60){
                studentGrade.letterGrade = "D-";
            }
            else if (studentGrade["percent"] < 60){
                studentGrade.letterGrade = "F";
            }

            $("#fNameOutput").text("First Name: " + studentGrade["fName"]);
            $("#lNameOutput").text("Last Name: " + studentGrade["lName"]);
            $("#percOutput").text("Percent Grade: " + studentGrade["percent"]);
            $("#letterOutput").text("Letter Grade: " + studentGrade["letterGrade"]);
        }
    }
)