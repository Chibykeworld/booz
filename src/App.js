import { useState, useRef, useEffect, createContext} from "react";


import React from "react";
import Input from "./component/input";
import Userform from "./component/userform";
import Page1 from "./Page1";
import Page2 from "./Page2";
// import Output from "./component/Output";


  const pageContext = createContext();
// const Page = () => {
  
  //   return null
  
  
  // } 
  
  
  function App() {
    const [page, setpage] = useState("");
  const myRef = useRef();
  const myInput = useRef();
  // return (
    //   <div className="App">
    //     {/* <Input /> */}
    //     <Userform />
    
    //     {/* <Output/> */}
    
    //   </div>
    
    const handlePage = (string) => {
      setpage(string);
      console.log(page);
    };
    
    
    // );
    
    
    return (
    <pageContext.Provider value={{ page, handlePage }}>
      {page === "" ? (
        <div ref={myRef}>
          <Page1 />
          <input type="text" ref={myInput} />
          <button
            onClick={() => {
              // myRef.current.scrollIntoView({ behavior: "smooth" });
              myRef.current.style.backgroundColor = "red";
              myInput.current.focus();
            }}
          >
            increase
          </button>
        </div>
      ) : (
        <Page2 />
      )}
      ;
    </pageContext.Provider>
  );
};



export { pageContext };
export default App;

// export default App;
