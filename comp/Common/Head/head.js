import Head from 'next/head'

export default function HeadComp(props) {
  const { title, keywords } = props
  return (
    <>
      <Head>
        <title>{title} | Home</title>
        <meta name='keywords' content={keywords}/>
      </Head>
    </>
  )
}
