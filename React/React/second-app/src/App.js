// import logo from './logo.svg';

import MyFifthClassComponent from "./MyFifthClassComponent";
import MyFirstClassComponent from "./MyFirstClassComponent";
import MyForthClassComponent from "./MyForthClassComponent";
import MySecondClassComponent from "./MySecondClassComponent";
import MyThirdClassComponent from "./MyThirdClassComponent";

// import "./App.css";
// import MyFirstComponent from "./MyFirstComponent";
// import MyForthComponent from "./MyForthComponent";
// import MySecondComponent from "./MySecondComponent";
// import MyThirdComponent from "./MyThirdComponent";
// import PropValidate from "./PropValidate";
// import Propvalidations from "./Propvalidations";

function App() {
  const name = "Aniket";
  const name1 = "Fazil";
  // const name2="";

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <h1>Hello {name && name.length ? name : "World"}</h1>
      {/* <h1>Hello {name2 && name2.length ? name2 : "World"}</h1> */}
      <div>
        ?
        {/* children - anything inside the opening closing betn tags are children  */}
        {/* </MyThirdComponent>
      </div>
      <div>
        <MyForthComponent name={name1} age={23} parentComponentName={"App"} />
      </div>

      <div>
        <PropValidate  myArr={[1,2,3]}    myObject={{ name3:"Swapnil", age:23,mobile:1234656789,
        }}  name={name1} age={29} renderable={"Some String"} rollNumber={10} remark={"Some Remark"}>
          <h1>Hello From Children</h1>
        </PropValidate>  */}
        {/* note we cannot pass the object in the props because the objects are not  renderable
           .also we will get the propTupe error during runtime in console but will not throw error
           or stop the react program
           take a note at the time of naming we have PropValidate./propTypes/={}
           also whenever 
          */}
        {/* <MyFirstClassComponent/> */}
        {/* <MySecondClassComponent name={"Ankur"} age={29}/> */}
        {/* <MyThirdClassComponent name={"Ankur"} age={29}/> */}
        {/* <MySecondClassComponent name={"Aniket"} age={24}/> */}
        {/* 
          <MyForthClassComponent name={"Ankur"} age={29}/>
          <MyForthClassComponent name={"Aniket"} age={23}/> */}
        <MyFifthClassComponent/>

      </div>
    </div>
  );
}

export default App;
