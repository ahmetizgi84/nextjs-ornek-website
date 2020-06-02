import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function characterDetay({ character }) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <h1>{character.name}</h1>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const characters = await data.json()
  return {
    paths: characters.results.map((character) => {
      return {
        params: { slug: `${slug(character.name)}-${character.id}` }
      }
    }),
    fallback: false // See the "fallback" section below
  }
}

export async function getStaticProps({ params }) {
  // data fetch
  const id = params.slug.split('-').slice(-1)[0]
  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await data.json()

  return {
    props: {
      character
    }
  }
}

export default characterDetay
