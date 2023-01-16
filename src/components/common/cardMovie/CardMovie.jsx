import React from 'react'
/* import { styled } from '@mui/material/styles'; */
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
/* import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar'; */
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
/* import { red } from '@mui/material/colors'; */
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
/* import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert'; */
import styles from "./cardMovie.module.css"

const CardMovie = ({ movie, handleLike, deleteMovieById }) => {

    return (
        <Card sx={{ width: 300, height: 500, bgcolor: "#fff", boxShadow: "0px 0px 50px 7px rgba(46,46,46,1)" }} >
            <CardHeader
                title={movie.name}
                subheader={movie.createdAt}
                action={
                    <IconButton aria-label="add to favorites" onClick={() => handleLike(movie)}>
                        <FavoriteIcon color={movie.isLiked ? "error" : "disabled"} />
                    </IconButton>
                }
            />
            <CardMedia
                component="img"
                height="194"
                image={movie.img}
                alt="Paella dish"
            />
            <CardContent sx={{ height: 150 }}>
                <Typography variant="body2" color="text.secondary">
                    {movie.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.btnContainer}>
                    {/* <button className={styles.deleteBtn}>Eliminar</button> */}
                <Button type='button' variant='contained' color='error' onClick={() => deleteMovieById(movie.id)}>Eliminar</Button>
                </div>
            </CardActions>
        </Card>
    )
}

export default CardMovie