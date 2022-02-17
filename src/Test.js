import React, { useState } from 'react';
import './Test.css';
import StopWatch from './StopWatch';
function Test() {
  const questions = [
{	
  id:1,
	questionText:'CFS STAND FOR',
      answerOptions: [
        { answerText: 'CARGO FEE STATION', isCorrect: false },
        { answerText: 'CONTAINER FEE STATION', isCorrect: false },
        { answerText: 'CARGO YARD STATION', isCorrect: false },
        { answerText: 'CONTAINER FREIGHT STATION', isCorrect: true },
      ],
    },
{
	id:2,
	questionText:'CY STAND FOR',
      answerOptions: [
        { answerText: 'CARGO YARD', isCorrect: false },
        { answerText: 'CARRIER YARD', isCorrect: false },
        { answerText: 'CARGO SHIPPING YARD', isCorrect: false },
        { answerText: 'CONTAINER YARD', isCorrect: true },
      ],
    },
{
	id:3,
	questionText:'OF STAND FOR',
      answerOptions: [
        { answerText: 'OCENIA FREIGHT', isCorrect: false },
        { answerText: 'ORGIN FREIGHT', isCorrect: false },
        { answerText: 'OCEAN FORWARDER', isCorrect: false },
        { answerText: 'OCEAN FREIGHT', isCorrect: true },
      ],
    },
{
	id:4,
	questionText:'IGM STAND FOR',
      answerOptions: [
        { answerText: 'IMPORT GENERATE MANIFEST', isCorrect: false },
        { answerText: 'IMPORT GR MECHANISM', isCorrect: false },
        { answerText: 'IMPORT GENERAL MANIFEST', isCorrect: true },
        { answerText: 'IMPORT GENERATE MECHANISM', isCorrect: true },
      ],
    },
{
	id:5,
	questionText:'RMB STAND FOR',
      answerOptions: [
        { answerText: 'RIN MIN BE', isCorrect: false },
        { answerText: 'REN MINN BI', isCorrect: false },
        { answerText: 'REN MIN BI', isCorrect: true },
        { answerText: 'RIN MIN BEE', isCorrect: true },
      ],
    },
{
	id:6,
	questionText:'CRO STAND FOR',
      answerOptions: [
        { answerText: 'CARGO RELEASE ORDER', isCorrect: false },
        { answerText: 'CARRIER RELEASE ORDER', isCorrect: false },
        { answerText: 'CONTAINER RELEASE ORDER', isCorrect: true },
        { answerText: 'CARGO REAL ORDER', isCorrect: true },
      ],
    },
{
	id:7,
	questionText:'FO STAND FOR',
      answerOptions: [
        { answerText: 'FEE OUT', isCorrect: false },
        { answerText: 'FREIGHT ORIGIN', isCorrect: false },
        { answerText: 'FREE OUT', isCorrect: true },
        { answerText: 'FREGHT OUT', isCorrect: true },
      ],
    },
{
	id:8,
	questionText:'FOB STAND FOR ',
      answerOptions: [
        { answerText: 'FEE ON BOARD', isCorrect: false },
        { answerText: 'FREE ON BORAD', isCorrect: false },
        { answerText: 'FREE ON BOARD', isCorrect: true },
        { answerText: 'FREGHT ON BOARD', isCorrect: true },
      ],
    },
{
	id:9,
	questionText:'CIF STAND FOR',
      answerOptions: [
        { answerText: 'CARRIER IMPORT FREIGHT', isCorrect: false },
        { answerText: 'COST IMPORT FREIGHT', isCorrect: false },
        { answerText: 'COST INSURANCE FREIGHT', isCorrect: true },
        { answerText: 'CARRIER IMPORT FEE', isCorrect: true },
      ],
    },
{
	id:10,
	questionText:'ROW STAND FOR',
      answerOptions: [
        { answerText: 'RAST OF WORLD', isCorrect: false },
        { answerText: 'REVENUE OF WORLD', isCorrect: false },
        { answerText: 'REST OF WORLD', isCorrect: true },
        { answerText: 'REAL OF WORLD', isCorrect: true },
      ],
    },
{
	id:11,
	questionText:'ISF STAND FOR',
      answerOptions: [
        { answerText: 'IMPORT SECURITY FILING', isCorrect: false },
        { answerText: 'IMPORT SERVICE FILE', isCorrect: false },
        { answerText: 'IMPORTER SECURITY FILING', isCorrect: true },
        { answerText: 'IMPORT SECURITY FILLING', isCorrect: true },
      ],
    },
{
	id:12,
	questionText:'AMS STAND FOR',
      answerOptions: [
        { answerText: 'AUTOMATE MICRO SYSTEM', isCorrect: false },
        { answerText: 'AUTOMATED MICRO SERVICE', isCorrect: false },
        { answerText: 'AUTOMATED MANIFEST SYSTEM', isCorrect: true },
        { answerText: 'AUTOMATING MANIFEST SERVICE', isCorrect: true },
      ],
    },
{
	id:13,
	questionText:'ACI STAND FOR',
      answerOptions: [
        { answerText: 'AUTOMATED CARGO IDENTITY', isCorrect: false },
        { answerText: 'ADVANCED CARGO IDENTITY', isCorrect: false },
        { answerText: 'ADVANCED CARGO INFORMATION', isCorrect: true },
        { answerText: 'AUTOMATING CARRIER INFORMATION', isCorrect: true },
      ],
    },
{
	id:14,
	questionText:'FCL STAND FOR',
      answerOptions: [
        { answerText: 'FIT CONTAINER LEVEL', isCorrect: false },
        { answerText: 'FOOD CONTAINER LOW', isCorrect: false },
        { answerText: 'FULL CONTAINER LOAD', isCorrect: true },
        { answerText: 'FULL CONTAINER LEVEL', isCorrect: true },
      ],
    },
{
	id:15,
	questionText:'OBL STAND FOR ',
      answerOptions: [
        { answerText: 'OCEAN BILL OF LADING', isCorrect: false },
        { answerText: 'ORIGIN BILL OF LADING', isCorrect: false },
        { answerText: 'ORIGINAL BILL OF LADING', isCorrect: true },
        { answerText: 'OUTER BILL OF LADING', isCorrect: true },
      ],
    },
{
	id:16,
	questionText:'SO STAND FOR',
      answerOptions: [
        { answerText: 'SHIPMENT ORDER', isCorrect: false },
        { answerText: 'SHIPPING BILL ORDER', isCorrect: false },
        { answerText: 'SHIPPING ORDER', isCorrect: true },
        { answerText: 'SHIP ORDER', isCorrect: true },
      ],
    },
{
	id:17,
	questionText:'LC STAND FOR ',
      answerOptions: [
        { answerText: 'LOW CONTAINER', isCorrect: false },
        { answerText: 'LETTER OF CARGO', isCorrect: false },
        { answerText: 'LETTER OF CREDIT', isCorrect: true },
        { answerText: 'LEVEL OF CREDIT', isCorrect: true },
      ],
    },
{
	id:18,
	questionText:'MBL ISSUED BY',
      answerOptions: [
        { answerText: 'AIR FORWARER', isCorrect: false },
        { answerText: 'OCEAN FORWARDER', isCorrect: false },
        { answerText: 'CARRIER', isCorrect: true },
        { answerText: 'CHA', isCorrect: true },
      ],
    },
{
	id:19,
	questionText:'THC STAND FOR ',
      answerOptions: [
        { answerText: 'TERMINAL HAOULAGE CHARGES', isCorrect: false },
        { answerText: 'TERMINAL HEAVY CHARGE', isCorrect: false },
        { answerText: 'TERMINAL HANDLING CHARGES', isCorrect: true },
        { answerText: 'TIRE HANDLING CHARGES', isCorrect: true },
      ],
    },
{
	id:20,
	questionText:'DAP STAND FOR ',
      answerOptions: [
        { answerText: 'DUTY AT PLACE', isCorrect: false },
        { answerText: 'DELIVERY AT PAID', isCorrect: false },
        { answerText: 'DELIVERED AT PLACE', isCorrect: true },
        { answerText: 'DUTY  AT PORT', isCorrect: true },
      ],
    },
{
	id:21,
	questionText:'WHICH OF THE FOLLOWING IS AN INLAND PORT',
      answerOptions: [
        { answerText: 'NHAVA SHEVA', isCorrect: false },
        { answerText: 'DELHI AIR CARGO', isCorrect: false },
        { answerText: 'BOMBAY AIR CARGO', isCorrect: true },
        { answerText: 'TUGHLAKABAD (TKD)', isCorrect: true },
      ],
    },
{
	id:22,
	questionText:'WHO IS PREPARATION OF MBL',
      answerOptions: [
        { answerText: 'CHA', isCorrect: false },
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'LINER', isCorrect: true },
        { answerText: 'FORWARDER', isCorrect: true },
      ],
    },
{
	id:23,
	questionText:'BO STAND FOR',
      answerOptions: [
        { answerText: 'BANKING ORDER', isCorrect: false },
        { answerText: 'BRANCH OFFICE', isCorrect: false },
        { answerText: 'BOOKING ORDER', isCorrect: true },
        { answerText: 'BILL ORDER', isCorrect: true },
      ],
    },
{
	id:24,
	questionText:'HOW MANY DIGIT OF COMPANY CODES IN EDISON',
      answerOptions: [
        { answerText: '6 AND 7', isCorrect: false },
        { answerText: '4 AND 5', isCorrect: false },
        { answerText: '6 AND 8', isCorrect: true },
        { answerText: '5 AND 8', isCorrect: true },
      ],
    },
{
	id:25,
	questionText:'HBL ISSUED BY',
      answerOptions: [
        { answerText: 'CHA', isCorrect: false },
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'FORWARDER', isCorrect: true },
        { answerText: 'LINER', isCorrect: true },
      ],
    },
{
	id:26,
	questionText:'GUANGZHOU STAND FOR',
      answerOptions: [
        { answerText: 'TAO', isCorrect: false },
        { answerText: 'SHA', isCorrect: false },
        { answerText: 'CAN', isCorrect: true },
        { answerText: 'NGB', isCorrect: true },
      ],
    },
{
	id:27,
	questionText:'SOB STAND FOR',
      answerOptions: [
        { answerText: 'SHIPPER ON BOARD', isCorrect: false },
        { answerText: 'SECURITY OF BOOKING', isCorrect: false },
        { answerText: 'SHIPPED ON BOARD', isCorrect: true },
        { answerText: 'SHIPPER OF BOOKING', isCorrect: true },
      ],
},
{
	id:28,
	questionText:'WHAT IS THE PRE-ALERT',
      answerOptions: [
        { answerText: 'FINAL LOAD PLAN', isCorrect: false },
        { answerText: 'FINAL VESSEL', isCorrect: false },
        { answerText: 'FINAL MBL', isCorrect: false },
        { answerText: 'FINAL HBL', isCorrect: true },
      ],
},
{
	id:29,
	questionText:'WHO iS SEND THE FINAL PRE-ALERT',
      answerOptions: [
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'BUYER', isCorrect: false },
        { answerText: 'CARRER', isCorrect: false },
        { answerText: 'FORWARDER', isCorrect: true },
      ],
},
{
	id:30,
	questionText:'WHO IS RELEASE THE "D.O"',
      answerOptions: [
        { answerText: 'FORWARDER', isCorrect: false },
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'CONSIGNEE', isCorrect: false },
        { answerText: 'DESTINATION AGENT', isCorrect: true },
      ],
},
{
	id:31,
	questionText:'WHO IS ISSUED THE INV & PL',
      answerOptions: [
        { answerText: 'BOOKED BY', isCorrect: false },
        { answerText: 'FORWARDER', isCorrect: false },
        { answerText: 'CONSIGNEE', isCorrect: false },
        { answerText: 'SHIPPER', isCorrect: true },
      ],
},
{
	id:32,
	questionText:'WHAT TIME SHOULD WE DO "AMS" FILE',
      answerOptions: [
        { answerText: 'BEFORE 12 HOURS', isCorrect: false },
        { answerText: 'BEFORE 24 HOURS', isCorrect: false },
        { answerText: 'BEFORE 48 HOURS', isCorrect: false },
        { answerText: 'BEFORE 72 HOURS', isCorrect: true },
      ],
},
{
	id:33,
	questionText:'HOW MUCH PENALTY IS LEVIED FOR WRONG DOING "AMS"',
      answerOptions: [
        { answerText: 'USD 3000', isCorrect: false },
        { answerText: 'RMB 3000', isCorrect: false },
        { answerText: 'RMB 5000', isCorrect: false },
        { answerText: 'USD 5000', isCorrect: true },
      ],
},
{
	id:34,
	questionText:'WHO IS RESPONSIBLE FOR THE DELAYING "AMS"',
      answerOptions: [
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'LINER', isCorrect: false },
        { answerText: 'CARRIER', isCorrect: false },
        { answerText: 'FORWARDER', isCorrect: true },
      ],
},
{
	id:35,
	questionText:'WHAT TIME SHOULD WE DO "ISF" FILE',
      answerOptions: [
        { answerText: 'BEFORE 12 HOURS', isCorrect: false },
        { answerText: 'BEFORE 24 HOURS', isCorrect: false },
        { answerText: 'BEFORE 36 HOURS', isCorrect: false },
        { answerText: 'BEFORE 48 HOURS', isCorrect: true },
      ],
},
{
	id:36,
	questionText:'WHO IS RESPONSIBLE FOR THE DELAYING "ISF"',
      answerOptions: [
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'LINER', isCorrect: false },
        { answerText: 'CARRIER', isCorrect: false },
        { answerText: 'FORWARDER', isCorrect: true },
      ],
},
{
	id:37,
	questionText:'WHO IS ISSUED BY THE ORIGINAL NEGOTIABLE BL AND NON-NEGOTIABLE BL',
      answerOptions: [
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'LINER', isCorrect: false },
        { answerText: 'CARRIER', isCorrect: false },
        { answerText: 'SELLER SHIPPER AGENT', isCorrect: true },
      ],
},
{
	id:38,
	questionText:'WHO IS ISSUED BY THE C.R.O.',
      answerOptions: [
        { answerText: 'SHIPPER', isCorrect: false },
        { answerText: 'CONSIGNEE', isCorrect: false },
        { answerText: 'DESITINATION AGENT', isCorrect: false },
        { answerText: 'SHIPPING LINE', isCorrect: true },
      ],
},
{
	id:39,
	questionText:'WHO IS ISSUED THE SHIPPING INSTRUCTION',
      answerOptions: [
        { answerText: 'CARRIER', isCorrect: false },
        { answerText: 'CONSIGNEE', isCorrect: false },
        { answerText: 'BOOKED BY', isCorrect: false },
        { answerText: 'SHIPPER', isCorrect: true },
      ],
},
{
	id:40,
	questionText:'THE TIME AT WHICH A SHIP, CARGO IS EXPECTED TO DEPART FROM A CERTAIN PORT/TERMINAL IS CALLED',
      answerOptions: [
        { answerText: 'ATD ', isCorrect: false },
        { answerText: 'ETD', isCorrect: false },
        { answerText: 'ETA', isCorrect: false },
        { answerText: 'A AND B', isCorrect: true },
      ],
},
{
	id:41,
	questionText:'USED WHEN THERE IS A DISCREPANCY BETWEEN DESCRIPTION IN B/L AND ACTUAL GOODS IS CALLED',
      answerOptions: [
        { answerText: 'CLEAN B/L', isCorrect: false },
        { answerText: 'SOB B/L', isCorrect: false },
        { answerText: 'DISCREPANCY B/L', isCorrect: false },
        { answerText: 'CLAUSE B/L', isCorrect: true },
      ],
},
{
	id:42,
	questionText:'THIS ENDORSMENT MEANS THAT THE CARRIER HAS RECEIVED AND LOADED GOODS PHYSICALLY THE VESSEL',
      answerOptions: [
        { answerText: 'CLEAN B/L', isCorrect: false },
        { answerText: 'CLAUSE B/L', isCorrect: false },
        { answerText: 'TELEX B/L', isCorrect: false },
        { answerText: 'SOB B/L', isCorrect: true },
      ],
},
{
	id:43,
	questionText:'USED WHEN THERE IS NO DISCREPANCY BETWEEN DESCRIPTION IN B/L AND ACTUAL GOODS IS CALLED',
      answerOptions: [
        { answerText: 'FARE B/L', isCorrect: false },
        { answerText: 'SOB B/L', isCorrect: false },
        { answerText: 'CLAUSE B/L', isCorrect: false },
        { answerText: 'CLEAN B/L', isCorrect: true },
      ],
},
{
	id:44,
	questionText:'ONE VESSEL TRANSPORTS AND DELIVERS GOODS AT THE FINAL DESTINATION IS CALLED',
      answerOptions: [
        { answerText: 'TELEX B/L', isCorrect: false },
        { answerText: 'SURRENDER B/L', isCorrect: false },
        { answerText: 'ORDER B/L', isCorrect: false },
        { answerText: 'DIRECT B/L', isCorrect: true },
      ],
},
{
	id:45,
	questionText:'WHEN GOODS ARE SOLD ON TRADE CREDIT IS CALLED',
      answerOptions: [
        { answerText: 'CLEAN B/L', isCorrect: false },
        { answerText: 'CLAUSE B/L', isCorrect: false },
        { answerText: 'SURRENDER B/L', isCorrect: false },
        { answerText: 'ORDER B/L', isCorrect: true },
      ],
},
{
	id:46,
	questionText:'GOODS WILL SHIP BEFORE PAYMENT IN RECEIVED',
      answerOptions: [
        { answerText: 'CLEAN B/L', isCorrect: false },
        { answerText: 'SOB B/L', isCorrect: false },
        { answerText: 'DISCREPANCY B/L', isCorrect: false },
        { answerText: 'ORDER B/L', isCorrect: true },
      ],
},
{
	id:47,
	questionText:'CARRIER RECEIVED PAYMENT IN ADVANCE ',
      answerOptions: [
        { answerText: 'CLEAN B/L', isCorrect: false },
        { answerText: 'SOB B/L', isCorrect: false },
        { answerText: 'FARE B/L', isCorrect: false },
        { answerText: 'STRAIGHT B/L', isCorrect: true },
      ],
    },
    {
      id:48,
      questionText:'WHO IS CARGO FE ',
          answerOptions: [
            { answerText: 'SHIPPING LINE', isCorrect: false },
            { answerText: 'FREIGHT FORWARDER', isCorrect: false },
            { answerText: 'OCEAN FORWARDER', isCorrect: true },
            { answerText: 'CARRIER', isCorrect: true },
          ]
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

