import Head from 'next/head'
import AddEvent from '../../../components/add-event-page/add-event'
import { getToken } from '../../../helpers/getToken'

function AddEventPage({ jwt }) {
  return (
    <>
      <Head>
        <title>Tech Events - Add Event</title>
      </Head>
      <AddEvent jwt={jwt} />
    </>
  )
}

export default AddEventPage

export async function getServerSideProps(context) {
  const jwt = getToken(context.req)
  if (!jwt) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      jwt,
    },
  }
}
