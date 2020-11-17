import styled from "styled-components";

import Tasks from "../components/Tasks";
import Sidebar from "../components/Sidebar"; 
import { useAuth } from "../hooks/use-auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../components/Loading";

export default function Home() {
    const { user, loading } = useAuth();
    const Router = useRouter();
    useEffect(() => { 
        if (!loading && !user) {
            Router.replace('/login');
        }
    })
    if (loading || !user) {
        return <Loading />
    }
    return (
        <Container>
            <Sidebar />
            <Tasks />
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    height:100%; 
`;