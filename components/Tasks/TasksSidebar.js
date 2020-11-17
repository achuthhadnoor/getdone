import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { sun, star, calendar, edit3, atSign, x } from 'react-icons-kit/feather'
import { TODAY, TASKS, ASSIGNED, SCHEDULED, STARRED } from '../../utils/constants'
import { plus } from 'react-icons-kit/feather'
import { command } from 'react-icons-kit/feather'
import { Text } from '../ui'

export default function TaskSidebar({ active, setActive }) {
    const [open, setOpen] = React.useState(false);
    {/*<SidebarWrapper>
    <Logo ontitle/>*/}
    return (
            <> 
                <SidebarTitle>Categories</SidebarTitle>
                <SideBarList>
                    <SideBarListItem
                        active={active === TODAY ? true : false}
                        onClick={() => { setActive(TODAY); setOpen(!open) }}
                    >
                        <IconView icon={sun} style={{ padding: '5px' }} />
                    <Text l>Today</Text>
                    </SideBarListItem>
                    <SideBarListItem
                        active={active === STARRED ? true : false}
                        onClick={() => { setActive(STARRED); setOpen(!open) }}
                    >
                        <IconView icon={star} />
                       <Text l> Important</Text>
                    </SideBarListItem>
                    <SideBarListItem
                        active={active === SCHEDULED ? true : false}
                        onClick={() => { setActive(SCHEDULED); setOpen(!open) }}
                    >
                        <IconView icon={calendar} />
                        <Text l> Scheduled</Text>
                    </SideBarListItem>
                    <SideBarListItem
                        active={active === ASSIGNED ? true : false}
                        onClick={() => { setActive(ASSIGNED); setOpen(!open) }}
                    >
                        <IconView icon={atSign} />
                        <Text l>Assigned to me</Text>
                    </SideBarListItem>
                    <SideBarListItem
                        active={active === TASKS ? true : false}
                        onClick={() => { setActive(TASKS); setOpen(!open) }}
                    >
                        <IconView icon={edit3} />
                        <Text l>Tasks</Text>
                    </SideBarListItem>
                </SideBarList>
                    
                <SidebarTitle>Collections</SidebarTitle>

                 <SideBarList>
                    <SideBarListItem
                        active={active === TODAY ? true : false}
                        onClick={() => { setActive(TODAY); setOpen(!open) }}
                    >
                        <IconView icon={sun} style={{ padding: '5px' }} />
                        <span>Create React </span>
                    </SideBarListItem> 
                </SideBarList>

                    <SideBarListItem >
                        <IconView icon={plus} style={{ padding: '5px' }} />
                        <span>Create Collection   Alt + <Icon icon={command}/> + T </span>
                    </SideBarListItem> 
           </>
    )
    {/* </SidebarWrapper> */}
}

const IconView = styled(Icon)`
    padding:5px; 
}
`;


const SidebarTitle = styled.div`
    font-size: .8em;
    font-weight:600;
    color:#808080;
    padding-top:0px;    
    margin-top: 20px;
    margin-left: 20px;
    @media only screen and (max-width: 500px) {
    & {
           padding-top:30px;  
    }
    `;

const SideBarList = styled.div`
    list-style: none; 
    margin: 10px 0px ;
    color:#f8f8f8;
    background: rgba(50, 50, 50, .37);
    backdrop-filter: blur(5px);
    padding: 15px 10px;;
    border-radius: 10px;
    align-items: center;
    font-size:.9em;
    transition:all .4s ease-in-out;
    .active{
        background: #fff;
        color: #121212;
    }
    @media only screen and (max-width: 500px) {
    & {
         background: rgba(50, 50, 50, .8);
    }
    
}
`;

const SideBarListItem = styled.button`
    display: flex;
    width:100%;
    border-radius: 5px; 
    align-items:center;
    margin-bottom:7px;
    color:#fefefe;
    background:${props => props.active ? '#171717' : 'transparent'};
    &:hover{
        background:#171717;
    }
    span{
        padding:0px 15px;
    }
    `;
    // background:rgb(255 255 255 / 5%);