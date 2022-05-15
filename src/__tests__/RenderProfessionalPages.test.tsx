import { render, unmountComponentAtNode } from 'react-dom';
import AllRequests from '../pages/Professional/AllRequests';
import MechanicDashboard from '../pages/Professional/MechanicCurrentJob';
import RequestDetails from '../pages/Professional/RequestDetails';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it('renders AllRequests without crashing', () => {
  render(<AllRequests />, container);
});

it('renders MechanicCurrentJob without crashing', () => {
  render(<MechanicDashboard/>, container);
});

it('renders RequestDetails without crashing', () => {
  render(<RequestDetails/>, container);
});
