const Zipcode = () => {
    return (
        <div>
            <main>
                <h1>시군구동 찾기</h1>
                <div>
                    <select name="sido" id="sido">
                        <option>-- 시도 --</option>

                        <option>시도</option>

                    </select>
                    <select name="gugun" id="gugun">
                        <option>-- 시군구 --</option>

                        <option>시군구</option>

                    </select>
                    <select name="dong" id="dong">
                        <option>-- 읍면동 --</option>

                        <option>읍면동</option>

                    </select>
                </div>

                <div>

                    <p>
                        'zipcode sido gugun dong ri bunji'
                    </p>

                </div>
            </main>
        </div>

    );
};

export default Zipcode;