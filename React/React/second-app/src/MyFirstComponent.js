import FirstChild from "./FirstChild"
    import SecondChild from "./SecondChild"
    import ThirdChild from "./ThirdChild"
export default (props) =>{
    const { parentComponentName } = props;
    return <div>
         <div>
           <h2> Hello From MyFirstComponent called from {parentComponentName}</h2>
           
        </div>
        <FirstChild parentComponentName={"FirstComponent"}/>
        <SecondChild parentComponentName={"FirstComponent"}/>
        <ThirdChild parentComponentName={"FirstComponent"}/>

    
    </div>}
    