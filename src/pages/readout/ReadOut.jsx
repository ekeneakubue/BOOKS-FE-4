import React from 'react'
import styles from './ReadOut.module.css'
import { IoCloseOutline } from "react-icons/io5";

export default function ReadOut(){

    return(
        <div className={styles.readout}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src='images/full_logo.png' alt='logo' />
                </div>

                <div className={styles.title}>
                    <h1>King Solomon's Mines By Anthony W. Knapp</h1>
                </div>

                <div className={styles.close}>
                    <IoCloseOutline className={styles.close_icon}/>
                </div>
            </div>
            <hr className={styles.divider}/>

            <div className={styles.body}>

            <div className={styles.sidenav}>
                <p className={styles.table}>Table of Content</p>
                <ul>
                    <li className={styles.sidenav_link}>Chapter 1 <span className={styles.pages}>Page 1-50</span> <p className={styles.chapter_title}>The Great Mine</p></li>
                    <li className={styles.sidenav_link}>Chapter 2<span className={styles.pages}>Page 51-120</span><p className={styles.chapter_title}>The Great Mine</p></li>
                    <li className={styles.sidenav_link}>Chapter 3<span className={styles.pages}>Page 121-163</span><p className={styles.chapter_title}>Rise of the Miners</p></li>
                    <li className={styles.sidenav_link}>Chapter 4<span className={styles.pages}>Page 121-163</span><p className={styles.chapter_title}>Rise of the Miners</p></li>
                    <li className={styles.sidenav_link}>Chapter 5<span className={styles.pages}>Page 121-163</span><p className={styles.chapter_title}>Rise of the Miners</p></li>
                    <li className={styles.sidenav_link}>Chapter 6<span className={styles.pages}>Page 121-163</span><p className={styles.chapter_title}>Rise of the Miners</p></li>
                    <li className={styles.sidenav_link}>Chapter 7<span className={styles.pages}>Page 121-163</span><p className={styles.chapter_title}>Rise of the Miners</p></li>
                    <li className={styles.sidenav_link}>Chapter 8<span className={styles.pages}>Page 121-163</span><p className={styles.chapter_title}>Rise of the Miners</p></li>
                    <li className={styles.sidenav_link}>Chapter 9<span className={styles.pages}>Page 121-163</span><p className={styles.chapter_title}>Rise of the Miners</p></li>        
                </ul>
            </div>   
            <div className={styles.content}>
                <h2>Chapter 1- The Great Mine</h2>
                <p>In the heart of the ancient kingdom of Israel, nestled between towering peaks and lush valleys, lay the fabled Great Mine of King Solomon.
                   The tale of this magnificent mine had been whispered through generations, its secrets 
                   guarded by time and the mysteries of the earth. King Solomon, renowned for his wisdom and wealth, had long 
                   sought to uncover the treasures hidden beneath the earth's surface. Guided by ancient texts and prophetic visions,
                   he embarked on a quest to unearth the riches that lay hidden within the depths of the mountains. <br/><br/>

                    With the help of skilled miners and craftsmen from across the realm, Solomon established a grand mining operation 
                    at the foot of the mountains. Using innovative techniques and ancient knowledge passed down through the ages, 
                    they delved deep into the earth, carving tunnels and shafts into the rocky terrain. As the days turned into weeks and
                    the weeks into months, the miners toiled tirelessly, their efforts fueled by the promise of untold riches. And finally, 
                    their perseverance was rewarded as they stumbled upon a cavern of breathtaking beauty.<br/><br/>
                    
                    Within the cavern walls gleamed veins of pure gold, sparkling gemstones, and rare minerals of every hue. The air was 
                    thick with the scent of earth and the sound of pickaxes striking stone echoed through the tunnels. It was a sight to 
                    behold, a testament to the boundless wealth that lay hidden beneath the surface. But it was not just the material 
                    riches that made Solomon's mine great; it was the wisdom and enlightenment that lay within its depths. For Solomon 
                    believed that true wealth lay not in the accumulation of gold and gems, but in the pursuit of knowledge, virtue, and 
                    righteousness. <br/><br/>
                    
                   Word of the Great Mine of Solomon spread far and wide, drawing merchants, scholars, and adventurers from distant
                   lands. They came seeking fortune and glory, their hearts filled with dreams of wealth beyond measure. Yet, as the 
                   years passed and the tales of Solomon's mine grew, so too did the greed and envy of those who coveted its
                    treasures. Rival kings and ambitious warlords sought to claim the mine for themselves, leading to battles and 
                    bloodshed that stained the earth and darkened the skies. <br/><br/>
                    
                    And so, in the end, the Great Mine of King Solomon became not just a symbol of wealth and power, but a cautionary 
                    tale of the dangers of greed and the folly of men. Though its treasures may have been lost to the ages, its legacy 
                    lives on as a reminder of the wisdom of the ages and the eternal quest for truth and enlightenment. Despite the 
                    chaos that ensued from those seeking to claim the mine, King Solomon remained steadfast in his commitment to 
                    wisdom and righteousness. He recognized that the true value of the mine lay not in its material wealth, but in the 
                    knowledge and virtue it represented.</p>
                </div>  
                </div>   
        </div>
    );
}