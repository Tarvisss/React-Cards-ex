import React, {useState} from "react";

function useFlip(intitialState){
    const [isUp, setState] = useState(intitialState);
    const flipCard = () => {
        setState(isUp => !isUp)
    }
    return [isUp, flipCard]

}
export default useFlip;