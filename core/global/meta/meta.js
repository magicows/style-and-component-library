import Head from 'next/head'
import '../../../styles/main.scss';

export default (title) => (
    <Head>
      <title>{title.title}</title>
    </Head>
)