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

        div {
            width: 87%;
            height: 90%;
            border: 1px;
            border-style: solid;
            border-color: ${colors.purple};
            border-radius: 24px;
        }
    }


`