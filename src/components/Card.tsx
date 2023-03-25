import ReactPlayer from 'react-player'
import { SongProps } from '@types'
import s from '@styles/components/Card.module.scss'

export default function Card(cardProps: SongProps) {
  return (
    <div className={s.card}>
      <ReactPlayer
        className={s.card__video}
        volume={0.05}
        controls={false}
        url={cardProps.url}
      />
      <div className={s.card__content}>
        <span>{cardProps.title}</span>
        <span>{cardProps.genre}</span>
      </div>
    </div>
  )
}