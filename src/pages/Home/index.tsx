import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./style" 
import Sidebar from "../../components/sidebar"

const key = "c4e14c65-a221-42dd-8156-736ffb8a9589"

const Home: React.FC = () => {

    const [crypto, setCrypto] = useState()

    useEffect(() => {
        const response = axios.get("https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list", {
            headers: {
                'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
                'X-RapidAPI-Key': 'e2a99c8790msh90aed4d017ed0b2p129056jsna141f90f1eda'
            },
            params: {
                edition_currency_id: '12',
                time_utc_offset: '28800',
                lang_ID: '1',
                sort: 'MARKETCAP_DN',
                page: '1'
            }
        }).then(response => {
            console.log(response.data.data[0].screen_data.crypto_data)
        })
    }, [])




    return(
        <Container>
            <div id="sidebar">
                <Sidebar/>
            </div>
            <div id="content">
                <div>

                </div>
            </div>
        </Container>
    )
}

export default Home