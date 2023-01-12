import { Typography, Button } from '@mui/material'
import React from 'react'
import styles from "./header.module.css"

const Header = ( {setFavorite} ) => {
    return (
        <div className={styles.container}>
            <Typography variant='h4' color="primary">Pelipedia</Typography>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Button variant="contained" color="primary" onClick={()=>setFavorite(false)}>Todos</Button>
                <Button variant="contained" color="primary" onClick={()=>setFavorite(true)}>Favoritos</Button>
            </div >
    </div >
    )
}

export default Header