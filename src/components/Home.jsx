import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../App.css';
import Cards from '../components/Cards';
import NavPage from '../components/NavPage';
import Search from '../components/Search';
import { getAnimes } from '../redux/actions';
import SearchPage from '../SearchPage';

function Home() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getAnimes({ page }))
    }, [page, dispatch])

    function cargarAnimes() {
        dispatch(getAnimes({ page }))
        setPage(1)
    }

    return (
        <div className="App">
            <header className="App-header">


                <Button
                    variant='secondary'
                    onClick={() => cargarAnimes()}
                >
                    Cargar Animes
                </Button>
                <Search />
                <SearchPage page={page} setPage={setPage} />

            </header>
            <h1>La mejor pagina de anime</h1>
            <h3>Pagina actual: {page}</h3>
            <NavPage page={page} setPage={setPage} />


            <Cards page={page} />

            <NavPage page={page} setPage={setPage} />

        </div>

    );
}
export default Home;



