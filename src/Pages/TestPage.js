import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const TestPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      text: '강아지게 고양이게',
      imageUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMjAyMDdfMjEy/MDAxNjQ0MTk0Mzk2MzY3.WAeeVCu2V3vqEz_98aWMOjK2RUKI_yHYbuZxrokf-0Ug.sV3LNWlROCJTkeS14PMu2UBl5zTkwK70aKX8B1w2oKQg.JPEG.41minit/1643900851960.jpg?type=w800',
      choices: ['강아지', '고양이', '도마뱀'],
    },
    {
      id: 2,
      text: '이 집단의 명칭은?',
      imageUrl: 'https://i.namu.wiki/i/tV1sVC5AHDFl3EjOAWqmOew1VR8E5d0dOwz9svov2d5MHWBMmDTRDuEab70zRX5Wt-G-BdJi8zij9N-ITfk20XKwc-BQHT8ZbpeDQ57QlBfDrLyL9R0ARjX--aIMqugdUH6ZwPvQrvzciNSsNESZSA.webp',
      choices: ['검은소 삼총사', '검은장미 삼총사', '붉은장미 삼총사'],
    }
    //질문 추가될 것
  ];

  const pageMove = () => {

    if(currentQuestion < questions.length - 1){
      setCurrentQuestion(currentQuestion + 1);
    }else{navigate('/result');}

  };

  return (

    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>상식 테스트</h1>
      <div style={{marginTop: '60px'}} >

        {questions.map((questions, id) => (
          <div key={questions.id} style={{display: id === currentQuestion ? 'block' : 'none' }}>
            
            <img 
              src={questions.imageUrl}
              alt={`질문 ${id + 1}의 이미지`}
              style={{ maxWidth: '40%', display: 'block', maxHeight: '300px', margin: 'auto' }}
            />
            <p style={{marginTop: '35px', marginBottom: '35px'}}>{questions.text}</p>
            <div>
              {questions.choices.map((choice, choiceIndex) => (
                <CustomButton key={choiceIndex} title={choice} onClick={() => pageMove()}/>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>

  );
};

export default TestPage;
