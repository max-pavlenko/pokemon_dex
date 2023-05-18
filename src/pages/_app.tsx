import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import Head from "next/head";
import MainLayout from "@/app/shared/layout/MainLayout";

export default function App({Component, pageProps}: AppProps) {
    return (
        <MainLayout>
            <Head>
                <title>Poke | Dex</title>
                <meta name="title" content='PokeDex'></meta>
                <meta name="description" content='description'></meta>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'/>
                <meta property="og:type" content="website"></meta>
                <meta property="og:url" content='domain'></meta>
                <meta property="og:title" content='PokeDex'></meta>
                <meta property="og:description" content='description'></meta>
                <meta property="og:image" content='image'></meta>
                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:url" content='domain'></meta>
                <meta property="twitter:title" content='PokeDex'></meta>
                <meta property="twitter:description" content='description'></meta>
                <meta property="twitter:image" content='image'></meta>
            </Head>
            <Component {...pageProps} />
        </MainLayout>
    )
}
