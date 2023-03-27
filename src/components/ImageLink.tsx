import s from '@styles/components/ImageLink.module.scss'
import { ImageProps } from '@types'
import { Link } from 'react-router-dom';

export default function ImageLink(imageProps: ImageProps) {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__content}>
        <span className={s.wrapper__header}>{imageProps.header}</span>
        <div className={s.wrapper__horizontal} />
        <div className={s.wrapper__button}>
          <span className={s.wrapper__description}>więcej informacji</span>
          <Link to={imageProps.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
