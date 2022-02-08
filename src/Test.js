import React, { useState } from 'react';
import './Test.css';
import StopWatch from './StopWatch';
function Test() {

  const questions = [
    {
      questionText: '1. WHO IS CARGO FE ',
      answerOptions: [
        { answerText: 'SHIPPING LINE', isCorrect: false },
        { answerText: 'CARRIER', isCorrect: true },
        { answerText: 'FREIGHT FORWARDER', isCorrect: false },
        { answerText: 'OCEAN FORWARDER', isCorrect: true },
      ]
},
{	
questionText: '2. CFS STAND FOR',
      answerOptions: [
        { answerText: 'CARGO FEE STATION', isCorrect: false },
        { answerText: 'CONTAINER FEE STATION', isCorrect: true },
        { answerText: 'CARGO YARD STATION', isCorrect: false },
        { answerText: 'CONTAINER FREIGHT STATION', isCorrect: true },
      ],
    },
{
      questionText: '3. CY STAND FOR',
      answerOptions: [
        { answerText: 'CARGO YARD', isCorrect: false },
        { answerText: 'CARRIER YARD', isCorrect: true },
        { answerText: 'CARGO SHIPPING YARD', isCorrect: false },
        { answerText: 'CONTAINER YARD', isCorrect: true },
      ],
    },
{
      questionText: '4. OF STAND FOR',
      answerOptions: [
        { answerText: 'OCENIA FREIGHT', isCorrect: false },
        { answerText: 'ORGIN FREIGHT', isCorrect: true },
        { answerText: 'OCEAN FORWARDER', isCorrect: false },
        { answerText: 'OCEAN FREIGHT', isCorrect: true },
      ],
    },
{
      questionText: '5. IGM STAND FOR',
      answerOptions: [
        { answerText: 'IMPORT GENERATE MANIFEST', isCorrect: false },
        { answerText: 'IMPORT GENERATE MECHANISM', isCorrect: true },
        { answerText: 'IMPORT GR MECHANISM', isCorrect: false },
        { answerText: 'IMPORT GENERAL MANIFEST', isCorrect: true },
      ],
    },
{
      questionText: '6. RMB STAND FOR',
      answerOptions: [
        { answerText: 'RIN MIN BE', isCorrect: false },
        { answerText: 'RIN MIN BEE', isCorrect: true },
        { answerText: 'REN MINN BI', isCorrect: false },
        { answerText: 'REN MIN BI', isCorrect: true },
      ],
    },
{
      questionText: '7. CRO STAND FOR',
      answerOptions: [
        { answerText: 'CARGO RELEASE ORDER', isCorrect: false },
        { answerText: 'CARGO REAL ORDER', isCorrect: true },
        { answerText: 'CARRIER RELEASE ORDER', isCorrect: false },
        { answerText: 'CONTAINER RELEASE ORDER', isCorrect: true },
      ],
    },
{
      questionText: '8. FO STAND FOR',
      answerOptions: [
        { answerText: 'FEE OUT', isCorrect: false },
        { answerText: 'FREGHT OUT', isCorrect: true },
        { answerText: 'FREIGHT ORIGIN', isCorrect: false },
        { answerText: 'FREE OUT', isCorrect: true },
      ],
    },
{
      questionText: '9. FOB STAND FOR ',
      answerOptions: [
        { answerText: 'FEE ON BOARD', isCorrect: false },
        { answerText: 'FREGHT ON BOARD', isCorrect: true },
        { answerText: 'FREE ON BORAD', isCorrect: false },
        { answerText: 'FREE ON BOARD', isCorrect: true },
      ],
    },
{
      questionText: '10. CIF STAND FOR',
      answerOptions: [
        { answerText: 'CARRIER IMPORT FREIGHT', isCorrect: false },
        { answerText: 'CARRIER IMPORT FEE', isCorrect: true },
        { answerText: 'COST IMPORT FREIGHT', isCorrect: false },
        { answerText: 'COST INSURANCE FREIGHT', isCorrect: true },
      ],
    },
{
      questionText: '11. ROW STAND FOR',
      answerOptions: [
        { answerText: 'RAST OF WORLD', isCorrect: false },
        { answerText: 'REAL OF WORLD', isCorrect: true },
        { answerText: 'REVENUE OF WORLD', isCorrect: false },
        { answerText: 'REST OF WORLD', isCorrect: true },
      ],
    },
{
      questionText: '12. ISF STAND FOR',
      answerOptions: [
        { answerText: 'IMPORT SECURITY FILING', isCorrect: false },
        { answerText: 'IMPORT SECURITY FILLING', isCorrect: true },
        { answerText: 'IMPORT SERVICE FILE', isCorrect: false },
        { answerText: 'IMPORTER SECURITY FILING', isCorrect: true },
      ],
    },
{
      questionText: '13. AMS STAND FOR',
      answerOptions: [
        { answerText: 'AUTOMATE MICRO SYSTEM', isCorrect: false },
        { answerText: 'AUTOMATING MANIFEST SERVICE', isCorrect: true },
        { answerText: 'AUTOMATED MICRO SERVICE', isCorrect: false },
        { answerText: 'AUTOMATED MANIFEST SYSTEM', isCorrect: true },
      ],
    },
{
      questionText: '14. ACI STAND FOR',
      answerOptions: [
        { answerText: 'AUTOMATED CARGO IDENTITY', isCorrect: false },
        { answerText: 'AUTOMATING CARRIER INFORMATION', isCorrect: true },
        { answerText: 'ADVANCED CARGO IDENTITY', isCorrect: false },
        { answerText: 'ADVANCED CARGO INFORMATION', isCorrect: true },
      ],
    },
{
      questionText: '15. FCL STAND FOR',
      answerOptions: [
        { answerText: 'FIT CONTAINER LEVEL', isCorrect: false },
        { answerText: 'FULL CONTAINER LEVEL', isCorrect: true },
        { answerText: 'FOOD CONTAINER LOW', isCorrect: false },
        { answerText: 'FULL CONTAINER LOAD', isCorrect: true },
      ],
    },
{
      questionText: '16. OBL STAND FOR ',
      answerOptions: [
        { answerText: 'OCEAN BILL OF LADING', isCorrect: false },
        { answerText: 'OUTER BILL OF LADING', isCorrect: true },
        { answerText: 'ORIGIN BILL OF LADING', isCorrect: false },
        { answerText: 'ORIGINAL BILL OF LADING', isCorrect: true },
      ],
    },
{
      questionText: '17. SO STAND FOR',
      answerOptions: [
        { answerText: 'SHIPMENT ORDER', isCorrect: false },
        { answerText: 'SHIP ORDER', isCorrect: true },
        { answerText: 'SHIPPING BILL ORDER', isCorrect: false },
        { answerText: 'SHIPPING ORDER', isCorrect: true },
      ],
    },
{
      questionText: '18. LC STAND FOR ',
      answerOptions: [
        { answerText: 'LOW CONTAINER', isCorrect: false },
        { answerText: 'LEVEL OF CREDIT', isCorrect: true },
        { answerText: 'LETTER OF CARGO', isCorrect: false },
        { answerText: 'LETTER OF CREDIT', isCorrect: true },
      ],
    },
{
      questionText: '19. MBL ISSUED BY',
      answerOptions: [
        { answerText: 'AIR FORWARER', isCorrect: false },
        { answerText: 'CHA', isCorrect: true },
        { answerText: 'OCEAN FORWARDER', isCorrect: false },
        { answerText: 'CARRIER', isCorrect: true },
      ],
    },
{
      questionText: '20. THC STAND FOR ',
      answerOptions: [
        { answerText: 'TERMINAL HAOULAGE CHARGES', isCorrect: false },
        { answerText: 'TIRE HANDLING CHARGES', isCorrect: true },
        { answerText: 'TERMINAL HEAVY CHARGE', isCorrect: false },
        { answerText: 'TERMINAL HANDLING CHARGES', isCorrect: true },
      ],
    },
{
      questionText: '21. DAP STAND FOR ',
      answerOptions: [
        { answerText: 'DUTY AT PLACE', isCorrect: false },
        { answerText: 'DUTY  AT PORT', isCorrect: true },
        { answerText: 'DELIVERY AT PAID', isCorrect: false },
        { answerText: 'DELIVERED AT PLACE', isCorrect: true },
      ],
    },
{
      questionText: '22. WHICH OF THE FOLLOWING IS AN INLAND PORT',
      answerOptions: [
        { answerText: 'NHAVA SHEVA', isCorrect: false },
        { answerText: 'TUGHLAKABAD (TKD)', isCorrect: true },
        { answerText: 'DELHI AIR CARGO', isCorrect: false },
        { answerText: 'BOMBAY AIR CARGO', isCorrect: true },
      ],
    },
{
      questionText: '23. WHO IS PREPARATION OF MBL',
      answerOptions: [
        { answerText: 'CHA', isCorrect: false },
        { answerText: 'FORWARDER', isCorrect: true },
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'LINER', isCorrect: true },
      ],
    },
{
      questionText: '24. BO STAND FOR',
      answerOptions: [
        { answerText: 'BANKING ORDER', isCorrect: false },
        { answerText: 'BILL ORDER', isCorrect: true },
        { answerText: 'BRANCH OFFICE', isCorrect: false },
        { answerText: 'BOOKING ORDER', isCorrect: true },
      ],
    },
{
      questionText: '25. HOW MANY DIGIT OF COMPANY CODES IN EDISON',
      answerOptions: [
        { answerText: '6 AND 7', isCorrect: false },
        { answerText: '5 AND 8', isCorrect: true },
        { answerText: '4 AND 5', isCorrect: false },
        { answerText: '6 AND 8', isCorrect: true },
      ],
    },
{
      questionText: '26. HBL ISSUED BY',
      answerOptions: [
        { answerText: 'CHA', isCorrect: false },
        { answerText: 'LINER', isCorrect: true },
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'FORWARDER', isCorrect: true },
      ],
    },
{
      questionText: '27. GUANGZHOU STAND FOR',
      answerOptions: [
        { answerText: 'TAO', isCorrect: false },
        { answerText: 'NGB', isCorrect: true },
        { answerText: 'SHA', isCorrect: false },
        { answerText: 'CAN', isCorrect: true },
      ],
    },
{
      questionText: '28. SOB STAND FOR',
      answerOptions: [
        { answerText: 'SHIPPER ON BOARD', isCorrect: false },
        { answerText: 'SHIPPER OF BOOKING', isCorrect: true },
        { answerText: 'SECURITY OF BOOKING', isCorrect: false },
        { answerText: 'SHIPPED ON BOARD', isCorrect: true },
      ],
    },

  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
