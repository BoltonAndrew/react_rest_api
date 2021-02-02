
const Feed = (props) => {
    console.log(props);
    return(
        <div className='feed'>
            {props.posts.map((post, index) => {
                return(
                    <div className='postBox' key={index}>
                        <p className='post'>{post.content}</p>
                        <p className='timeStamp'>{post.createdAt}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Feed;