import { Fragment } from 'react'
import Card from './Card'
import s from '@styles/components/CardList.module.scss'
import { useLocation } from 'react-router-dom'

export default function CardList({videoData}) {
  const checkRoute = () => {
    const location = useLocation()
    return location.pathname
  }
  const render = videoData.map((item, index) => (
    <Fragment key={index}>
      <Card
        url={item.url}
        title={item.title}
        genre={item.genre}
      />
    </Fragment>
  ))
  return <div className={checkRoute() == '/' ? `${s.list}` : `${s.table}`}>{render}</div>
}