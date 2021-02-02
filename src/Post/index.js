import './index.css';

const Post = (props) => {
    return(
        <form className='inputContainer' onSubmit={props.onSubmit}>
            <input className='postInput' name='post' value={props.postVal} onChange={props.onChange}/>
            <button type='submit'/>
        </form>
    );
};

export default Post;