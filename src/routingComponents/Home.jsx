import React from 'react'
import Intropage from '../components/Intropage'
import CFather from '../components/CFather'
import C2father from '../components/C2father'
import C3father from '../components/C3father'
import Broucher from '../components/Broucher'
import Materials from '../components/Materials'
import BankAcc from '../components/BankAcc'

const Home = () => {
  return (
    <section className="section-header">
      <Intropage/>
      <CFather/>
      <C2father/>
      <C3father/>
      <Materials/>
      <BankAcc/>
      <Broucher/>
      
    </section>
  )
}

export default Home