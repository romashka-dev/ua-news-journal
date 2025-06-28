import cls from './Logo.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum LogoTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface LogoProps {
  className?: string
  theme?: LogoTheme
}

export const Logo = ({ className, theme = LogoTheme.PRIMARY }: LogoProps) => {
  return (
    <p className={classNames(cls.Logo, {}, [className, cls[theme]])}>
      Crypto wallet
    </p>
  )
}
