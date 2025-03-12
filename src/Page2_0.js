import React, { useContext } from "react";
import { pageContext } from "./App";

const Page2 = () => {
    const {handlePage} = useContext(pageContext);

    return(
        <div>
            <h1>page 2</h1>
            <button onClick={()=> handlePage("")}>page2</button>
        </div>
    );
};

export default Page2;