import React from 'react'
import styled from 'styled-components';
import Icon from 'react-icons-kit'
import { play, pause, refreshCcw } from 'react-icons-kit/feather'
import { cloudSnow } from 'react-icons-kit/feather';


let interval;

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 60, minutes: 25, cycles: 0, isRunning: false };
    }
    startTimer = () => {
        interval = setInterval(
            () => {
                let { seconds, minutes } = this.state;
                if (minutes === 0 && seconds === 0) {
                    this.addCycle();
                    this.setState({ minutes: 25 });
                    this.setState({ seconds: 60 })
                    clearInterval(interval);
                    return;
                }
                if (seconds === 0) {
                    this.setState({ seconds: 60 })
                    return;
                }
                if (seconds === 60) {
                    this.setState({ minutes: minutes - 1 });
                    this.setState({ seconds: seconds - 1 })
                    return;
                }
                this.setState({ seconds: seconds - 1 })
            },
            1000
        );
        this.setState({ isRunning: true })
    }

    pauseTimer = () => {
        clearInterval(interval);
        this.setState({ isRunning: false })

    }
    resetTimer = () => {
        clearInterval(interval)
        this.setState({ seconds: 60, minutes: 25 });
        this.setState({ isRunning: false })

    }

    addCycle = () => {
        this.setState({ cycle: this.state.cycle + 1 });
    }

    render() {
        const { seconds, minutes, cycles, isRunning } = this.state
        return (
            <Wrapper>
                <Counter running={isRunning}>{minutes} : {seconds === 60 ? '00' : seconds.toString().length === 1 ? '0' + seconds : seconds}</Counter>
                <Options>
                    {isRunning ? <>
                        <Option onClick={this.pauseTimer}><IconValue icon={pause} /><span>pause</span></Option>
                        <Option red={true} onClick={this.resetTimer}><IconValue icon={refreshCcw} /><span>Reset</span></Option>
                    </>
                        :
                        <Option onClick={this.startTimer}><IconValue icon={play} /><span>play</span></Option>
                    }
                </Options>

                <Sounds>
                    <Sound>
                        <i>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.3325 8.02846C7.34822 7.75277 7.13747 7.51653 6.86178 7.50081C6.58608 7.48509 6.34985 7.69584 6.33413 7.97154L7.3325 8.02846ZM6.58331 12.3846L6.08413 12.3562C6.08358 12.3656 6.08331 12.3751 6.08331 12.3846L6.58331 12.3846ZM6.33413 7.97154L6.08413 12.3562L7.0825 12.4131L7.3325 8.02846L6.33413 7.97154ZM6.08331 12.3846C6.08331 12.6659 6.07923 12.8727 6.01563 13.0618C5.96052 13.2257 5.85034 13.4024 5.57126 13.5742L6.09536 14.4258C6.56629 14.136 6.83111 13.7743 6.9635 13.3805C7.0874 13.012 7.08331 12.6418 7.08331 12.3846H6.08331Z" fill="#D6D6D6" />
                                <path d="M8.33413 8.02846C8.31841 7.75277 8.52916 7.51653 8.80485 7.50081C9.08055 7.48509 9.31679 7.69584 9.33251 7.97154L8.33413 8.02846ZM9.08332 12.3846L9.58251 12.3562C9.58305 12.3656 9.58332 12.3751 9.58332 12.3846H9.08332ZM9.33251 7.97154L9.58251 12.3562L8.58413 12.4131L8.33413 8.02846L9.33251 7.97154ZM9.58332 12.3846C9.58332 12.6659 9.5874 12.8727 9.651 13.0618C9.70611 13.2257 9.81629 13.4024 10.0954 13.5742L9.57126 14.4258C9.10034 14.136 8.83552 13.7743 8.70313 13.3805C8.57923 13.012 8.58332 12.6418 8.58332 12.3846H9.58332Z" fill="#D6D6D6" />
                                <path d="M9.01562 4.25H8.55757C8.42156 3.70662 8.14052 3.2135 7.74639 2.82665C7.35225 2.4398 6.86083 2.17475 6.32796 2.0616C5.79509 1.94846 5.24214 1.99177 4.73193 2.1866C4.22173 2.38143 3.77473 2.71998 3.44174 3.16377C3.10874 3.60756 2.9031 4.1388 2.84817 4.69713C2.79325 5.25546 2.89125 5.81849 3.13103 6.32224C3.37081 6.82598 3.74277 7.25025 4.20463 7.54683C4.66649 7.84342 5.19974 8.00042 5.74378 8H9.01562C9.49771 8 9.96004 7.80246 10.3009 7.45082C10.6418 7.09919 10.8333 6.62228 10.8333 6.125C10.8333 5.62772 10.6418 5.15081 10.3009 4.79917C9.96004 4.44754 9.49771 4.25 9.01562 4.25Z" stroke="#D6D6D6" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.73199 2.1866C8.2422 1.99177 8.79515 1.94846 9.32802 2.0616C9.86089 2.17475 10.3523 2.4398 10.7464 2.82665C11.1406 3.2135 11.4216 3.70662 11.5576 4.25H12.0157C12.4978 4.25 12.9601 4.44754 13.301 4.79917C13.6419 5.1508 13.8334 5.62772 13.8334 6.125C13.8334 6.62228 13.6419 7.09919 13.301 7.45082C12.9601 7.80245 12.4978 8 12.0157 8H8.74385" stroke="#D6D6D6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </i>

                    </Sound>
                    <Sound>
                        <Icon icon={cloudSnow} />
                    </Sound>
                    <Sound>
                        <i>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1464 14.6396L16.1463 14.6142C16.16 14.6209 16.1735 14.628 16.187 14.6353C16.3506 14.7245 16.4842 14.852 16.5763 15.0029C16.6683 15.1535 16.7164 15.3229 16.7174 15.4943C16.7184 15.6657 16.6724 15.8356 16.5823 15.9872C16.4921 16.1389 16.3601 16.2678 16.1977 16.3588C16.0351 16.4498 15.8488 16.499 15.6578 16.5C15.4697 16.5009 15.2858 16.4551 15.124 16.3683L15.1481 16.3549C15.1521 16.3572 15.1562 16.3594 15.1603 16.3617C15.3129 16.4451 15.4842 16.4879 15.6573 16.487C15.8303 16.4862 16.0012 16.4417 16.153 16.3567C16.3049 16.2716 16.4334 16.1482 16.5235 15.9968C16.6137 15.8451 16.6615 15.6717 16.6604 15.4942C16.6593 15.3166 16.6094 15.1438 16.5175 14.9933C16.4264 14.8441 16.2977 14.7229 16.1464 14.6396Z" stroke="black" stroke-linecap="round" />
                                <path d="M6.26086 14C5.98472 14 5.76086 14.2239 5.76086 14.5C5.76086 14.7761 5.98472 15 6.26086 15V14ZM15.6522 14L6.26086 14V15L15.6522 15V14Z" fill="black" />
                                <mask id="path-3-inside-1" fill="white">
                                    <path d="M11.6293 8.26772C11.8314 8.13331 12.0637 8.04643 12.3073 8.01414C12.551 7.98185 12.7992 8.00505 13.0318 8.08187C13.2643 8.15868 13.4747 8.28695 13.6459 8.45626C13.8171 8.62558 13.9442 8.83117 14.0169 9.05637C14.0897 9.28156 14.106 9.52002 14.0646 9.7524C14.0232 9.98478 13.9253 10.2045 13.7787 10.3939C13.6321 10.5832 13.441 10.7367 13.2209 10.842C13.0008 10.9473 12.758 11.0014 12.512 11L12.5186 9.98705C12.5984 9.98753 12.6773 9.96996 12.7488 9.93576C12.8202 9.90157 12.8823 9.85171 12.9299 9.79024C12.9775 9.72877 13.0093 9.65741 13.0227 9.58196C13.0362 9.5065 13.0308 9.42907 13.0072 9.35595C12.9836 9.28283 12.9423 9.21607 12.8867 9.16109C12.8312 9.10612 12.7629 9.06447 12.6873 9.03952C12.6118 9.01458 12.5312 9.00705 12.4521 9.01753C12.373 9.02802 12.2976 9.05623 12.2319 9.09987L11.6293 8.26772Z" />
                                </mask>
                                <path d="M11.6293 8.26772C11.8314 8.13331 12.0637 8.04643 12.3073 8.01414C12.551 7.98185 12.7992 8.00505 13.0318 8.08187C13.2643 8.15868 13.4747 8.28695 13.6459 8.45626C13.8171 8.62558 13.9442 8.83117 14.0169 9.05637C14.0897 9.28156 14.106 9.52002 14.0646 9.7524C14.0232 9.98478 13.9253 10.2045 13.7787 10.3939C13.6321 10.5832 13.441 10.7367 13.2209 10.842C13.0008 10.9473 12.758 11.0014 12.512 11L12.5186 9.98705C12.5984 9.98753 12.6773 9.96996 12.7488 9.93576C12.8202 9.90157 12.8823 9.85171 12.9299 9.79024C12.9775 9.72877 13.0093 9.65741 13.0227 9.58196C13.0362 9.5065 13.0308 9.42907 13.0072 9.35595C12.9836 9.28283 12.9423 9.21607 12.8867 9.16109C12.8312 9.10612 12.7629 9.06447 12.6873 9.03952C12.6118 9.01458 12.5312 9.00705 12.4521 9.01753C12.373 9.02802 12.2976 9.05623 12.2319 9.09987L11.6293 8.26772Z" stroke="black" stroke-width="2" mask="url(#path-3-inside-1)" />
                                <path d="M5.21738 10C4.94124 10 4.71738 10.2239 4.71738 10.5C4.71738 10.7761 4.94124 11 5.21738 11L5.21738 10ZM12.5217 10L5.21738 10L5.21738 11L12.5217 11L12.5217 10Z" fill="black" />
                                <mask id="path-5-inside-2" fill="white">
                                    <path d="M14.7353 10.2843C14.9365 10.1449 15.1694 10.0534 15.4148 10.0174C15.6601 9.98127 15.9109 10.0016 16.1465 10.0768C16.382 10.1519 16.5955 10.2796 16.7694 10.4494C16.9433 10.6192 17.0725 10.8262 17.1464 11.0534C17.2203 11.2805 17.2368 11.5212 17.1945 11.7556C17.1522 11.99 17.0523 12.2114 16.9031 12.4016C16.7539 12.5917 16.5597 12.7451 16.3364 12.8491C16.1132 12.9531 15.8673 13.0047 15.6191 12.9997L15.6414 11.9869C15.722 11.9886 15.8019 11.9718 15.8744 11.9381C15.9469 11.9043 16.0099 11.8545 16.0584 11.7927C16.1068 11.731 16.1393 11.6591 16.153 11.583C16.1667 11.5069 16.1614 11.4287 16.1374 11.355C16.1134 11.2812 16.0714 11.214 16.015 11.1589C15.9585 11.1037 15.8892 11.0623 15.8127 11.0379C15.7362 11.0135 15.6548 11.0069 15.5751 11.0186C15.4954 11.0303 15.4198 11.06 15.3545 11.1053L14.7353 10.2843Z" />
                                </mask>
                                <path d="M14.7353 10.2843C14.9365 10.1449 15.1694 10.0534 15.4148 10.0174C15.6601 9.98127 15.9109 10.0016 16.1465 10.0768C16.382 10.1519 16.5955 10.2796 16.7694 10.4494C16.9433 10.6192 17.0725 10.8262 17.1464 11.0534C17.2203 11.2805 17.2368 11.5212 17.1945 11.7556C17.1522 11.99 17.0523 12.2114 16.9031 12.4016C16.7539 12.5917 16.5597 12.7451 16.3364 12.8491C16.1132 12.9531 15.8673 13.0047 15.6191 12.9997L15.6414 11.9869C15.722 11.9886 15.8019 11.9718 15.8744 11.9381C15.9469 11.9043 16.0099 11.8545 16.0584 11.7927C16.1068 11.731 16.1393 11.6591 16.153 11.583C16.1667 11.5069 16.1614 11.4287 16.1374 11.355C16.1134 11.2812 16.0714 11.214 16.015 11.1589C15.9585 11.1037 15.8892 11.0623 15.8127 11.0379C15.7362 11.0135 15.6548 11.0069 15.5751 11.0186C15.4954 11.0303 15.4198 11.06 15.3545 11.1053L14.7353 10.2843Z" stroke="black" stroke-width="2" mask="url(#path-5-inside-2)" />
                                <path d="M6.26086 13C5.98472 13 5.76086 12.7761 5.76086 12.5C5.76086 12.2239 5.98472 12 6.26086 12V13ZM15.6522 13L6.26086 13V12L15.6522 12V13Z" fill="black" />
                            </svg>

                        </i>


                    </Sound>
                </Sounds>
            </Wrapper>
        );
    }
}

