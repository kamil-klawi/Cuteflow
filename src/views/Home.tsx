import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { CardList, ImageLink, Footer } from '@components'
import { imagesData, videoData } from '@utils'
import s from '@styles/views/Home.module.scss'

function Home() {
  const renderImage = imagesData.map((item, index) => (
    <Fragment key={index}>
      <ImageLink header={item.header} link={item.link} />
    </Fragment>
  ))

  return (
    <>
      <header className={s.header}>
        <div className={s.header__content}>
          <span className={s.header__logo}>cuteflow</span>
          <Link to={'/'} className={s.header__index}>index</Link>
        </div>
        <div className={s.header__content}>
          <span className={s.header__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
          <div className={s.header__image}></div>
        </div>
      </header>
      <header className={s.header}>
        <div className={s.header__title}>
          popularne <span>utwory</span>
        </div>
        <CardList videoData={videoData} />
      </header>
      <header className={s.header}>{renderImage}</header>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
