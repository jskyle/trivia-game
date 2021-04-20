import React, { useEffect } from "react";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { Row, Card, Button } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";
import { getQuestion, getNumberOfQuestions } from "../store/quiz/selectors";
import { setQuestionResponse, setQuizHeader } from "../store/quiz/actions";

const Question = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { idx } = useParams();
  const parsedIdx = Number.parseInt(idx);
  const question = useSelector((state) => getQuestion(state, idx));
  const numberOfQuestions = useSelector((state) => getNumberOfQuestions(state));

  useEffect(() => {
    dispatch(setQuizHeader(question.category));
  }, [question.category, dispatch]);

  const handleClick = (response) => {
    const nextIdx = parsedIdx + 1;
    dispatch(setQuestionResponse({ idx: parsedIdx - 1, response }));
    history.push(
      parsedIdx >= numberOfQuestions ? "/score" : `/question/${nextIdx}`
    );
  };

  return (
    <Row className="d-flex flex-column align-items-center">
      <Card className="w-50 justify-content-center d-flex pt-4 pb-4 mb-4 mt-4">
        <h5 className="text-center mt-2 mb-2">{parse(question.question)}</h5>
      </Card>
      <Row>
        <Button
          color="primary"
          className="mr-3"
          onClick={() => handleClick("True")}
        >
          True
        </Button>
        <Button color="danger" onClick={() => handleClick("False")}>
          False
        </Button>
      </Row>
    </Row>
  );
};

export default Question;
