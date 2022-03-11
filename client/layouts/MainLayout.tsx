import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps>
    = ({
           children,
           title,
            description,
            keywords
       }) => {
    return (
        <>
            <Head>
                <title>{title || 'Музична платформа'}</title>
                <meta name="description" content={`Музична платворма тут кожен може залишити свій трек` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Муика, треки, артисти"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;
