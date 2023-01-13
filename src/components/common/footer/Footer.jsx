import React from 'react'

import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.iconContainer}>
                <div className='iconContainer'>
                    <div className={styles.githubIconContainer}>
                        <a href="https://github.com">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                    <div className={styles.facebookIconContainer}>
                        <a href="https://facebook.com">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </div>
                    <div className={styles.twitterIconContainer}>
                        <a href="https://twitter.com">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer