import './index.css';

const Post = (props) => {
    return(
        <div>
            <form className='inputContainer' onSubmit={props.onSubmit}>
                <input className='postInput' type='text' name='post' value={props.postVal} onChange={props.onChange}/>
                <button type='submit'/>
            </form>
        </div>
    );
};

export default Post;