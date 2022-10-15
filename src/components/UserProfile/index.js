import PropTypes from 'prop-types';
function UserProfile(props){
   // props.name = 'ravindu' //TypeError: Cannot assign to read only property 'name' of object : Props attribute are read only 

    const handleOnClick = () =>{
        console.log('submitEvent call within component')
        props.onSubmitCalledInParent('Helloo',123545)
    }

    return <div>
        <div>{props.title}</div>
        <div>{props.name}</div>
        <button onClick={handleOnClick}>Submit</button>
    </div>
}

UserProfile.propTypes = {
    title: PropTypes.string,
    name : PropTypes.string.isRequired,
    address : PropTypes.shape({
        zip : PropTypes.string.isRequired,
        city : PropTypes.string.isRequired
    }).isRequired,
    onSubmitCalledInParent : PropTypes.func 
}

const UserRole = {
    ADMIN : 'admin',
    USER: 'user'
}
export {UserRole}// export deafault option can be used only one time 
export default UserProfile;
