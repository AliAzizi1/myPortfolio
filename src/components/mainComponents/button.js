import styled from "styled-components";
const language = sessionStorage.getItem('language');

export const lightBtn = {
    backColor: '#1E1E1E',
    textColor: '#FFFFFF',
    borderBtn: '1px solid var(--stroke-low-light)',
    colorBorderBtn: 'var(--sub-text-2-light)'
}

export const darkBtn = {
    backColor: '#FFFFFF',
    textColor: '#1E1E1E',
    borderBtn: '1px solid var(--stroke-low-dark)',
    colorBorderBtn: 'var(--sub-text-2-dark)'
}


export const ButtonPrimaryLarg = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 6px;
    cursor: pointer;
    height: 56px;
    padding: 0 24px;
    border: none;
    border-radius: 999px;
    background-color: ${(props) => props.theme.backColor};
    transition: transform 0.3s ease-in-out;
    
    &:active{
        transform: scale(1.3);
    }
    
    &:hover{
        transform: scale(1.1);
    }

`

export const ButtonPrimaryMedium = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 6px;
    cursor: pointer;
    height: 42px;
    padding: 0 24px;
    border: none;
    border-radius: 999px;
    background-color: ${(props) => props.color ? props.color : props.theme.backColor};
    color: ${(props) => props.theme.textColor};
    transition: transform 0.3s ease-in-out;
    
    &:active{
        transform: scale(1.3);
    }
    
    &:hover{
        transform: scale(1.1);
    }

`

export const ButtonPrimarySmall = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 6px;
    cursor: pointer;
    height: 32px;
    padding: 0 24px;
    border: none;
    border-radius: 999px;
    background-color: ${(props) => props.theme.backColor};
    color: ${(props) => props.theme.textColor};
    transition: transform 0.2s ease-in-out;

    &:active{
        transform: scale(1.3);
    }
    
    &:hover{
        transform: scale(1.1);
    }
    
`


//stroke btn 
export const ButtonStrokeSmall = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 6px;
    cursor: pointer;
    height: 32px;
    padding: 0 16px;
    border-radius: 999px;
    border: ${(props) => props.theme.borderBtn};
    color: ${(props) => props.theme.colorBorderBtn};
    background-color: transparent;
    transition: transform 0.2s ease-in-out;

    &:active{
        transform: scale(1.3);
    }

    &:hover{
        transform: scale(1.1);
    }
    
`


export const ButtonStrokeMedium = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 6px;
    cursor: pointer;
    height: 42px;
    padding: 0 16px;
    border-radius: 999px;
    border: ${(props) => props.theme.borderBtn};
    color: ${(props) => props.theme.colorBorderBtn};
    background-color: transparent;
    transition: transform 0.2s ease-in-out;

    &:active{
        transform: scale(1.3);
    }

    &:hover{
        transform: scale(1.1);
    }
    
`