export default index;

const Wrapper = styled.div` 
   text-align:center;
   max-width:400px;
   margin:auto;

`;
const Counter = styled.div` 
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	font-size: 6rem;
	font-weight:  100;
	letter-spacing: 2px;
	text-align: center;
	color: #f35626;
	background: linear-gradient(97.57deg, #44FFBC 5.88%, #6486FF 94.28%);
    -webkit-animation: hue 25000s infinite linear; 
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    animation-play-state: ${({ running }) => running ? 'running' : 'paused'};
    @keyframes hue {
        from {
        background: linear-gradient(97.57deg, #44FFBC 5.88%, #6486FF 94.28%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
        to {
            background: linear-gradient(276.97deg, #FD6645 4.93%, #FC64FF 95.38%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
  
`;

const Options = styled.div`
    display:flex;
    justify-content:center;
    padding:20px 0px;
    `;

const IconValue = styled(Icon)`
    padding:10px 0px;
    `;

const Option = styled.button`
    background:${({ red }) => red ? '#ff3e3e' : '#30314a'};
    border:none;
    margin:5px;
    padding:0px 15px;   
    border-radius:25px;
    color:${({ red }) => red ? '#333' : '#eee'};
    outline:none;
    span{
        padding:5px 10px;
    }
`;

const Sounds = styled.div`
    display:flex;
    justify-content:center;
`
const Sound = styled.button`
    padding:10px;
    background:transparent;
    margin-right:10px;
    border:none;
    border-radius:25px;
    outline:none;   
    &:hover{
        background:#333
    }
`