<div className='body'>
<div className='left'>
<div><b>Select Your Name:</b></div>
<select id="name" name="">
  <option value="A7799">A7799	Gaurav Kumar</option>
  <option value="A7811">A7811	Tanveer Hayat</option>
  <option value="A7822">A7822	Gaurav Kumar Chauhan</option>
  <option value="A7850">A7850	Yogesh Bhan</option>
  <option value="A7852">A7852	Jitesh Singh</option>
  <option value="A7856">A7856	Maneesh Kumar</option>
  <option value="A7972">A7972	Sonal Rastogi</option>
  <option value="A7981">A7981	Nikhil Verma</option>
  <option value="A7998">A7998	Nikhil Sharma</option>
  <option value="A8034">A8034	Tanuj Verma</option>
  <option value="A8035">A8035	Chinmay Shukla</option>
  <option value="A8022">A8022	Upasana Mishra</option>
  <option value="A8023">A8023	Mansi Vishnoi</option>
  <option value="A8037">A8037	Preeti Chauhan</option>
  <option value="A8036">A8036	Sanjiv Sharma</option>
  <option value="A8041">A8041	Amit Bose</option>
  <option value="A8079">A8079	Rahul Kumar</option>
  <option value="A8088">A8088	Anjali Mishra</option>
  <option value="A8092">A8092	Noor</option>
  <option value="A8102">A8102	Pramod Pathak</option>
  <option value="A8114">A8114	Shweta Prajapati</option>
  <option value="A8134">A8134	Pradeep Maurya</option>
  <option value="A8199">A8199 Ashish Kumar Agrawal</option>
  <option value="A8207">A8207	Riya Sharma</option>
  <option value="A8275">A8275	Medhni</option>
  <option value="A8330">A8330 Singh Rawat</option>
  <option value="A8331">A8331		Gyan prakash Dubey</option>
  <option value="A8329">A8329	Sunny Haldar</option>
</select>
</div>
    <div className='header'><b>Choose the Correct Answer:</b></div>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}<br/>
            Your Scrore is {(score/questions.length)*100}%.
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
      <div className="button"><StopWatch/></div>
   
    </div>
  );
}

export default Test;

