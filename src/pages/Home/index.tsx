import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./style" 
import Sidebar from "../../components/sidebar"

interface Data {
    crypto_data: Array<Crypto>
}

interface Crypto {
    id: string,
    name: string,
    pair_id: number,
    currency_symbol: string,
    change_percent_1d: string,
    inst_price_usd: string,
    logo_url: any,
    change_percent_1d_color: any,
    flag_url: any,
}

const Home: React.FC = () => {

    const [cryptos, setCryptos] = useState<Data>()

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
            setCryptos(response.data.data[0].screen_data)
        })
    }, [])

    console.log(cryptos)


    const first_half_crypto = cryptos?.crypto_data.slice(0, 24)
    const second_half_cryptos = cryptos?.crypto_data.slice(24, -1)

    return(
        <Container>
            <div id="sidebar">
                <Sidebar/>
            </div>
            <div id="content">
                <div>
                    <div>

                    </div>

                    <div>

                    </div>

                    <ul id="crypto_first_page">
                        {first_half_crypto?.map((crypto) => {
                            return(
                                <li key={crypto.id}>
                                    <div>
                                        <img src={crypto.logo_url} alt={crypto.flag_url}/>
                                        <h4>{crypto.name}</h4>
                                        <p id="price">{crypto.inst_price_usd}</p>
                                        <p id="percentage" style={{color: crypto.change_percent_1d_color}}>{crypto.change_percent_1d}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <ul id="crypto_second_page">
                        {second_half_cryptos?.map((crypto) => {
                            return(
                                <li key={crypto.id}>
                                    <div>
                                        <img src={crypto.logo_url} alt={crypto.flag_url}/>
                                        <h4>{crypto.name}</h4>
                                        <p id="price">{crypto.inst_price_usd}</p>
                                        <p id="percentage" style={{color: crypto.change_percent_1d_color}}>{crypto.change_percent_1d}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default Home