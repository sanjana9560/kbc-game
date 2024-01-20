


// const musicSound = new Audio('music.mp3');
// let Correct_point=0;
//   let arr = [];
//   var url = new URL(window.location.href);
//   var urlParams = new URLSearchParams(window.location.search);
//   let paramUserID = urlParams.get('userID');
//   let ParamOrgID= urlParams.get('OrgID');
//   let M2OstAssesmentID= urlParams.get('M2ostAssessmentId');
//   let id_game=urlParams.get('idgame');
//   let gameAssesmentId=urlParams.get('gameassid');
//   let currentQuestionIndex=0;
//   let QuizeListResponse;
// let UID=[];




// // async function getIdUser(url=`https://www.playtolearn.in/Mini_games_beta/api/UserDetail?OrgId=${ParamOrgID}&Email=${paramUserID}`){
// // async function getIdUser(url=`https://www.playtolearn.in/Wordbandit_api/api/Gamesetuplist?OrgID=${ParamOrgID}&GameID=6&UserID=bata502_BA`){

// //  try{
// //  const response= await fetch(url, { method: 'GET' });
// //  const encryptedData = await response.json();
// //  const IdUser=JSON.parse(encryptedData);
// //  console.log(IdUser);
// //  UID.push(IdUser);
// //  console.log(UID[0].Id_User);
// //  getDetails();
// // //  loader.style.display = "none";
// //  return encryptedData;
 
// //  }
// //  catch (error) {
// //  console.error('Fetch error:', error.message);
// //  throw error;
// //  }
// // }
// ParamOrgID=15;
// async function getDetails(url =`https://www.playtolearn.in/Wordbandit_api/api/Gamesetuplist?OrgID=${ParamOrgID}&GameID=6&UserID=bata502_BA`) {
//  try {
//  const response = await fetch(url, { method: 'GET' });

//  if (!response.ok) {
//  throw new Error(`Network response was not ok, status code: ${response.status}`);
//  }

//  const encryptedData = await response.json();
//  let questions=JSON.parse(encryptedData);
//  QuizeListResponse=questions?.quizelist;
// //  setTimeout(()=>{
//   addQuiz();
// //  },3000)


//  console.log('ResponseData',QuizeListResponse);


//  // Assuming the response is the encrypted data
 

 
//  return encryptedData;
//  } catch (error) {
// //  console.error('Fetch error:', error.message);
//  throw error;
//  }
// }


// function initializePage() {
//  try {
//   musicSound.play();
// //  getIdUser();
// getDetails();
 
//  } catch (error) {
//  // console.error('Error during initialization:', error.message);
//  }
// }

// document.addEventListener('DOMContentLoaded', initializePage);


// function playBackgroundMusic() {
//   musicSound.play();
// }


const musicSound = new Audio('music.mp3');
let Correct_point = 0;
let arr = [];
var url = new URL(window.location.href);
var urlParams = new URLSearchParams(window.location.search);
let paramUserID = urlParams.get('userID');
let ParamOrgID = urlParams.get('OrgID');
let M2OstAssesmentID = urlParams.get('M2ostAssessmentId');
let id_game = urlParams.get('idgame');
let gameAssesmentId = urlParams.get('gameassid');
let currentQuestionIndex = 0;
let QuizeListResponse;
let UID = [];

ParamOrgID = 15;
async function getDetails(url = `https://www.playtolearn.in/Wordbandit_api/api/Gamesetuplist?OrgID=${ParamOrgID}&GameID=6&UserID=bata502_BA`) {
    try {
        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`Network response was not ok, status code: ${response.status}`);
        }

        const encryptedData = await response.json();
        let questions = JSON.parse(encryptedData);
        QuizeListResponse = questions?.quizelist;

        // Call addQuiz immediately after setting QuizeListResponse
        addQuiz();

        console.log('ResponseData', QuizeListResponse);

        // Assuming the response is the encrypted data
        return encryptedData;
    } catch (error) {
        console.error('Fetch error:', error.message);
        throw error;
    }
}

function initializePage() {
    try {
        // musicSound.play();
        getDetails();
    } catch (error) {
        console.error('Error during initialization:', error.message);
    }
}

document.addEventListener('DOMContentLoaded', initializePage);

// ... (rest of your code)



let getResponse;

 async function saveAssessment(data) {
 let postData = data;
 
 
 const baseUrl = 'https://www.playtolearn.in/';
 const endpoint = 'Mini_games_beta/api/assessmentdetailuserlog';
 const url = baseUrl + endpoint;
 
 
 
 const response = await fetch(url, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 // Add any additional headers if required
 },
 body: JSON.stringify(postData),
 });
 
 // if (!response.ok) {
 // throw new Error(`Network response was not ok, status code: ${response.status}`);
 // }
 console.log('response',response);
 const responseData = await response.json();

 
 
 return responseData;
 }
 async function saveAssessmentMasterLog(data) {
 let postData = data;
 console.log( JSON.stringify(postData));
 
 
 const baseUrl = 'https://www.playtolearn.in/';
 const endpoint = 'Mini_games_beta/api/gameusermasterlog';
 const url = baseUrl + endpoint;
 
 
 
 const response = await fetch(url, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 // Add any additional headers if required
 },
 body: JSON.stringify(postData),
 });

 
 // if (!response.ok) {
 // throw new Error(`Network response was not ok, status code: ${response.status}`);
 
 // }
