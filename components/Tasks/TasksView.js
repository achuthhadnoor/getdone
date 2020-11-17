import React from 'react'
import { TODAY } from '../../utils/constants'
import styled from 'styled-components'
import { useAuth } from '../../hooks/use-auth'
import { Text, Checkbox } from '../ui';

export default function TasksView({ active, tasks }) {
    const { user } = useAuth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var d = new Date();
    var monthName = months[d.getMonth()]; // "July" (or current month)
    var Day = Days[d.getDay() - 1];
    var date = d.getDate();

    switch (active) {
        case TODAY:
            return (
                <TaskWrapper>
                    <div>
                        <Text xxl>Good Day</Text>, {' '}<Text l>{user.name}</Text>
                    </div>
                    <Text m style={{ color: '#ddd' }}>{`${Day}, ${monthName} ${date}`}</Text>

                    {tasks.map(t => (
                        <div key={t.id} style={{display:'flex'}}>
                           <Checkbox />
                            <Text m >{t.task}</Text>
                        </div>
                    ))}
                </TaskWrapper>)
        default:
            return <TaskWrapper>dummy</TaskWrapper>
    }
} 
const TaskWrapper = styled.div`
    h1{
        font-size:1.5em;
        color:#fff;
    }
    .username{
        font-size:.8em;
    }
    @media only screen and (max-width: 500px) {
        margin:10px 50px;
    }
`