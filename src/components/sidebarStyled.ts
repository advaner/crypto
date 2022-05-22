import styled from "styled-components";
import colors from "../styles/Colors"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${colors.purple};
    color: white;

    #balance {
        color: ${colors.silver};
        margin: 0;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 80%;
            height: 80%;
            border: 0;
            border-bottom: 1px;
            border-style: solid;
            border-color: ${colors.darkGray};

            & > p {
                font-size: 15px;
            }

            div {
                display: flex;
                align-items: center;
                justify-content: space-between;

                #money {
                    font-weight: bold;
                }

                #percentage {
                    font-size: 12px;
                    font-weight: bold;
                    color: green;
                }
            }
        }

    }

    #favorites {
        color: ${colors.silver};
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div {
            width: 80%;
            height: 4%;
            display: flex;
            justify-content: center;
            align-items: center;

            & > p {
                font-size: 15px;
            }
        }

        .favorite {
                width: 80%;
                height: 12%;
                display: flex;

                border: 0;
                border-bottom: 1px;
                border-style: solid;
                border-color: ${colors.darkGray};

                .crypto {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    h5,h6 {
                        margin: 3px;
                    }

                    h6 {
                        color: ${colors.gray};
                    }
                }

                .price {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                    
                    h5,h6 {
                        margin: 3px;
                    }

                    h6 {
                        color: green;
                    }
                }
            }
    }
    
`