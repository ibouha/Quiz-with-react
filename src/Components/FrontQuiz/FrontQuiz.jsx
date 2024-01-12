import React, { useRef, useState, useEffect } from "react";
import "./FrontQuiz.css";
import { datafront } from "../../Assets/datafront";
import incredible1 from "../../Assets/incredible1.png";
import incredible2 from "../../Assets/incredible2.png";
import incredible3 from "../../Assets/incredible3.png";
import incredible4 from "../../Assets/incredible4.png";
import incredible5 from "../../Assets/incredible5.png";
import { useNavigate } from "react-router-dom";

const FrontQuiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(datafront[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  let [timer, setTimer] = useState(60);

  const Navigate = useNavigate();

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionArr = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionArr[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === datafront.length - 1) {
        setTimer(0);
        setResult(true);
        return 0;
      }
      setIndex((i) => i + 1);
      setQuestion(datafront[index + 1]);
      setLock(false);
      optionArr.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const getImageForScore = () => {
    if (score === 5) {
      return incredible1;
    } else if (score === 4) {
      return incredible2;
    } else if (score === 3) {
      return incredible3;
    } else if (score === 2) {
      return incredible4;
    } else {
      return incredible5;
    }
  };
  const quitter = () => {
    Navigate("/");
  };

  useEffect(() => {
    if (timer > 0) {
      const timerInterval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    } else {
      handleTimerEnd();
    }
  }, [timer]);

  const handleTimerEnd = () => {
    setLock(true);
    setResult(true);
  };

  return (
    <>
      <div className="container">
        <div className="timer">{timer == 60 ? "1:00" : `00:${timer}`}</div>
        <h1>Quiz Front-End</h1>
        <hr />
        {result ? (
          <>
            <div className="scoreGlobal">
              {" "}
              <img
                src={getImageForScore()}
                alt=""
                style={{ height: "560px" }}
                className="imagescore"
              />
            </div>
          </>
        ) : (
          <>
            <h2>
              {index + 1}.{question.question}
            </h2>
            <ul>
              <li
                ref={Option1}
                onClick={(e) => {
                  checkAns(e, 1);
                }}
              >
                {question.option1}
              </li>
              <li
                ref={Option2}
                onClick={(e) => {
                  checkAns(e, 2);
                }}
              >
                {question.option2}
              </li>
              <li
                ref={Option3}
                onClick={(e) => {
                  checkAns(e, 3);
                }}
              >
                {question.option3}
              </li>
              <li
                ref={Option4}
                onClick={(e) => {
                  checkAns(e, 4);
                }}
              >
                {question.option4}
              </li>
            </ul>
            <button onClick={next}>Next</button>
          </>
        )}
        {result ? (
          <>
            <h2 className="result">
              You Scored {score} out of {datafront.length}{" "}
            </h2>
            <button className="quitter" onClick={quitter}>
              Quitter
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default FrontQuiz;
