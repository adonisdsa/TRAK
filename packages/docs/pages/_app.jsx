import { DokzProvider, ColorModeSwitch } from 'dokz'
import React, { Fragment } from 'react'
import Head from 'next/head'
import './app.css';
import { ChakraProvider, Button, Link } from '@chakra-ui/react'
import Theme from '../theme.js'
// import TagManager from 'react-gtm-module'


// TagManager.initialize({
//     gtmId: 'GTM-TLR5CTB'
// })


export default function App(props) {
    const { Component, pageProps } = props

    return (
        <ChakraProvider resetCSS theme={Theme}>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css?family=Open+Sans'
                    rel='stylesheet'
                    key='google-font-Open-Sans'
                />
            </Head>
            <DokzProvider
                headerItems={[

                    <Link href="/docs">
                    <Button 
                    color="#00beff"
                    variant="link"
                    size="sm">
                        Docs
                    </Button>
                    </Link>,

                    <Link href="/docs/api">
                    <Button 
                    color="#00beff"
                    variant="link"
                    size="sm">
                        API & SDKs
                    </Button>
                    </Link>,

                    <Link href="https://app.blueflag.com.au/get-started">
                    <Button 
                    color="#00beff"
                    variant="link"
                    size="sm">
                        Create Account
                    </Button>
                    </Link>,

                    <Link className="sign-in" href="https://app.blueflag.com.au" color="inherit" isExternal>
                    <Button 
                    variant="outline"
                    bg="inherit" 
                    w="100%"
                    borderWidth="1px"
                    px={3} 
                    py={1} 
                    borderRadius="md"
                    size="sm"
                    fontSize="sm">
                        Sign In
                    </Button>
                    </Link>,
                    <ColorModeSwitch key='1' />,
                ]}
                headerLogo={
                    <Link href="/docs">
                    <img
                        src='https://blueflag.com.au/assets/logos/blueflag-logo.svg'
                        style={{ opacity: 0.8 }}
                        alt="blueflag_logo"
                        width='150px'
                    />
                    </Link>
                }
                initialColorMode='light'
                sidebarOrdering={{
                    'index.mdx': true,
                    Documents_Group: {
                        'another.mdx': true,
                    },
                }}
            >
                <Component {...pageProps} />
            </DokzProvider>
        </ChakraProvider>
    )
}
