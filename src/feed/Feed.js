
const Feed = (props) => {

    

        

    if (props.isLoaded) {
        return(
            <div className='feed'>
                {props.content.map((post, index) => {
                    
                        let arr = post.createdAt.split("")
                        arr.splice(10,1)
                        arr.splice(10, 0, " ")
                        arr.splice(16,8)
                        let res = arr.join("")
                        
                    return(
                        <div className='postBox' key={index}>
                            <p className='post'>{post.content}</p>
                            <p className='timeStamp'>{res}</p>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return(<h1>Waiting</h1>)
    }
}

export default Feed;