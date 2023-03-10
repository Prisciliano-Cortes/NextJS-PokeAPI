import { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from '../ui/Navbar';

interface Props {
    children: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ({ children, title }: Props): JSX.Element => {

    return (
        <>
            <Head>
                <title> { title || 'Pokemon App'} </title>
                <meta name="author" content="Prisciliano Cortés" />
                <meta name="description" content={`Pokemon API ${title}`} />
                <meta name="keywords" content={`Pokemon ${title}`} />
                <meta property="og:title" content={`Information of pokemon ${title}`} />
                <meta property="og:description" content={`This page is of pokemon ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />
            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    )
}
