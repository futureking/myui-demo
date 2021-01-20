import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classnames from 'classnames';
export type ButtonSize = 'large'| 'small';
export type ButtonType = 'primary'|'default'| 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  href?: string;
  btnType: ButtonType,
  size: ButtonSize
};

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = ({
  btnType,
  className,
  disabled,
  size,
  children,
  href,
  ...res
}) => {

  const classes = classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': btnType === 'link' && href
  })

  if( btnType === 'link' && href ) {
    return(
      <a
        className={classes}
        href={href}
        {...res}
      >
        {children}
      </a>
    )
  }else {
    return(
      <button
        className={classes}
        disabled={disabled}
        {...res}
      >
      {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;