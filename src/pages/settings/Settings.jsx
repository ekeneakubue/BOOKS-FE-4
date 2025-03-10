import React from 'react'
import styles from './Settings.module.css'
import SideNavbar from '../../components/sideNavbar/SideNavbar'

export default function Settings() {
  return (
    <>
      <SideNavbar />
      <main>
        <div className={styles.blur_img}>
          <img src="images\blur_settings.png" alt="" />
        </div>
        <div className={styles.first_part}>
          <div className={styles.profile_part}>
            <div className={styles.profile_img}>
              <img src="images\settingsprofile.png" alt="" />
            </div>
            <div className={styles.profile_text}>
             <h1>Lori Hasley</h1>
             <p>lorihasley@gmail.com</p>
            </div>
          </div>
          <div className={styles.button_part}>
            <button className={styles.secondary_btn}>Remove</button>
            <button className={styles.primary_btn}>Upload image</button>
          </div>
        </div>
        <div className={styles.second_part}>
          <p className={styles.settings_active}>Profile</p>
          <p>Notifications</p>
          <p>Language</p>         
        </div>
        <div className={styles.third_part}>
          <h2>Personal Information</h2>
          <div className={styles.settings_input}>
            <div className={styles.input_column}>
              <div className={styles.input_field}>
                <p>First name</p>
                <input type="text" />
              </div>
              <div className={styles.input_field}>
                <p>Last name</p>
                <input type="text" />
              </div>
            </div>
            <div className={styles.input_column}>
              <div className={styles.input_field}>
                <p>Email</p>
                <input type="email" />
              </div>
              <div className={styles.input_field}>
                <p>Phone number</p>
                <input type="tel" maxLength={11}/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.last_part}>
          <h2>Password</h2>
          <div className={styles.password_input}>
            <div className={styles.input_field}>
              <p>Password</p>
              <input type="password" />
            </div>
            <button className={styles.secondary_btn} id={styles.large_btn}>Change password</button>
          </div>
        </div>
      </main>
    </>
  )
}
