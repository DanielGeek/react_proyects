import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

// simula scroll, para que no de error en el notes.test.js al llamar startUploading
const noScroll = () => {};
Object.defineProperty( window, 'scrollTo', { value: noScroll, writable: true});

 