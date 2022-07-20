import React from 'react'


import { useSelector } from 'react-redux';

import Cart from './Cart';
import { Col, Container, Row } from 'react-bootstrap';

function Cards() {

  const animes = useSelector((state) => state.animes)

  console.log(animes)


  return (


    <Container>
      <Row>

        {
          animes?.map(anime => {
            return (
              <Col md=''>
                <Cart key={anime.mal_id} anime={anime} />

              </Col>
            )
          })
        }
      </Row>
    </Container>

  )
}

export default Cards
