import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <h1>İlk Next.js Web siteme hoşgeldin!.</h1>

      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a> {character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  // data fetch
  const data = await unfetch('https://rickandmortyapi.com/api/character/')
  const character = await data.json()
  return {
    props: {
      characters: character
    }
  }
}

export default HomePage
