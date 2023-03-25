import { Link } from 'react-router-dom'
import s from '@styles/components/Footer.module.scss'

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer__content}>
        <Link to={'https://www.instagram.com/cutefloww/'} className={s.footer__link}>instagram</Link>
        <Link to={'https://soundcloud.com/cuteflow'} className={s.footer__link}>soundcloud</Link>
        <Link to={'https://open.spotify.com/artist/3rEfxMnUlEvJcrA4kC1VX5'} className={s.footer__link}>spotify</Link>
        <Link to={'https://www.youtube.com/channel/UCHIjgx8_XQ0DdoWSCLDuOLA'} className={s.footer__link}>youtube</Link>
      </div>
      <div className={s.footer__content}>
        <span>&copy; cuteflow 2023</span>
      </div>
    </div>
  )
}

export default Footer
