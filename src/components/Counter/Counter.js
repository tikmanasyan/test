import { useState } from "react";

const Counter = () => {
    //state - obyekt e, vori mej karox enq pahel voroshaki informaci, vor@ dinamik popoxvox e
    // const [count, setCount] = useState(0);//useState-@ hook e, vor@ naxatesvac e state-eri het ashxatelu hamar, ayn veradarcnum e erku arjeq, 1-state-i kargavijak@, 2-method vor@ ashxatecnum enq state-i kargavijak@ poxelu hamar

    // const countInc = () => {
    //     setCount(count + 1);
    // }

    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={ countInc }>Click Me</button>
    //     </div>
    // );

    let [click, setClick] = useState(true);

  function test() {
    setClick(click = !click);
  }

  return (
    <div>
      <button onClick={test}>
        {click ? "Close" : "Show"}
      </button>


        {click ? <div style={{
            width:'100px', 
            height:'100px', 
            background:'red'
        }}></div> : null} 
    </div>
  );
}

export default Counter;