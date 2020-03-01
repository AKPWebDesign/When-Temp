import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faYahoo } from '@fortawesome/free-brands-svg-icons/faYahoo';

export type ValidProvider = 'email' | 'google' | 'facebook' | 'twitter' | 'github' | 'microsoft' | 'yahoo';

export type Provider = {
  name: string;
  backgroundColor?: string;
  icon?: IconDefinition;
};

export const email: Provider = {
  name: 'Log In',
};

export const google: Provider = {
  name: 'Google',
  backgroundColor: '#fff',
  icon: faGoogle,
};

export const facebook: Provider = {
  name: 'Facebook',
  backgroundColor: '#3b5998',
  icon: faFacebook,
};

export const twitter: Provider = {
  name: 'Twitter',
  backgroundColor: '#38A1F3',
  icon: faTwitter,
};

export const github: Provider = {
  name: 'GitHub',
  backgroundColor: '#f5f5f5',
  icon: faGithub,
};

export const microsoft: Provider = {
  name: 'Microsoft',
  backgroundColor: '#2f2f2f',
  icon: faMicrosoft,
};

export const yahoo: Provider = {
  name: 'Yahoo!',
  backgroundColor: '#400090',
  icon: faYahoo,
};

type ProviderMap = { [key in ValidProvider]: Provider; }

export const Providers: ProviderMap = {
  email,
  google,
  facebook,
  twitter,
  github,
  microsoft,
  yahoo,
};
