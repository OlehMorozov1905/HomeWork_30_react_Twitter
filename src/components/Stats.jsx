import React, { useContext } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/contexs'

const Stats = () => {

    const {
        user,
        stats,
        incrementFollowers,
        decrementFollowers,
        incrementFollowing,
        decrementFollowing
    } = useContext(TwitterContext)

    return (
        <div className="user-stats">
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className="stats">
                <div
                    onClick={() => { incrementFollowers() }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        decrementFollowers()
                    }}>
                    Followers: {stats.followers}</div>
                <div
                    onClick={() => { incrementFollowing() }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        decrementFollowing()
                    }}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    )
}

export default Stats