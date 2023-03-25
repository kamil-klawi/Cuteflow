import { CardList, ImageLink } from '@components'
import s from '@styles/views/Home.module.scss'

const images = [
  {
    header: 'biografia',
  },
  {
    header: 'koncerty',
  },
]

function Home() {
  const renderImage = images.map((item, index) => (
    <div key={index}>
      <ImageLink
        header={item.header}
      />
    </div>
  ))

  return (
    <>
      <header className={s.header}>
        <div className={s.header__content}>
          <span className={s.header__logo}>cuteflow</span>
          <span className={s.header__index}>index</span>
        </div>
        <div className={s.header__content}>
          <span className={s.header__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          <div className={s.header__image}></div>
        </div>
      </header>
      <header className={s.header}>
        <div className={s.header__title}>popularne <span>utwory</span></div>  
        <CardList />
      </header>
      <header className={s.header}>
        {renderImage}
      </header>
    </>
  )
}

export default Home
