import React from 'react'
import { useSelector } from 'react-redux'
import { getQuizHeader} from '../store/quiz/selectors';

import { Row } from 'reactstrap';

const Header = () => {
  const header = useSelector((state) => getQuizHeader(state));

  return (
    <Row className="d-flex justify-content-center mt-1">
      <h1 className="text-align-center">{header}</h1>
    </Row>
  )
}

export default Header
