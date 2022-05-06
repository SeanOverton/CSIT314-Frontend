import { render, unmountComponentAtNode } from 'react-dom';
import AboutUs from '../pages/General/About';
import CalloutHistory from "../pages/General/CalloutHistory";
import CalloutHistoryDetails from '../pages/General/CalloutHistoryDetails';
import ContactUs from '../pages/General/ContactUs';
import Home from '../pages/General/Home';
import LogIn from '../pages/General/Login';
import Membership from "../pages/General/Membership";
import Profile from '../pages/General/Profile';
import Services from '../pages/General/Services';
import SignUp from '../pages/General/SignUp';

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


// it('renders About without crashing', () => {
//   render(<AboutUs />, container);
// });

it('renders CalloutHistory without crashing', () => {
  render(<CalloutHistory/>, container);
});

it('renders CalloutHistoryDetails without crashing', () => {
  render(<CalloutHistoryDetails/>, container);
});

it('renders ContactUs without crashing', () => {
  render(<ContactUs/>, container);
});

// it('renders Home without crashing', () => {
//   render(<Home/>, container);
// });

it('renders Login without crashing', () => {
  render(<LogIn/>, container);
});

// it('renders Membership without crashing', () => {
//   render(<Membership/>, container);
// });

it('renders Profile without crashing', () => {
  render(<Profile/>, container);
});

// it('renders Services without crashing', () => {
//   render(<Services/>, container);
// });

// it('renders Signup without crashing', () => {
//   render(<SignUp/>, container);
// });
