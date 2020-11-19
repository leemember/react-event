import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const { username, message } = form;
    
    //첫번째 이벤트

    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
            [e.target.name] : e.target.value // 원하는 값으로 덮어 씌운다.
            //위 코드는 인풋의 개수가 많아질 것 같으면 e.target.name을 활용하는 것이 더 좋다.
        };
        setForm(nextForm);
    };

    //2번째 이벤트

    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
    };

    // 3번째 이벤트

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    //화면에 보여지는 것

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
                />

            <input
                type="text"
                name="message"
                placeholder="아무거나 입력하세요."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
                />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;