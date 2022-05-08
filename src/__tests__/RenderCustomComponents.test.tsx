import { render, unmountComponentAtNode } from 'react-dom';
import CalloutDetails from '../components/CalloutDetails';
import { act } from "react-dom/test-utils";

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


// it('renders BurgerMenu without crashing', () => {
//   render(<BurgerMenu/>, container);
// });

const calloutDetailsExample = {
  id: 1,
  location: "string",
  status: "string",
  username: "string", 
  description: "string",
  mechanic: "string", 
  date: "testTtest", 
  rating: "string", 
  review: "string",
}

// it('renders CalloutDetails with route without crashing', () => {
//   render(<CalloutDetails details={calloutDetailsExample} displayRoute={true}/>, container);
// });

it('renders CalloutDetails without google route without crashing', () => {
  render(<CalloutDetails details={calloutDetailsExample} displayRoute={false}/>, container);
});

// it('renders CardSlider without crashing', () => {
//   render(<CardSlider/>, container);
// });

// it('renders ContactUsButton without crashing', () => {
//   render(<ContactUsButton/>, container);
// });

// it('renders Footer without route without crashing', () => {
//   render(<Footer/>, container);
// });

// it('renders ProfileCard without route without crashing', () => {
//   render(<ProfileCard/>, container);
// });

// it('renders Nav without route without crashing', () => {
//   render(<Nav/>, container);
// });

// it('renders MechanicDashboard without route without crashing', () => {
//   render(<MechanicViewRoute/>, container);
// });