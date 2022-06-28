import { DokzProvider, ColorModeSwitch } from 'dokz'
import React, { Fragment } from 'react'
import Head from 'next/head'
import './app.css';
import { ChakraProvider, Button, Link } from '@chakra-ui/react'
import Theme from '../theme.js'
import TagManager from 'react-gtm-module'

// console.log('document',document)

// TagManager.initialize({
//     gtmId: 'GTM-TLR5CTB'
// })

export default function App(props) {
    const { Component, pageProps } = props

    const order = {
        'index.mdx': true,
        'authentication.mdx': true,
        'rate_limits.mdx': true,
        'environments.mdx': true,
        anotherDirectory: false, // use false to exclude directories and files
        pageName: true, // you can omit the mdx extension
        products: {
            vin_decoder: true,
            NEVDIS: {
                nevdis_search_query_parameters: true,
                lookup: true,
                vehicle_details: true,
                registration_status: true,
                build_and_compliance: true,
                stolen_check: true,
                written_off_vehicle: true,
                    bundles: {
                        vehicle_details_build_and_compliance: true,
                        registration_status_build_and_compliance: true,
                        vehicle_details_registration_status_build_and_compliance: true,
                    }
            },
        },
        // paths not present will be put at the end
    }

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
                    
                    <Link href="/docs/">
                    <Button 
                    color="#00beff"
                    variant="link"
                    size="sm">
                        Docs
                    </Button>
                    </Link>,

                    <Link href="/docs/api/">
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

                    <Link className="sign-in" href="https://app.blueflag.com.au/" color="inherit" isExternal>
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
                    <Link href="/docs/">
                    <img
                        src='https://blueflag.com.au/assets/logos/blueflag-logo.svg'
                        style={{ opacity: 0.8 }}
                        alt="blueflag_logo"
                        width='150px'
                    />
                    </Link>
                }
                initialColorMode='dark'
                sidebarOrdering={order}
            >
                <Component {...pageProps} />
            </DokzProvider>
        </ChakraProvider>
    )
}
