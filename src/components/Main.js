import React from 'react'
import Progressbar from 'components/ProgressBar'
import { CurrentQuestion } from 'components/CurrentQuestion';
import Summary from 'components/Summary';
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import background from 'images/background.jpg';
import styled from 'styled-components/macro';
import { Button } from './Buttons';

const Main = () => {
  const dispatch = useDispatch()
  const quizOver = useSelector((store) => store.quiz.quizOver);
  console.log(quizOver)

  const onRestart = () => {
    dispatch(quiz.actions.restart());
  }

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  }

  if (!quizOver) {
    return (
      <Background img src={background} alt="70s pattern">
        <InnerWrapper>
          <WhiteWrapper>
            <CurrentQuestion />
            <BtnContainer>
              <Button
                handleClick={() => onNextQuestion()}
                buttonText="Next question" />
            </BtnContainer>
            <Progressbar />
          </WhiteWrapper>
        </InnerWrapper>
      </Background>
    )
  } else {
    return (
      <Background alt="70s pattern">
        <InnerWrapper>
          <WhiteWrapper>
            <Summary />
            <Button
              handleClick={() => onRestart()}
              buttonText="Start over" />
          </WhiteWrapper>
        </InnerWrapper>
      </Background>
    )
  }
}

const Background = styled.main`
background-image: url(${background});
position: relative;
width: 100vw;
height:80vh;
background-size: cover;
margin: auto;
`;

const InnerWrapper = styled.div`
  position: absolute;
  left: 25%;
  width: 50vw;
  height: 50vh;
  margin-top: 3rem;
  padding: 3rem;
`

const WhiteWrapper = styled.div`
background-color: #eee8d2;
opacity: 0.9;
padding: 20px;
border-radius: 5px;
`

const BtnContainer = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 15px;
`

export default Main;