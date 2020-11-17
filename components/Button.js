import styled from "styled-components";
import Icon from "react-icons-kit";

const Button = (props) => {
    const { icon, text } = props;
    return (
        <ButtonWrapper {...props}>
            {icon &&  <Icon icon={icon} style={{ marginRight: '10px' }} />}
            <span className="text">{text}</span>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
    height: 48px;
    font-size: 14px; 
    width: 336px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px;
    background :${({ primary, secondary }) =>
        primary ? "linear-gradient(138.01deg, #ACE38A 7.78%, rgba(74, 222, 255, 0.63) 94.38%)"
            : secondary ? "#303630" : "transparent"
    };
    border: 1px solid rgb(60, 63, 68);
    color:${({ secondary }) => secondary ? "#eee" : "inherit"};
`

export default Button;