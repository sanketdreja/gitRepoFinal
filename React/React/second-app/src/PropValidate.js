import  PropTypes from "prop-types";
import { Children } from "react";
// console.log(PropTypes);
function PropValidate(props) {
    const {name,age,Children}= props;

    return(
        <div>
            <h2>
                Name:{name};
                Age:{age};
                Age after 5 years:{age+5};
          
                {Children}
            </h2>
        </div>
    )
}

PropValidate.propTypes={
    name:PropTypes.string,
    age:PropTypes.number.isRequired,
    Children:PropTypes.element,
    renderable:PropTypes.node,
    rollNumber:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    remark:PropTypes.any,
    myArr:PropTypes.arrayOf(PropTypes.number),
    // myObject:PropTypes.shape({name3:PropTypes.string,age:PropTypes.number}), will work even if add few new properties but exact will not allow that it will show error in console 
    myObject:PropTypes.exact({name3:PropTypes.string,age:PropTypes.number,mobile:PropTypes.number})
};

export default PropValidate;
