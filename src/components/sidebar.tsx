import React from "react";
import { Container } from "./sidebarStyled";

const Sidebar: React.FC = () => {
    return (
        <Container>
            <div id="balance">
                <div>
                    <p>Total Balance</p>
                    <div>
                        <p id="money">$10.000,00</p>
                        <p id="percentage">+7,89%</p>
                    </div>
                </div>
            </div>


            <div id="favorites">
               <div>
                   <p>Favorites Currencies</p>
               </div>
               <div className="favorite">
                    <div className="crypto">
                        <h5>Bitcoin</h5>
                        <h6>BTC</h6>
                    </div>
                    <div className="price">
                        <h5>$30.000,00</h5>
                        <h6>+5,96%</h6>
                    </div>
               </div>
               <div className="favorite">
                    <div className="crypto">
                        <h5>Ethereum</h5>
                        <h6>ETH</h6>
                    </div>
                    <div className="price">
                        <h5>$2.900,00</h5>
                        <h6>+2,45%</h6>
                    </div>
               </div>
            </div>
        </Container>
    )
}

export default Sidebar