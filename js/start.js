const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const loading = document.querySelector("#loading");
const result = document.querySelector("#result");


const qnaBG = document.querySelector('.QnA-BG2');
const qnaBox = document.querySelector('.QnABox-BG');
const endPoint = qnaList.length;
const select = [];


function begin()
{
    main.style.WebkitAnimation = "MidUp 0.6s";
    main.style.animation ="MidUp 0.6s";
    
    setTimeout(()=>{
        
        setTimeout(()=>{
                main.style.display = "none";
                qna.style.display = "block";
        },270)
        qnaBG.style.WebkitAnimation = "TopDown 0.6s";
        qnaBG.style.animation ="TopDown 0.6s";
        qnaBox.style.WebkitAnimation = "DownUp 0.6s";
        qnaBox.style.animation ="DownUp 0.6s";
        
        let qIdx = 0;
        goNext(qIdx);
    },270)
}




function calResult(){
    var pointArray = [
        { mbti: 'ENTJ', value:0,key:0},
        { mbti: 'ESFJ', value:0,key:1},
        { mbti: 'ESTP', value:0,key:2},
        { mbti: 'ENFP', value:0,key:3},
        { mbti: 'INTP', value:0,key:4},
        { mbti: 'ISFJ', value:0,key:5},
        { mbti: 'ISTJ', value:0,key:6},
        { mbti: 'INFP', value:0,key:7},
    ]
    
    for(let i = 0; i<endPoint; i++){
        var target = qnaList[i].a[select[i]];
        for(let j=0; j<target.type.length; j++){
            for(let k =0; k<pointArray.length; k++){
                if(target.type[j] === pointArray[k].mbti){
                    pointArray[k].value+=1;
                }
            }
        }
    }
    
    var resultArray = pointArray.sort(function (a,b){
       if(a.value>b.value){
        return-1;
    }                 
        if(a.value<b.value){
            return 1;
        }
        return 0;
    });
    
    let resultword = resultArray[0].key;
    return resultword;
    
}

function addAnswer(answerText,qIdx,idx)
{
    var a = document.querySelector('.A-Box');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
        answer.classList.add('mx-auto');
    a.appendChild(answer);
    answer.innerHTML = answerText;
    
    answer.addEventListener("click", function(){
        var q_img = document.querySelector('.QnA-img');
        q_img.style.WebkitAnimation = "fadeOut 1s";
        q_img.style.animation ="fadeOut 1s";
        
        
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            select[qIdx] = idx;
        }
        
        var q = document.querySelector('.QnABox-BG2')
        q.appendChild(answer);
        answer.className="Q-Box-Answered";
        
        setTimeout(()=>{
         for(let i = 0; i < children.length; i++){
         children[i].style.display= 'none';
        }
        goNext(++qIdx);
        },500);

    },false);
}


function setResult(){
    

    
    const resuldesc1 = document.querySelector('.resultDesc1');
    resuldesc1.innerHTML = infoList[point].desc;
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = './image/ham'+point+'.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
    
}

function goResult(){
    
    loading.style.WebkitAnimation = "fadeOut 1s";
    loading.style.animation ="fadeOut 1s";
    
    setTimeout(()=>{
        result.style.animation ="fadeIn 1s";
        result.style.WebkitAnimation = "fadeIn 1s";

    },1000)

    let point = calResult();
    location.href = './result'+point+'.html';
}

function goNext(qIdx){
    
    if(qIdx === endPoint){
        resultLoading();
        return;
    }

    
    var q = document.querySelector('.Q-Box')
    q.innerHTML = qnaList[qIdx].q;
    var q_img = document.querySelector('.QnA-img');
    q_img.src='./image/ham'+qIdx+'.png';
    q_img.style.WebkitAnimation = "fadeIn 0.5s";
    q_img.style.animation = "fadeIn 0.5s";
    
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    
    var count = document.querySelector('.QnA-Count');
    count.innerHTML = (qIdx+1) +' / ' +endPoint;
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) +'%';
}




function resultLoading(){
    qnaBG.style.WebkitAnimation = "MidUp 1s";
    qnaBG.style.animation ="MidUp 1s";
    qnaBox.style.WebkitAnimation = "MidDown 1s";
    qnaBox.style.animation ="MidDown 1s";
    
        setTimeout(()=>{
        loading.style.animation ="fadeIn 1s";
        loading.style.WebkitAnimation = "fadeIn 1s";
        
        setTimeout(()=>{
                qna.style.display = "none";
                loading.style.display = "block";
        },490)

    },490)

   setTimeout(goResult,3000);
}


