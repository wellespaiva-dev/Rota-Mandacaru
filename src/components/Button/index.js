import React from 'react';
import {
  ButtonLayout,
  ButtonText,
} from './styles';

const Button = ({ fullWidth = true, disabled, onPress, leftIcon, rightIcon, color = 'primary', variant = 'contained', children, _width = null }) => {

  return (
    <ButtonLayout
      color={color}
      variant={variant}
      activeOpacity={!disabled ? 0.4 : 1}
      selected={!disabled}
      onPress={() => !disabled && onPress()}
      fullWidth={fullWidth}
      _width={_width}
    >
      {leftIcon && leftIcon()}
      <ButtonText variant={variant}>{children}</ButtonText>
      {rightIcon && rightIcon()}
    </ButtonLayout>
  )
}

export default Button;