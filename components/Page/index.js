import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/use-auth'
import Loading from '../Loading';


export default function Page({ children }) {
    const { user,loading } = useAuth();
    const Router = useRouter();
    useEffect(() => {
        debugger;
        if (!user) {
            Router.replace('/login');
        }
    })
    if(loading){
        return <Loading/>
    }
    return (
        <>
            {children}
        </>
    )
}
