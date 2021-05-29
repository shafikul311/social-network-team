import React from 'react';
import './Post.css'
import PersonIcon from '@material-ui/icons/Person';
import InputOption from '../InputOption/InputOption';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';

const Post = ({name, description, message, photoUrl }) => {
    return (
        <div className="post">
            <div className="post__header">
                <PersonIcon/>
                <div className="post__info">
                    <h3>Shafikul Islam</h3>
                    <p style={{color:"grey"}}>Des---web Developer</p>
                </div>
            </div>
            <div className="post__body">
                <p>message here Lorem, ipsum dolor sit amet consectetur
                     adipisicing elit. Nihil in molestias adipisci. Corrupti
                      reiciendis repellendus dolor deserunt labore officiis non rerum commodi, doloremque soluta dicta repellat autem iusto ipsa quae maiores neque placeat? Repellendus veritatis, sed molestiae ullam harum, magnam magni tempora quia dolore dolorem, aliquid quaerat debitis tempore minima.</p>

            </div>
            <div className="post__button">
                {/* <InputOption/> */}
                <ThumbUpIcon/>
                <ThumbDownAltIcon/>
                <ShareIcon/>
                <MessageIcon/>


            </div>
            
            


            
        </div>
    );
};

export default Post;