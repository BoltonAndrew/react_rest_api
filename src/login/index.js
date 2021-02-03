import './index.css';


const LoginBox = (props) => {
    return(
        <form name='login' className='login' onSubmit={props.handleSubmit}>
            <input className='inputBox' type='text' name='userName' value={props.userVal} onChange={props.onChange}/>
            <input className='inputBox' type='text' name='password' value={props.passVal} onChange={props.onChange}/>
            <button className='submitButton' type='submit' disabled={props.isDisabled}/>
        </form>
    );
};

export default LoginBox;