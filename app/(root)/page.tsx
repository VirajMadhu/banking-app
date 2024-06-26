import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {
    firstName: 'Viraj',
    lastName: 'Madhushan',
    email: 'viraj.madhu1@gmail.com'
  }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANACTIONS
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 200.35, mask: 1234 },
          { currentBalance: 150.00, mask: 2345 }
        ]}
      />
    </section>
  )
}

export default Home