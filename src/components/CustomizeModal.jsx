import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input, Label, Col } from 'reactstrap';
import { setQuizDetails } from '../store/quiz/actions';

const CustomizeModal = ({ modalOpen, toggleModalOpen, submit}) => {
  const [form, setForm] = useState({number: 10, difficulty: "hard"}) 
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setQuizDetails(form));
    submit()
    toggleModalOpen();
  }

  const handleNumberInput = (e) => {
    const value = e.target.value;
    setForm({...form, number: value > 50 ? 50 : value})
  
  }

  return (
    <Modal isOpen={modalOpen} toggle={toggleModalOpen}>
      <ModalHeader>
        Customize Quiz
      </ModalHeader>
      <ModalBody>
        <InputGroup className="justify-content-center">
        <Label>Number of Questions</Label>
        <Col sm={12}>
        <Input type="number" value={form.number} onChange={(e) => handleNumberInput(e)} placeholder="Max 50 Questions"/>
        </Col>
      </InputGroup>
      <InputGroup className="mt-4 justify-content-center">
        <Label for="exampleSelectMulti">Difficulty</Label>
         <Col sm={12}>
          <Input type="select" name="select" id="exampleSelect" value={form.difficulty} onChange={(e) => setForm({...form, difficulty: e.target.value})}>
            <option value="hard">Hard</option>
            <option value="medium">Medium</option>
            <option value="easy">Easy</option>
          </Input>
        </Col>
      </InputGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>Begin</Button>
      </ModalFooter>
    </Modal>
  )
}

export default CustomizeModal
