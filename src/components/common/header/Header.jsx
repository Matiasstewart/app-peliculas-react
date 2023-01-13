import { Button } from '@mui/material'
import React from 'react'
import styles from "./header.module.css"

const Header = ({ setFavorite }) => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <div className={styles.filmLogoContainer}>
                    <ion-icon name="videocam-outline"></ion-icon>
                </div>
                <h4 className={styles.title}>Pelipedia</h4>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Button variant="contained" color="primary" onClick={() => setFavorite(false)}>Todos</Button>
                <Button variant="contained" color="primary" onClick={() => setFavorite(true)}>Favoritos</Button>
            </div >
        </div >
    )
}

export default Header