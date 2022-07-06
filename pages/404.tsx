import type { NextPage } from 'next'

import DefaultLayout from '../layouts/DefaultLayout';

const NotFoundPage: NextPage = () => {
  return (
    <DefaultLayout>
      <h1>Error 404</h1>
      <p>Page not found.</p>
    </DefaultLayout>
  )
}

export default NotFoundPage
