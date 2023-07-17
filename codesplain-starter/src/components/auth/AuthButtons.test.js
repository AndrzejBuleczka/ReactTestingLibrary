import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

describe('when user is not signed in', () => {
  test('sign in and sign up are visible', async () => {});
  test('sign out is not visible', async () => {});
})

describe('when user is signed',() => {
  test('sign in and sign up are not visible', async () => {});

  test('sign out is visible', async () => {});
})
