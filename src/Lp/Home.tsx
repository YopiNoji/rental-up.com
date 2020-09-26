import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/Lp/Container.tsx'
import SEO from '@/components/SEO'

const Home: React.FC = () => {
  return (
    <div>
      <SEO title="借上社宅.com" description="借上社宅.comは借上社宅の導入・運用を手軽にし企業と社員の課税支出を軽減するサービスです" ></SEO>
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default Home
