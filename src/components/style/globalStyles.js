import styled from 'styled-components'

export const Button = styled.button`
    background: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#000"};

    display: inline-block;
    justify: center;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    ${({ type }) => `${type == "none" ? "cursor: default" : "cursor: pointer"}`};
    -webkit-user-select: none;
    user-select: none;    
    ${({ border }) => `border: ${border ? border : "1px solid transparent"}`};
    ${({ width }) => `width: ${width}`};
    ${({ height }) => `height: ${height}`};
    border-radius:  ${({ border_radius }) => `${border_radius ? border_radius : "5px"}`};
    margin: ${({ margin }) => `${margin ? margin : ""}`};
    padding: ${({ padding }) => `${padding ? padding : "0.375rem 0.75rem"}`};
    // font-size: ${({ small, meduim, large }) => small ? "0.875rem" : meduim ? "1rem" : large ? "1.25rem" : "1rem"};
    line-height: 1.5;
    ${({ shadow }) => `box-shadow: ${shadow ? "0px 2px 2px rgba(97, 97, 97, 0.14), 0px 2px 2px rgba(97, 97, 97, 0.16)" : ""}`};

    &:disabled {
        background: ${({ border, disabled }) => (border && disabled) ? "#FFF" : "#D5D5DC"};
        border: ${({ border, disabled }) => (border && disabled) ? "1px solid #F1F1F5" : "1px solid #D5D5DC"};
        color: ${({ border, disabled }) => (border && disabled) ? "#92929D" : "#696974"};
        // opacity: 0.8;
        cursor: default;
    }
    &:hover {
        opacity: 0.9;
        transform: scale(0.99)
    }
    &:focus {
        box-shadow: 0 0 0 0.1rem ${({ bg }) => bg || "#fff"};
        outline: 5px auto ${({ bg }) => bg || "#fff"};
    }

`

export const Box = styled.div`
    width: 362px;
    height: 377px;
    background: #F5F9FF;
`

export const BoxPayMent = styled.div`
    width: 100%;
    background: #FFFFFF;
    ${({ border }) => `border: ${border ? border : "1px solid transparent"}`};
    box-sizing: border-box;
    border-radius: 7px;
`
