import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import styles from './Cart.module.css'




function Cart({ anime }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={styles.cardContainer} onClick={() => handleShow()}>

                <img src={anime.images.jpg.image_url} alt={anime.title} />
                <h3>{anime.title}</h3>



            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Title>
                    <h3>{anime.title}</h3>
                </Modal.Title>
                <Modal.Header closeButton>
                    <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <b>Trailer:</b> {anime.trailer.url ? <a href={anime.trailer.url}>{anime.trailer.url}</a> : <p>No tiene trailer</p>}
                    </p>
                    <p>
                        <b>Tipo: </b> {anime.type}
                    </p>
                    <p>
                        <b>Episodios: </b> {anime.episodes ? anime.episodes : <p>No se encontraron episodios</p>}
                    </p>
                    <p><b>Puntuacion: </b> {anime.score}</p>

                    <p><b>Año: </b>{anime.year}</p>

                    <p><b>Descripcion: </b> <p>{anime.synopsis}</p></p>
                </Modal.Body>
            </Modal>
        </>




        //                <Card>
        //  <Card.Img src={anime.images.jpg.image_url} alt={anime.title} />

        //    <Card.Title>{anime.title}</Card.Title>



        // </Card>




    )
}

export default Cart
