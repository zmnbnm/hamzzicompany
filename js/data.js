const qnaList = [
    {
        q:'오늘따라 여러가지 업무가 휘몰아친다. <br> 이럴때 나는?',
        a:[
            {answer:'머릿속으로 처음부터 끝까지 계획을 세워 순서대로 처리한다.',type:['ENTJ','ESFJ','ISFJ','ISTJ']},
            {answer:'당장 손에 잡히는 일들부터 먼저 시작한다.',type:['INTP','ENFP','ESTP','INFP']}
        ]
    },    
    {
        q:'친한 동기가 상사에게 엄청 혼나고선 <br> 침울한 표정으로 자리에 돌아왔다.',
        a:[
            {answer:'동기에게 무슨 이유로 혼났냐고 먼저 물어본다.',type:['ENTJ','INTP','ESTP','ISTJ']},
            {answer:'침울한 동기를 먼저 달래준다.',type:['ISFJ','INFP','ESFJ','ENFP']}
        ]

    },
    {
        q:'오늘은 퇴근하고 밀린 집안일을 하려 했는데, <br> 갑자기 상사가 야근을 통보한다',
        a:[
            {answer:'오늘 분리수거날인데.. 당혹스럽다.',type:['ENTJ','ESFJ','ISFJ','ISTJ']},
            {answer:'내일하지 뭐. 괜찮다.',type:['INTP','ENFP','ESTP','INFP']}
        ]

    },    
    {
        q:'새로온 신입에게 간단한 업무를 맡겼다. <br> 열심히 했지만 엉망이다.',
        a:[
            {answer:'잘못된 부분을 직설적으로 말하고 고쳐오라고 한다.',type:['ENTJ','INTP','ESTP','ISTJ']},
            {answer:'열심히 한 신입사원의 기분이 상하지 않게 돌려 말해준다.',type:['ISFJ','INFP','ESFJ','ENFP']}
        ]

    },
    {
        q:'점심시간이 왔다. <br> 오늘은 누구와 같이 밥을 먹을까?',
        a:[
            {answer:'가장 친한 동기랑 같이 먹는다.',type:['INTP','ISFJ','ISTJ','INFP']},
            {answer:'나와 같은 음식을 먹고 싶은 사람들을 모아서 다함께 먹는다.',type:['ENTJ','ESFJ','ESTP','ENFP']}
        ]
    },
    {
        q:'성공적으로 이번 프로젝트를 끝냈다. <br> 당신의 마음을 울리는 상사의 한마디는?',
        a:[
            {answer:'역시 일머리가 남다르네~ 다음 프로젝트도 잘부탁해요.',type:['ENTJ','INTP','ESTP','ISTJ']},
            {answer:'열심히 해준 덕에 프로젝트 완전 성공했네! 고생했어요.',type:['ISFJ','INFP','ESFJ','ENFP']}
        ]

    },
    {
        q:'새로운 프로젝트를 담당하게 되었다. <br> 이때 나는?',
        a:[
            {answer:'내가 직접 일정을 계획하는게 마음 편하다.',type:['ENTJ','ESFJ','ISFJ','ISTJ']},
            {answer:'누군가 내 일정을 관리 해주는 것이 편하다.',type:['INTP','ENFP','ESTP','INFP']}
        ]
    },    
    {
        q:'오늘은 회사 워크숍이 있는 날! <br> 다른부서의 처음보는 직원이 보인다..',
        a:[
            {answer:'먼저 인사를 건넨다.',type:['ENTJ','ESFJ','ESTP','ENFP']},
            {answer:'먼저 나에게 말을 걸때까지 기다린다.',type:['INTP','ISFJ','ISTJ','INFP']}
        ]
    },
    {
        q:'오늘은 불금, 이번주도 고된 한주였다. <br> 이제 나만의 힐링 시간!',
        a:[
            {answer:'신난다! 빨리 집에가서 밀린 넷플릭스 정주행해야지',type:['INTP','ISFJ','ISTJ','INFP']},
            {answer:'이날을 기다려왔다! 친구들과 술한잔 고고.',type:['ENTJ','ESFJ','ESTP','ENFP']}
        ]
    },

    
    
]
const infoList = [
    
    {
        mbti:'ENTJ',
        desc:'어디서든 리더 - 완벽보스'
    },
    {
        mbti:'ESFJ',
        desc:' 탕비실 요정 - 만인의 최애캐 '
    },
    {
        mbti:'ESTP',
        desc:'일단시작하죠 - 행동대장 '
    },    
    {
        mbti:'ENFP',
        desc:' 이구역의 텐션갑 - 회식의 제왕'
    },
    {
        mbti:'INTP',
        desc:'팩트 가져와 - 물음표 살인마 '
    },
    {
        mbti:'ISFJ',
        desc:'다투지 마세요 - 평화주의자'
    },
    {
        mbti:'ISTJ',
        desc:' 철두철미 - 워커홀릭 '
    },
    {
        mbti:'INFP',
        desc:'내 품안에 사직서 - 겉따속차'
    }    
]