import React from 'react';
import { Button } from 'react-bootstrap';



const NavPage = ({ page, setPage }) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            {
                (page === 1) ?
                    <Button
                        variant='primary'
                        size='lg'
                        disabled>
                        Previus
                    </Button> :

                    <Button
                        variant='primary'
                        size='lg'
                        onClick={() => setPage(page - 1)}>
                        Previus
                    </Button>
            }

            <Button
                variant='primary'
                size='lg'
                onClick={() => setPage(page + 1)}
            >Next</Button>
        </div>
    );
};

export default NavPage;

