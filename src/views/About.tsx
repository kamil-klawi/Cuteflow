import { CardList, Footer } from '@components'
import s from '@styles/views/About.module.scss'
import { Link } from 'react-router-dom'
import { allVideoData } from '@utils'

function About() {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__content}>
          <span className={s.header__logo}>cuteflow</span>
          <Link to={'/'} className={s.header__index}>index</Link>
        </div>
        <div className={s.header__flex}>
          <div className={s.header__image}></div>
          <div className={s.header__content}>
            <div className={s.header__wrapper}>
              <span className={s.header__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span>
              <div className={s.header__breakline} />
              <span className={s.header__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolores et. Sit quidem nemo deleniti voluptates architecto officiis optio, harum beatae, culpa eligendi numquam. Tempore eaque magni enim reiciendis tempora repudiandae aliquid, quia placeat repellat, aut corrupti, in blanditiis vel?</span>
            </div>
            <div className={s.header__wrapper}>
              <div className={s.header__content}>
                <span className={s.header__text}></span>
                <span className={s.header__text}>Jakub Ostojski</span>
              </div>
              <div className={s.header__horizontal} />
              <div className={s.header__content}>
                <span className={s.header__text}>Z</span>
                <span className={s.header__text}>Producent muzyczny</span>
              </div>
              <div className={s.header__horizontal} />
              <div className={s.header__content}>
                <span className={s.header__text}>E</span>
                <span className={s.header__text}>kuozz.biznes@gmail.com</span>
              </div>
              <div className={s.header__horizontal} />
              <div className={s.header__content}>
                <span className={s.header__text}>T</span>
                <span className={s.header__text}>(+48) 789 656 765</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className={s.header}>
        <CardList videoData={allVideoData} />
      </header>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default About
