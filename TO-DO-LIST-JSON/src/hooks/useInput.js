import { useState } from "react";

const useInput = () => {
    // value는 useState로 관리하고
    const [value, setValue] = useState("");

    // 핸들러 로직도 구현한다.
    const handler = (e) => {
        setValue(e.target.value);
    };

    // 이 훅은 [ ] 을 반환하는데 
    // 첫번째는 value, 두번째는 핸들러를 반환한다.
    return [value, setValue, handler];
}

export default useInput;