import Head from 'next/head'
import {ExperienceBar} from "../components/ExperienceBar";

export default function Home() {
  return (
    <div className="container">
    <Head>
          <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Rajdhani:300,regular,500,600,700" rel="stylesheet" />
    </Head>

      <ExperienceBar />
    </div>
  )
}
