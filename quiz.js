function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');
    if (q1=="Mercury") {c++}
    if (q2=="8") {c++}
    if (q3=="Venus") {c++}
    if (q4=="Earth") {c++}
    if (q5=="Jupiter") {c++}
    if (q6=="Moon") {c++}
    if (q7=="Mercury") {c++}
    if (q8=="Saturn") {c++}
    if (q9=="Venus") {c++}
    if (q10=="Neptune") {c++}
quiz.style.display="none";
    
    if (c<=6) {
     result.textContent= `You got ${c} out of 10. You need to improve. Please try again.`
     } else {
     result.textContent=`You got ${c} out of 10. You passed!!`
     }
}
if (confirm('Are you sure you want to take this test?')) {
    txt = 'You pressed OK!';
  } else {
    txt = 'You pressed Cancel!';
  }
  