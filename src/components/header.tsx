import React from 'react';
import { styled } from '@compiled/css-in-js';

export const Header = styled.header`
  height: 8rem;
  display: flex;
  align-items: center;
  background-color: #091f41;
  padding: 0 2rem;
  color: white;
`;

export const FixedHeader = (props: any) => (
  <>
    <div css={{ height: '8rem' }} />
    <FixedHeader {...props} />
  </>
);

export const SecondaryActions = styled.nav`
  margin-left: auto;
`;

export const PrimaryActions = styled.nav``;
