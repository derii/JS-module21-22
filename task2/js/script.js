'use strict';

/* ================================================= Test questions and answer ================================== */
var test = {
  testTitle: 'Programming test',
  btnTestResult: 'Review my answer',
  testQuestions: [{
    title: 'Question №1',
    answer: [{
      text: 'Answer №1 - false',
      correct: false
    }, {
      text: 'Answer №2 - false',
      correct: false
    }, {
      text: 'Answer №3 - true',
      correct: true
    }]
  }, {
    title: 'Question №2',
    answer: [{
      text: 'Answer №1 - false',
      correct: false
    }, {
      text: 'Answer №2 - false',
      correct: false
    }, {
      text: 'Answer №3 - true',
      correct: true
    }]
  }, {
    title: 'Question №3',
    answer: [{
      text: 'Answer №1 - true',
      correct: true
    }, {
      text: 'Answer №2 - false',
      correct: false
    }, {
      text: 'Answer №3 - true',
      correct: true
    }]
  }, {
    title: 'Question №4',
    answer: [{
      text: 'Answer №1 - false',
      correct: false
    }, {
      text: 'Answer №2 - true',
      correct: true
    }, {
      text: 'Answer №3 - true',
      correct: true
    }]
  }]
};

/* ================================================= localStorage, JSON, review correct answer ================================== */

var str = JSON.stringify(test);
localStorage.setItem('str', str);

$(function () {
  var testData = JSON.parse(localStorage.getItem('str'));
  var html = $('.form-test').html();
  var content = tmpl(html, testData);
  var $body = $('body');

  $body.append(content);

  var rightAnswer = 0;
  var incorrectAnswer = 0;
  var $modal = void 0;
  var $overlay = void 0;
  var i = 0;

  $('.test-result-btn').on('click', function (e) {

    var rightAnsweranswer = 0;
    var amountCorrectanswer = 0;

    e.preventDefault();
    showModal();
    $overlay.one('click', hideModal);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = testData.testQuestions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var testQuestions = _step.value;

        var input = $('input[data-index=' + i + ']');
        var question = testQuestions.title;
        var correctAmount = 0;
        var checkedElem = 0;
        var j = 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = testQuestions.answer[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var answer = _step2.value;

            var elem = input[j];
            var answerVar = answer.correct;

            if (answerVar === true) {
              correctAmount += 1;
            }
            if (elem.checked) {
              if (answerVar === true) {
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
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (correctAmount == rightAnswer && rightAnswer !== 0 && incorrectAnswer != testQuestions.answer.length && correctAmount == checkedElem) {
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
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    i = 0;

    var rightStatistic = Math.round(rightAnsweranswer / amountCorrectanswer * 100);
    if (rightStatistic == 100) {
      $modal.append('<div class="congratulations"><h2>Congratulations! Yor score is 100%</h2></div>');
    } else if (rightStatistic <= 50) {
      $modal.append('<div class="bad"><h2>Bad news! You dont redy for this test. Try again. Your result is - ' + rightStatistic + '%</h2></div>');
    } else {
      $modal.append('<div class="not-bad"><h2>Not bad, please try again. Right answer - ' + rightStatistic + '%</h2></div>');
    }
  });

  /* ================================================= Modal window ================================== */
  function showModal() {
    $modal = $('<div class="modal-test"><h1>Your result:</h1></div>');
    $overlay = $('<div class="modal-overlay" title="Close results!"></div>');
    $body.append($overlay);
    $body.append($modal);
    $modal.animate({ top: "50%" }, 800);
  }
  function hideModal() {
    $modal.animate({ top: "-50%" }, 800, function () {
      $modal.remove();
      $overlay.remove();
    });
  }
});
//# sourceMappingURL=script.js.map
'use strict';

/* ================================================= Test questions and answer ================================== */
var test = {
  testTitle: 'Programming test',
  btnTestResult: 'Review my answer',
  testQuestions: [{
    title: 'Question №1',
    answer: [{
      text: 'Answer №1 - false',
      correct: false
    }, {
      text: 'Answer №2 - false',
      correct: false
    }, {
      text: 'Answer №3 - true',
      correct: true
    }]
  }, {
    title: 'Question №2',
    answer: [{
      text: 'Answer №1 - false',
      correct: false
    }, {
      text: 'Answer №2 - false',
      correct: false
    }, {
      text: 'Answer №3 - true',
      correct: true
    }]
  }, {
    title: 'Question №3',
    answer: [{
      text: 'Answer №1 - true',
      correct: true
    }, {
      text: 'Answer №2 - false',
      correct: false
    }, {
      text: 'Answer №3 - true',
      correct: true
    }]
  }, {
    title: 'Question №4',
    answer: [{
      text: 'Answer №1 - false',
      correct: false
    }, {
      text: 'Answer №2 - true',
      correct: true
    }, {
      text: 'Answer №3 - true',
      correct: true
    }]
  }]
};

/* ================================================= localStorage, JSON, review correct answer ================================== */

var str = JSON.stringify(test);
localStorage.setItem('str', str);

$(function () {
  var testData = JSON.parse(localStorage.getItem('str'));
  var html = $('.form-test').html();
  var content = tmpl(html, testData);
  var $body = $('body');

  $body.append(content);

  var rightAnswer = 0;
  var incorrectAnswer = 0;
  var $modal = void 0;
  var $overlay = void 0;
  var i = 0;

  $('.test-result-btn').on('click', function (e) {

    var rightAnsweranswer = 0;
    var amountCorrectanswer = 0;

    e.preventDefault();
    showModal();
    $overlay.one('click', hideModal);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = testData.testQuestions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var testQuestions = _step.value;

        var input = $('input[data-index=' + i + ']');
        var question = testQuestions.title;
        var correctAmount = 0;
        var checkedElem = 0;
        var j = 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = testQuestions.answer[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var answer = _step2.value;

            var elem = input[j];
            var answerVar = answer.correct;

            if (answerVar === true) {
              correctAmount += 1;
            }
            if (elem.checked) {
              if (answerVar === true) {
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
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (correctAmount == rightAnswer && rightAnswer !== 0 && incorrectAnswer != testQuestions.answer.length && correctAmount == checkedElem) {
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
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    i = 0;

    var rightStatistic = Math.round(rightAnsweranswer / amountCorrectanswer * 100);
    if (rightStatistic == 100) {
      $modal.append('<div class="congratulations"><h2>Congratulations! Yor score is 100%</h2></div>');
    } else if (rightStatistic <= 50) {
      $modal.append('<div class="bad"><h2>Bad news! You dont redy for this test. Try again. Your result is - ' + rightStatistic + '%</h2></div>');
    } else {
      $modal.append('<div class="not-bad"><h2>Not bad, please try again. Right answer - ' + rightStatistic + '%</h2></div>');
    }
  });

  /* ================================================= Modal window ================================== */
  function showModal() {
    $modal = $('<div class="modal-test"><h1>Your result:</h1></div>');
    $overlay = $('<div class="modal-overlay" title="Close results!"></div>');
    $body.append($overlay);
    $body.append($modal);
    $modal.animate({ top: "50%" }, 800);
  }
  function hideModal() {
    $modal.animate({ top: "-50%" }, 800, function () {
      $modal.remove();
      $overlay.remove();
    });
  }
});
//# sourceMappingURL=script.js.map
