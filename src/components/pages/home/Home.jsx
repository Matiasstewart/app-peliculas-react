import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMovie from '../../common/cardMovie/CardMovie'

import styles from "./home.module.css"
import Header from '../../common/header/Header'

import confetti from 'canvas-confetti'
import { Button } from '@mui/material'
import CreateMovieModal from '../../common/createMovieModal/CreateMovieModal'
import Footer from '../../common/footer/Footer'

const Home = () => {

    const [movies, setMovies] = useState([])
    const [dispatchLike, setDispatchLike] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const [open, setOpen] = useState(false);
    const [isMovieCreate , setIsMovieCreate] = useState(false)
    const [isMovieDelete , setIsMovieDelete] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {

        axios.get("http://localhost:3090/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))

        setDispatchLike(false)
        setIsMovieCreate(false)

    }, [dispatchLike, isMovieCreate, isMovieDelete])

    const handleLike = (movie) => {

        if (!movie.isLiked) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -75,
                origin: {
                    x: 0,
                    y: 0
                }
            })
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -110,
                origin: {
                    x: 1,
                    y: 0
                }
            })
        }

        axios.patch(`http://localhost:3090/movies/${movie.id}`, { isLiked: !movie.isLiked })
            .then(res => setDispatchLike(true))
            .catch(err => console.log(err))
    }

    const moviesFiltered = movies.filter(movie => movie.isLiked)

    const deleteMovieById = (id)=>{
        axios.delete(`http://localhost:3090/movies/${id}`)
            .then(res => setIsMovieDelete(true))
            .catch(err => console.log(err))
    }

    const styleButtonModal = {
        bgcolor : "#333",
        spacind : 4,
    }

    return (
        <div className={styles.homeContainer}>
            <Header setFavorite={setFavorite} />
            <div className={styles.buttonContainer}>
            <Button onClick={handleOpen} sx={styleButtonModal} style={{display: "block"}} variant="contained">Agregar pelicula</Button>
            </div>
            <CreateMovieModal open={open} handleClose={handleClose} setIsMovieCreate={setIsMovieCreate}/>
            <div className={styles.containerCards}>
                {
                    !favorite ? (
                        movies.map((e) => {
                            return (
                                <CardMovie movie={e} key={e.id} handleLike={handleLike} deleteMovieById={deleteMovieById} />
                            )
                        })
                    ) : (
                        moviesFiltered.map((e) => {
                            return (
                                <CardMovie movie={e} key={e.id} handleLike={handleLike} deleteMovieById={deleteMovieById}/>
                            )
                        })
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home