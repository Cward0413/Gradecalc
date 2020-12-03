$(document).ready(
    function () {

        //add event handlers
        $("#calc").click(calcGrade);
        $("#sName").click(sortName);
        $("#sGrade").click(sortGrade);
        //all other functions (program logic)
        var sArray = [];

        function calcGrade(){
            event.preventDefault()

            //get user input
            var student = {};
            student.Name = $("#fName").val() + " " + $("#lName").val();
            student.Percent = ((($("#points").val())/($("#posPoints").val())) * 100).toFixed(2);

            //calc letter grade
            if (student.Percent >= 93)
                student.letterGrade = "A";
            else if (student.Percent >= 90)
                student.letterGrade = "A-";
            else if (student.Percent >= 87)
                student.letterGrade = "B+";
            else if (student.Percent >= 83)
                student.letterGrade = "B";
            else if (student.Percent >= 80)
                student.letterGrade = "B-";
            else if (student.Percent >= 77)
                student.letterGrade = "C+";
            else if (student.Percent >= 73)
                student.letterGrade = "C";
            else if (student.Percent >= 70)
                student.letterGrade = "C-";
            else if (student.Percent >= 67)
                student.letterGrade = "D+";
            else if (student.Percent >= 63)
                student.letterGrade = "D";
            else if (student.Percent >= 60)
                student.letterGrade = "D-";
            else if (student.Percent < 60)
                student.letterGrade = "F";

            sArray.push(student);

            //run output function
            outputStudents();
        }

        //sort by name
        function sortName(){
            event.preventDefault();
            function sortByName(name1,name2) {
                if(name1.Name < name2.Name)
                    return -1
                else if(name1.Name > name2.Name)
                    return 1;
                else
                    return 0;
            }
            sArray.sort(sortByName);

            //run output function
            outputStudents();
        }

        //sort by grade
        function sortGrade(){
            event.preventDefault();
            function sortByGrade(percent1,percent2) {
                if(percent1.Percent < percent2.Percent)
                    return -1
                else if(percent1.Percent > percent2.Percent)
                    return 1;
                else
                    return 0;
            }
            sArray.sort(sortByGrade);

            //run output function
            outputStudents();
        }

        //function to output text
        function outputStudents(){
            var studentList = ``;
            for(i=0;i<sArray.length;i++) {
                studentList += `Name: ${sArray[i].Name}, Percent: ${sArray[i].Percent}, Grade: ${sArray[i].letterGrade}` + '<br>';
            }
            $("#output").html(studentList);
        }
    }
)