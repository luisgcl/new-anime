import axios from "axios";


export function getAnimes({ page }) {
    let arrAnimes = []
    try {


        return async (dispatch) => {
            let json = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`)
            json.data.data?.map((e) => {
                arrAnimes.push({
                    image: e.images.jpg.image_url,
                    name: e.title,

                })
            })
            return dispatch({
                type: 'GET_ANIMES',
                payload: json.data.data
            })
        }

    } catch (error) {
        console.log(error)
    }
    return arrAnimes
}


export function searchByName(name) {
    return async function (dispatch) {
        if (name) {
            var json = await axios.get("https://api.jikan.moe/v4/anime?q=" + name);

            return dispatch({
                type: 'SEARCH_BY_NAME',
                payload: json.data.data
            })
        } else {
            console.log(`No se encontro ${name} registrado`)
            return <p>No se encontro nada</p>
        }



    }


}

export function searchByPage({ page }) {
    return async function (dispatch) {
        if (page) {
            var json2 = await axios.get("https://api.jikan.moe/v4/anime?page=" + page);
            console.log(json2)
            return dispatch({
                type: 'SEARCH_BY_PAGE',
                payload: json2.data.data
            })
        } else {
            console.log(`No se encontro ${page} registrado`)
            return <p>No se encontro nada</p>
        }
    }
}