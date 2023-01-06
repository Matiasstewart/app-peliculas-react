import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMovie from '../../common/cardMovie/CardMovie'

import styles from "./home.module.css"

const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(()=>{

        axios.get("http://localhost:3090/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))

    },[])

    return (
        <>
            <div className={styles.containerCards}>
                {
                    movies.map((e)=>{
                        return (
                            <CardMovie movie={e} key={e.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home