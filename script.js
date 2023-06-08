 const marksForm = document.getElementById('marksForm');
    const totalMarksElement = document.getElementById('totalMarks');

    marksForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const quiz1 = parseInt(document.getElementById('quiz1').value);
      const quiz2 = parseInt(document.getElementById('quiz2').value);
      const quiz3 = parseInt(document.getElementById('quiz3').value);
      const quiz4 = parseInt(document.getElementById('quiz4').value);

      const assignment1 = parseInt(document.getElementById('assignment1').value);
      const assignment2 = parseInt(document.getElementById('assignment2').value);
      const assignment3 = parseInt(document.getElementById('assignment3').value);
      const assignment4 = parseInt(document.getElementById('assignment4').value);

      const midterm = parseInt(document.getElementById('midterm').value);

     // Check if quiz marks are within range
  if (quiz1 < 0 || quiz1 > 10 || quiz2 < 0 || quiz2 > 10 || quiz3 < 0 || quiz3 > 10 || quiz4 < 0 || quiz4 > 10) {
    totalMarksElement.textContent = "Invalid quiz marks. Please enter marks between 0 and 10.";
    return;
  }

  // Check if assignment marks are within range
  if (assignment1 < 0 || assignment1 > 10 || assignment2 < 0 || assignment2 > 10 || assignment3 < 0 || assignment3 > 10 || assignment4 < 0 || assignment4 > 10) {
    totalMarksElement.textContent = "Invalid assignment marks. Please enter marks between 0 and 10.";
    return;
  }

  // Check if midterm marks are within range
  if (midterm < 0 || midterm > 25) {
    totalMarksElement.textContent = "Invalid midterm marks. Please enter marks between 0 and 25.";
    return;
  }

   
      const quizMarks = ((quiz1 + quiz2 + quiz3 + quiz4) / 40) * 15;
      const assignmentMarks = ((assignment1 + assignment2 + assignment3 + assignment4) / 40) * 10;
      const totalMarks = quizMarks + assignmentMarks + midterm;

      totalMarksElement.textContent = `Total Marks: ${totalMarks}`;

     marksForm.reset();
});