/* ================================================= Test questions and answer ================================== */
var test = {
  testTitle: 'Programming test',
  btnTestResult: 'Review my answer',
  testQuestions: [
    {
      title: 'Question №1',
      answer: [
        {
          text: 'Answer №1 - false',
          correct: false
        },
        {
          text: 'Answer №2 - false',
          correct: false
        },
        {
          text: 'Answer №3 - true',
          correct: true
        }
      ]
    },
    {
      title: 'Question №2',
      answer: [
        {
          text: 'Answer №1 - false',
          correct: false
        },
        {
          text: 'Answer №2 - false',
          correct: false
        },
        {
          text: 'Answer №3 - true',
          correct: true
        }
      ]
    },
    {
      title: 'Question №3',
      answer: [
        {
          text: 'Answer №1 - true',
          correct: true
        },
        {
          text: 'Answer №2 - false',
          correct: false
        },
        {
          text: 'Answer №3 - true',
          correct: true
        }
      ]
    },
    {
      title: 'Question №4',
      answer: [
        {
          text: 'Answer №1 - false',
          correct: false
        },
        {
          text: 'Answer №2 - true',
          correct: true
        },
        {
          text: 'Answer №3 - true',
          correct: true
        }
      ]
    }
  ]
};

/* ================================================= localStorage, JSON, review correct answer ================================== */

let str = JSON.stringify(test);
localStorage.setItem('str', str);

$( () => {
  let testData = JSON.parse(localStorage.getItem('str'));
  let html = $('.form-test').html();
  let content = tmpl(html, testData);
  let $body = $('body');

  $body.append(content);

  let rightAnswer = 0;
  let incorrectAnswer = 0;
  let $modal;
  let $overlay;
  let i = 0;

  $('.test-result-btn').on('click', (e) => {

    let rightAnsweranswer = 0;
    let amountCorrectanswer =0;

    e.preventDefault();
    showModal();
    $overlay.one('click', hideModal);

    for (let testQuestions of testData.testQuestions) {
      let input = $('input[data-index=' + i + ']');
      let question = testQuestions.title;
      let correctAmount = 0;
      let checkedElem = 0;
      let j = 0;

      for (let answer of testQuestions.answer) {
        let elem = input[j];
        let answerVar = answer.correct;

        if (answerVar === true) {
          correctAmount += 1;
        }
        if ( elem.checked ) {
          if ( answerVar === true ) {
            rightAnswer += 1;
          } else {
            incorrectAnswer += 1;
          }
          checkedElem += 1;
        } else {
          incorrectAnswer += 1;
        }
        $(elem).removeAttr("checked");
        j++;
      }

        if(correctAmount == rightAnswer && rightAnswer !== 0 &&
            incorrectAnswer != testQuestions.answer.length &&
            correctAmount == checkedElem) {
          $modal.append('<div class="answer-right"><h2>' + question + '</h2></div>');
          rightAnsweranswer += rightAnswer;
        } else {
          $modal.append('<div class="answer-error"><h2>' + question + '</h2></div>');
        }

        amountCorrectanswer += correctAmount;
        correctAmount = 0;
        rightAnswer = 0;
        incorrectAnswer = 0;
        i++;
    }
    i = 0;

    let rightStatistic = Math.round((rightAnsweranswer/amountCorrectanswer)*100);
    if (rightStatistic == 100) {
		$modal.append('<div class="congratulations"><h2>Congratulations! Yor score is 100%</h2></div>');
	} else if (rightStatistic <= 50){
    $modal.append('<div class="bad"><h2>Bad news! You dont redy for this test. Try again. Your result is - ' + rightStatistic + '%</h2></div>');
	} else {
		$modal.append('<div class="not-bad"><h2>Not bad, please try again. Right answer - ' + rightStatistic + '%</h2></div>');
	}

  });

/* ================================================= Modal window ================================== */
  function showModal () {
    $modal = $('<div class="modal-test"><h1>Your result:</h1></div>');
    $overlay = $('<div class="modal-overlay" title="Close results!"></div>');
    $body.append($overlay);
    $body.append($modal);
    $modal.animate({ top: "50%" }, 800);
  }
  function hideModal () {
    $modal.animate({ top: "-50%" }, 800, function () {
      $modal.remove();
      $overlay.remove();
    });
  }
});