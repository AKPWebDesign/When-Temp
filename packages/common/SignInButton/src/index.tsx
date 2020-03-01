import React from 'react';
import styled from '@emotion/styled';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button, { ButtonProps } from '@material-ui/core/Button';
import {
  darken,
  getLuminance,
  lighten,
  Theme,
} from '@material-ui/core/styles';
import { Providers, ValidProvider } from './providers';

type SignInButtonProps = {
  provider: ValidProvider;
  label?: string;
  icon?: IconDefinition;
  onClick?: () => void;
};

type StyledButtonProps = {
  backgroundColor?: string;
  label?: string;
  icon?: IconDefinition;
  theme?: Theme;
};

const hoverColor = (color: string) => {
  if (getLuminance(color) > 0.25) {
    return darken(color, 0.15);
  }
  return lighten(color, 0.15);
};

const textColor = (color: string) => {
  if (getLuminance(color) > 0.50) {
    return 'black';
  }
  return 'white';
};

const StyledIcon = styled(FontAwesomeIcon)`
  padding-right: 0.875em;
`;

const StyledButton = styled(({
  backgroundColor, icon, label, ...otherProps
}) => (
  <Button classes={{ label: 'label' }} {...otherProps}>
    { icon && <StyledIcon icon={icon} />}
    { label }
  </Button>
))<StyledButtonProps>`
  ${({ backgroundColor, theme }) => `
    background-color: ${backgroundColor ?? theme?.palette?.primary?.main ?? '#fff'};
    color: ${textColor(backgroundColor ?? theme?.palette?.primary?.main ?? '#fff')};
    margin-top: 10px;

    & .label {
      padding: 0 10px;
    }

    &:hover {
      background-color: ${hoverColor(backgroundColor ?? theme?.palette?.primary?.main ?? '#fff')};
    }
  `}
`;

export const SignInButton: React.FC<SignInButtonProps & StyledButtonProps & ButtonProps> = ({
  provider = 'google', icon, label, onClick, ...otherProps
}) => {
  const providerObj = Providers[provider];
  return (
    <StyledButton
      backgroundColor={providerObj.backgroundColor}
      onClick={onClick}
      label={label ?? providerObj.name}
      icon={icon ?? providerObj.icon}
      size="large"
      variant="contained"
      {...otherProps}
    >
      { providerObj.icon && <StyledIcon icon={providerObj.icon} /> }
      {providerObj.name}
    </StyledButton>
  );
};

export default SignInButton;
