// import "./App.css";
import React, { useCallback } from "react";
import { useState, useEffect } from "react";
// import "./style.css";
import Input from "./input";
// import Page1 from "../Page1";
// import Page2 from "../Page2";




function Userform() {
    const [name, setName] = useState("");
    const [email, ] = useState("");
    const [password, ] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userData"));
        if (storedData) {
            setUserData(storedData);
            setSubmitted(true);
        }
    }, []);

    



    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const userData = { name, email, password };
        localStorage.setItem("userData", JSON.stringify(userData));
        // console.log("Name", name);
        setUserData(userData);
        setSubmitted(true);

    }, [email, name, password]);

    useEffect(() => {
        console.log("hello world")
    }, [name])
    return (


        <div>
            {submitted ? (
                <div>
                    <h1>User Data</h1>
                    <p><strong>Name:</strong>{userData.name}</p>
                    <p><strong>Email:</strong>{userData.email}</p>
                    <p><strong>Password:</strong>{userData.password}</p>
                    <button onClick={() => setSubmitted(false)}>Edit Data</button>
                </div>
            ) : (

                <form onSubmit={handleSubmit}>
                    <div>
                        {/* <Input placeholder={"email@gmail.com"} />
                <Input placeholder={"email@gmail.com"} /> */}
                        <label>
                            Name:<input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}

                            />
                        </label>
                    </div>

                    <div>
                        {/* <label>
                    Email:<input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}

                    />
                </label>
            </div>

            <div>
                <label>
                    password:<input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                </label> */}

                        NAME:<Input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}

                        />

                    </div>

                    <div>
                        PASSWORD:<Input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setName(event.target.value)}

                        />
                    </div>

                    <div>
                        EMAIL:<Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setName(event.target.value)}

                        />
                    </div>

                    <button type="submit">Submit</button>


                </form>

            )}
        </div>


    );
}

// const pageContext = createContext();
// const Page = () => {
//     const [page, setpage] = useState("");
//     const myRef = useRef();
//     const myInput = useRef();

//     const handlePage = (string) => {
//         setpage(string);
//         console.log(page);
//     };

//     return (
//         <pageContext.Provider value={{page, handlePage}}>
//         {page === "" ? (
//             <div ref={myRef}>
//                 <Page1 />
//                 <input type="text" ref={myInput} />
//                 <button  onClick={()=> {
//                         myRef.current.style.backgroundColor = "red";
//                         myInput.current.focus();
                   
//                     }}
//                     >
//                         increase
//                 </button>

//             </div>
//         ) : (
//             <Page2 />
//         )}
//         ;

//     </pageContext.Provider>
//     );
// };



// export {pageContext};

export default Userform;