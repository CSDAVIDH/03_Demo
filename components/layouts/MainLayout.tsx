import Head from "next/head"
import styles from "./MainLayout.module.css"
import { Navbar } from "../Navbar"
import React from "react"

interface Props {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container} >
      <Head>
        <title>Home - David</title>
        <meta name="description" content="Home App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}


