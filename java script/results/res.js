function calculateResult() {
    var Telugu = parseFloat(document.getElementById('Telugu').value);
    var Hindi = parseFloat(document.getElementById('Hindi').value);
    var English = parseFloat(document.getElementById('English').value);
    var Maths = parseFloat(document.getElementById('Maths').value);
    var Science = parseFloat(document.getElementById('Science').value);
    var Social = parseFloat(document.getElementById('Social').value);
  
    var totalMarks = Telugu + Hindi + English + Maths + Science + Social;
    var percentage = (totalMarks / 600) * 100;
  
    var result;
    var grade;
  
    // Check if any subject is fail
    if (Telugu < 35 || Hindi < 35 || English < 35 || Maths < 35 || Science < 35 || Social <35 ) {
      result = 'Fail';
      grade = 'E';
    } else {
      result = 'Pass';
     
  
      if (percentage >= 90) {
        grade = 'A+';
      } else if (percentage >= 80) {
        grade = 'A';
      } else if (percentage >= 70) {
        grade = 'B';
      } else if (percentage >= 60) {
        grade = 'C';
      } else if (percentage >= 50) {
        grade = 'D';
      } else {
        grade = 'E';
      }
    }
    
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Total Marks: ' + totalMarks.toFixed(2) + '<br>';
    resultDiv.innerHTML += 'Percentage: ' + percentage.toFixed(2) + '%<br>';
    resultDiv.innerHTML += 'Result: ' + result + '<br>';
    resultDiv.innerHTML += 'Grade: ' + grade;
  }

  

  function restrictValue(input) {
    if (input.value < 0) {
        input.value = 0;
    }
    if (input.value > 100) {
        input.value = " ";
    }
}



