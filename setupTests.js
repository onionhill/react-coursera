// jest.setup.js

import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Mock the react-router-dom module
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
  useParams: jest.fn(),
  useRouteMatch: jest.fn(),
}));

// Set up the MemoryRouter
global['React'] = require('react');
global['ReactDOM'] = require('react-dom');
global['ReactRouterDom'] = require('react-router-dom');
global['ReactRouterDomMemoryRouter'] = MemoryRouter;
