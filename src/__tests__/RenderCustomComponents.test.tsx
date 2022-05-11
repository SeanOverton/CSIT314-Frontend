import { render, unmountComponentAtNode } from 'react-dom';
import CalloutDetails from '../components/CalloutDetails';
import { act } from "react-dom/test-utils";
import CardSlider from '../components/CardSlider';
import BurgerMenu from '../components/BurgerMenu';
import { MemoryRouter } from 'react-router-dom';
import ContactUsButton from '../components/ContactUsButton';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import Nav from '../components/Nav';
import MechanicViewRoute from '../components/MechanicViewRoute';

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


it('renders BurgerMenu without crashing', () => {
  render(
    <MemoryRouter>
      <BurgerMenu/>
    </MemoryRouter>, 
    container
    );
});

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

// it('renders CalloutDetails without google route without crashing and data is confirmed', () => {
//   act(() => {
//     render(<CalloutDetails details={calloutDetailsExample} displayRoute={false}/>, container);
//   });
//   expect(container.getElementById("booking_id").text()).toBe("1");
// });

// it('renders CardSlider without crashing', () => {
//   render(<CardSlider/>, container);
// });

it('renders ContactUsButton without crashing', () => {
  render(<MemoryRouter><ContactUsButton/></MemoryRouter>, container);
});

it('renders Footer without route without crashing', () => {
  render(<MemoryRouter><Footer/></MemoryRouter>, container);
});

it('renders ProfileCard without route without crashing', () => {
  render(<ProfileCard/>, container);
});

it('renders Nav without route without crashing', () => {
  render(<MemoryRouter><Nav/></MemoryRouter>, container);
});

// it('renders MechanicDashboard without route without crashing', () => {
//   render(<MechanicViewRoute/>, container);
// });