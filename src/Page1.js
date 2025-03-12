import React, { useContext } from "react";
import { pageContext } from "./App";

const Page1 = () => {
    const { handlePage } = useContext(pageContext);

return(
    

    <div>
        <h1>Page1</h1>
        <button onClick={()=> handlePage("page2")}>page2</button>
    </div>
  
);
};

export default Page1;