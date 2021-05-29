import React from 'react';
import './Feed.css'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import SubjectIcon from '@material-ui/icons/Subject';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import Post from '../Post/Post';

const Feed = () => {
    return (
        <div className="feed">

            {/* input options */}

           <div className="feed__inputContainer">
               <div className="feed__input">
                   <CreateIcon/>
                   <form >
                        <input type="text" />
                        <button type="submit">Send</button>

                   </form>
               </div>

               <div className="feed__inputOptions">
                   <InputOption Icon={ImageIcon} title="Photo" color="#badc58"  />
                   <InputOption Icon={SubscriptionsIcon} title="video" color="#ff7979"  />
                   <InputOption Icon={EventIcon} title="Event" color="#ffbe76"  />
                   <InputOption Icon={SubjectIcon} title="Write Article" color="#badc58"  />

               </div>
           </div>

           {/* posts */}
           <Post
           name="shafikul Islam"
           description="Web Developer"
           message="Hello how are you"

           />

          
            
        </div>
    );
};

export default Feed;