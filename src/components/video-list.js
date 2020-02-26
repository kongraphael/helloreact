import React from 'react'
import VideoItem from './video-item'

const movies = ["film1","Film2"]

const VideoList = () => {
    return (
        <div>
            <ul>
                {
                    movies.map(movie => {
                        return <VideoItem movie={movie}/>
                    }
                    )
                }
            </ul>
        </div>
    );
}
export default VideoList;