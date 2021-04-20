import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import {
  Row,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
} from "reactstrap";
import { getQuestions } from "../store/quiz/selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { setQuizHeader } from "../store/quiz/actions";
import { fetchQuestionsThunk } from "../store/quiz/thunk";

const ScoreScreen = () => {
  const questions = useSelector((state) => getQuestions(state));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(
      setQuizHeader(
        `You Scored ${
          questions.filter((q) => q.correct_answer === q.response).length
        } / ${questions.length}`
      )
    );
    //eslint-disable-next-line
  }, []);

    const handleSubmit = () => {
    dispatch(fetchQuestionsThunk()).then(() => {
      history.push("/question/1");
    });
  };

  return (
    <Row class="d-flex flex-column justify-content-center align-items-center">
      <ListGroup className="mb-2">
        {questions.map((q) => {
          const correct = q.correct_answer === q.response;

          return (
            <ListGroupItem>
              <ListGroupItemHeading>
                <FontAwesomeIcon
                  icon={correct ? faCheckCircle : faTimesCircle}
                  color={correct ? "green" : "red"}
                  size="1x"
                  className="mr-2"
                />
                {parse(q.question)}
              </ListGroupItemHeading>
              <ListGroupItemText>
                <p>
                  Correct answer:{" "}
                  <span className="font-weight-bold">{q.correct_answer}</span>
                </p>
              </ListGroupItemText>
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <Button color="primary" onClick={handleSubmit}>Play again</Button>
    </Row>
  );
};

export default ScoreScreen;
