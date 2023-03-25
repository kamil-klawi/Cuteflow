import Card from './Card'
import s from '@styles/components/CardList.module.scss'

const data = [
  {
    url: 'https://www.youtube.com/watch?v=4_SoXMwEpCM',
    alternate: 'shoes',
    title: 'hot blood',
    genre: 'single',
  },
  {
    url: 'https://www.youtube.com/watch?v=4_SoXMwEpCM',
    alternate: 'shoes',
    title: 'hot blood',
    genre: 'single',
  },
  {
    url: 'https://www.youtube.com/watch?v=4_SoXMwEpCM',
    alternate: 'shoes',
    title: 'hot blood',
    genre: 'single',
  },
  {
    url: 'https://www.youtube.com/watch?v=4_SoXMwEpCM',
    alternate: 'shoes',
    title: 'hot blood',
    genre: 'single',
  },
  {
    url: 'https://www.youtube.com/watch?v=4_SoXMwEpCM',
    alternate: 'shoes',
    title: 'hot blood',
    genre: 'single',
  },
  {
    url: 'https://www.youtube.com/watch?v=4_SoXMwEpCM',
    alternate: 'shoes',
    title: 'hot blood',
    genre: 'single',
  },
]

export default function CardList() {
  const render = data.map((item, index) => (
    <div key={index}>
      <Card
        url={item.url}
        title={item.title}
        genre={item.genre}
      />
    </div>
  ))
  return <div className={s.list}>{render}</div>
}