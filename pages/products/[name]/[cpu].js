import {useRouter} from "next/router";
const ProductInfo = () => {
    const params = useRouter(); // 경로 변수든 , 질의문자열의든 전부 params로 넘어온다.
    let {name, cpu} = params.query; // 전개 연산
    return <h2>product info : {name} with {cpu} </h2>
};
export default ProductInfo;