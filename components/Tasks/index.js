import React from 'react'
import { TODAY } from '../../utils/constants';
import styled from 'styled-components';
import TasksView from './TasksView';
import TaskSidebar from './TasksSidebar';
import { tasks } from '../../data'
import Icon from 'react-icons-kit';
import { x } from 'react-icons-kit/feather';
import { barChart2 } from 'react-icons-kit/feather';
import Navbar from './../Nav'

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks,
            active: TODAY,
            open: false 
        }
    }
    render() {
        let { active, tasks } = this.state;
        let { open } = this.state;
        return (
            <TasksWrapper>
                <div style={{ display: 'flex', color: '#999' }}>
                    <Icon icon={barChart2} className="menu" onClick={() => { this.setState({ open: !this.state.open }) }} />
                    <Navbar />
                    {
                        open &&
                        <SidebarWrapper>
                            <CloseIcon > <Icon icon={x} onClick={() => { this.setState({ open: !this.state.open }) }} /></CloseIcon>
                            <TaskSidebar active={active} setActive={(view) => { this.setState(view) }} tasks={tasks} />
                        </SidebarWrapper>
                    }

                </div>
                <TasksView active={active} tasks={tasks} />
            </TasksWrapper>
        )
    }
}
const TasksWrapper = styled.div`
    display:flex; 
    flex:1;
    flex-direction:column;
    color:#999;
    .menu{
        display:none!important ;
        padding:10px; 
        transform:rotate(90deg);
        color:#fff;
        font-size:18px;
        cursor:pointer;
        @media only screen and (max-width: 500px) {
            display:inline-block!important ;
        }
}
`;

const SidebarWrapper = styled.div`
    display:block;
    position:absolute;
    padding:10px 20px;
    height:100%;
    width:100%;
    z-index:999;
    background: rgba(0,0,0,.4);
    backdrop-filter: blur(3px);
    opacity:0;
    animation: 0.3s ease 0.2s 1 normal both running comin; 

`;

const CloseIcon = styled.div`
    display:none;
    @media only screen and (max-width: 500px) {
      & {
        height:30px;
        width:30px;
        display:flex;
        align-items:center;
        justify-content: center;
        padding:10px;
        background:#333;
        border-radius:10px;
         position: absolute;
         left: 20px;
         top: 20px;
         cursor:pointer;
    }
`

export default Tasks;