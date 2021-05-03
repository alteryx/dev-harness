import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

/**
 * Defines JsEvent on the window object.
 */
declare let window: any;

window.Alteryx = {};
window.Alteryx.JsEvent = () => {};
