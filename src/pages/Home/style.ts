import styled from "styled-components";
import colors from "../../styles/Colors"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    #sidebar {
        height: 100%;
        width: 23%;
    }

    #content{
        height: 100%;
        width: 77%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.darkBlue};

        & > div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            justify-items: center;
            align-items: center;
            width: 92%;
            height: 95%;

            & > div {
                width: 90%;
                height: 85%;
                border: 1px;
                border-style: solid;
                border-color: ${colors.purple};
                border-radius: 24px;
            }

            & > ul {
                -ms-overflow-style: none;
                scrollbar-width: none;
                width: 90%;
                height: 85%;
                border: 1px;
                border-style: solid;
                border-color: ${colors.purple};
                border-radius: 24px;
                margin: 0;
                padding: 0;
                overflow-y: scroll;
                overflow-x: hidden;

                & > div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                }

                & > li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 20%;
                    width: 100%;

                    & > div {
                        width: 80%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 0;
                        border-bottom: 1px;
                        border-style: solid;
                        border-color: ${colors.opacityGray};

                        & > img {
                            width: 35px;
                            height: 35px;
                            margin-right: 10px;
                        }

                        & > h4 {
                            color: ${colors.gray};
                            margin-right: 10px;
                        }

                        & > #price {
                            font-size: 15px;
                            margin: 0;
                            padding: 0;
                            color: ${colors.silver};
                            margin-right: 10px;
                        }

                        & > #percentage {
                            font-size: 13px;
                            margin: 0;
                            padding: 0;
                        }
                    } & > div:hover {
                        opacity: 80%;
                    }
                }
            }   & > ul::-webkit-scrollbar {
                    display: none;
            }


        }
    }


`