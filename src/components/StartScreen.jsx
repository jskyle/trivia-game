import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Button } from "reactstrap";
import { fetchQuestionsThunk } from "../store/quiz/thunk";
import CustomizeModal from "./CustomizeModal";

const StartScreen = () => {
  const [modalOpen, toggleModalOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = () => {
    dispatch(fetchQuestionsThunk()).then(() => {
      history.push("/question/1");
    });
  };

  const toggle = () => {
    toggleModalOpen(!modalOpen);
  };

  return (
    <Row className="d-flex flex-column align-items-center">
      <p className="mt-4">
        You will be presented with 10 True or False Questions.
      </p>
      <p className="mt-4">Can you score 100%?</p>
      <Button color="primary" onClick={handleSubmit}>
        Begin
      </Button>
      <Button color="link" onClick={toggle}>
        customize
      </Button>
      <CustomizeModal
        modalOpen={modalOpen}
        toggleModalOpen={toggle}
        submit={handleSubmit}
      />
    </Row>
  );
};

export default StartScreen;
