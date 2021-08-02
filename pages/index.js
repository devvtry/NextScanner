import React,{ useState } from 'react'

import { Container } from 'react-bootstrap'

import Head from 'next/head'
import MenusComp from '../comp/Menu/menus'
import CardTotal from '../comp/card/cardTotal'

export default function Home() {
  const [quantity, setQuantity] = useState(0)

  const addItemFromMenu = (val) => {
    setQuantity(val)
  }

  return (
    <>
    <Head>
      <title>My Web | Home</title>
      <meta name='keywords' content='mywebsite'/>
    </Head>
    <Container>
      <MenusComp
         quantity={ quantity }
         addItemFromMenu={ addItemFromMenu }
      />
      <CardTotal
         quantity={ quantity }
         price={ 100 }
      />
    </Container>
    </>
  )
}
