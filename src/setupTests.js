// Create React App requires this file to be placed in this location, with this name.

/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockDate from 'mockdate';

// configure react v16 for enzzyme testing
configure({ adapter: new Adapter() });
// hard code dates (snapshots...)
MockDate.set('1/1/2000');
