import { NextPage } from 'next'
import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
  getLayout? : (Page: ReactElement) =>ReactNode;
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page)
  // return 
  // (
  //   <>
  //     {/* <h1>My app</h1>
  //     <Component {...pageProps} /> */}
  //   </>
  //  )
  return getLayout(<Component {...pageProps} />)

}
