import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...rest
}) => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};