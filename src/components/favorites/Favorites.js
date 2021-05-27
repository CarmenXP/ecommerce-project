import React from 'react';
import {useSelector} from 'react-redux';
import styles from './favorites.module.css';

const Favorites = () =>{
    const like = useSelector((state)=> state.like);
    const {likeItems} = like;
  
    return(
        <div className={styles.contenLike}>
            
        {likeItems.length === 0 
            ? <p>Sin boho likes</p> 
            : likeItems.map((item)=>
            <div className = {styles.likeproduct}>
                
                <div>
                <img src={item.image}/> 
                </div>
                 
            </div>
            )}

        </div>
    )
};

export default Favorites