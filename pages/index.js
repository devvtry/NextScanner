import React,{ useState } from 'react'

import Head from '../comp/Common/Head/head'
import MenusComp from '../comp/Menu/menus'
import CardTotal from '../comp/cardTotal/cardTotal'

export default function Home() {
  const [quantity, setQuantity] = useState(0)

  const addItemFromMenu = (val) => {
    setQuantity(val)
  }

  return (
    <>
    <Head
      title={'Home'}
      keywords={'mywebsite'}
    />
    <MenusComp
       quantity={ quantity }
       addItemFromMenu={ addItemFromMenu }
    />
    <CardTotal
       quantity={ quantity }
       price={ 100 }
    />
    </>
  )
}
