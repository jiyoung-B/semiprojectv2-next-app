import axios from "axios";

const check_captcha = async (response) => {
    let url = '/api/board/recaptcha?response=' + response;
    const data = axios.get(url).then(data => data.data);
    console.log((await data).success);

    return (await data).success;

};

const handleInput = (setInput, e) => {
    setInput(e.target.value);  // 함수자체를 매개변수로 넘긴다.
};

const process_submit = async (url, data) => {
    const cnt = fetch(url, {
        method: 'POST', mode: 'cors', // 주소 같으면 cors 필요없음
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
    }).then(res => res.json());

    return (await cnt).cnt;
};

module.exports = {check_captcha, handleInput, process_submit};