// console.log('response',response);
 const responseData = await response.json();
 
 
 return responseData;
 }

 function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}




let questionIndex = 0;
let timer;
// function startTimer() {
//     let timeSet = 5;
//     let settimeDiv = document.getElementById("timer-sec");
    
//     timer = setInterval(() => {
//         settimeDiv.innerHTML = timeSet < 10 ? "0" + timeSet : timeSet;
//         timeSet--;

//         if (timeSet < 0) {
//             clearInterval(timer);
//             questionIndex++;
//             let optionContainer = document.getElementById("option-container");
//             optionContainer.innerHTML = "";

//             // Check if there are more questions
//             if (questionIndex < QuizeListResponse.length) {
//                 // Display the next question
//                 addQuiz();
//             }
//         }
//     }, 1000);
// }


// function startTimer(condition,time){
//   if(condition==true){
//   let timeSet = 5;
//   let settimeDiv = document.getElementById("timer-sec");
    
//      arr.push(setInterval(() => {
//       // settimeDiv.innerHTML= timeSet;
//       settimeDiv.innerHTML = timeSet < 10 ? "0" + timeSet : timeSet;
//       // console.log(settimeDiv.innerHTML,"sanju");
//     timeSet--;
//     if (timeSet===0){
//       startTimer(false);
//       let element =  document.getElementById("quiz");
//       element.style.display="none";
//       let optionContainer = document.getElementById("option-container");
//       optionContainer.innerHTML = "";
//   addQuiz();

//     }
//     }, 1000)
//      );
//   }
//   else if(condition==false){
//   let settimeDiv = document.getElementById("timer-sec");
//   settimeDiv.innerHTML="00";
//     arr.map(el => {
//       clearInterval(el);
//       arr=[];
//     })
//   }
//   questionIndex++;
//   }

function startTimer(condition, time) {
  if (condition === true) {
      let timeSet = time || 5; // Use the provided time or default to 5 seconds
      let settimeDiv = document.getElementById("timer-sec");

      arr.push(setInterval(() => {
          settimeDiv.innerHTML = timeSet < 10 ? "0" + timeSet : timeSet;
          timeSet--;

          if (timeSet === 0) {
              startTimer(false);
              let element = document.getElementById("quiz");
              element.style.display = "none";
              let optionContainer = document.getElementById("option-container");
              optionContainer.innerHTML = "";
              addQuiz();
          }
      }, 1000));
  } else if (condition === false) {
      questionIndex++; // Increment questionIndex before clearing intervals
      let settimeDiv = document.getElementById("timer-sec");
      settimeDiv.innerHTML = "00";

      arr.forEach(el => {
          clearInterval(el);
      });
      arr = []; // Clear the intervals array after clearing intervals
  }
}



function option(key) {
    // Your existing logic for handling op
    if (key=="Correct_Options"){
      Correct_point+=QuizeListResponse[questionIndex]["Correct_point"];
      console.log("you win",Correct_point);
    }
    else{
      Correct_point+=QuizeListResponse[questionIndex]["Wrong_point"];
      console.log("you win",Correct_point);

    }

    startTimer(false);


    


    questionIndex+1;
    let optionContainer = document.getElementById("option-container");
    optionContainer.innerHTML = "";
    addQuiz();
}

function addQuiz() {
  // musicSound.play();
    // startTimer();
    // for (let i = 0; i <QuizeListResponse.length; i++){
      let element = document.getElementById("quiz");
      element.style.display = "flex";
      document.getElementById("ques").innerHTML=`${questionIndex+1}. ${QuizeListResponse[questionIndex].Question}`;
    let optionContainer = document.getElementById("option-container");
    shuffle(Object.keys(QuizeListResponse[questionIndex])).filter(el=>{
      // console.log(el,"arry");
        if (el.includes("Options")){

          optionContainer.innerHTML += `<button class="option" id="option" style="border-radius:20px;" onclick="option('${el}')"
          <span class="label">${QuizeListResponse[questionIndex][el]}</span></button>`;          
        }

      })
    startTimer(true,QuizeListResponse[questionIndex].Timer);

    
}





// function addQuiz() {
//   let element = document.getElementById("quiz");
//   element.style.display = "flex";
//   document.getElementById("ques").innerHTML = QuizeListResponse[questionIndex].Question;
//   let optionContainer = document.getElementById("option-container");

//   // Shuffle options
//   const shuffledOptions = shuffle(Object.keys(QuizeListResponse[questionIndex]).filter(el => el.includes("Options")));

//   // Render shuffled options
//   shuffledOptions.forEach(el => {
//       optionContainer.innerHTML += `<button class="option" id="option" style="border-radius:20px;" onclick="option('${el}')">
//           <span class="label">${QuizeListResponse[questionIndex][el]}</span>
//       </button>`;
//   });

//   startTimer(true, QuizeListResponse[questionIndex].Timer);
// }





// }


    // questionInput.innerHTML = questions[questionIndex].Assessment_Question;

    // console.log("QuestionList",QuizeListResponse);
    // let questionsList=QuizeListResponse;

   
    // questionInput.append(questionsList[0]?.Question);
    // // questionsList
    // for (let i = 0; i < questionsList[questionIndex].optionList.length; i++) {
    //        }

    // Add timer logic here