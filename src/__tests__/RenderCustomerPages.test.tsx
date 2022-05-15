import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AddSubscription from '../pages/Customer/AddSubscription';
import BootstrapModal from '../pages/Customer/BootstrapModal';
import Checkout from '../pages/Customer/Checkout';
import CustomerConfirmLocation from '../pages/Customer/CustomerConfirmLocation';
import Request from '../pages/Customer/Request';
import ViewMySubscriptions from '../pages/Customer/ViewMySubscriptions';
import { MemoryRouter } from 'react-router-dom';

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


it('renders Addsubscription without crashing', () => {
  render(<AddSubscription />, container);
});

it('renders BootstrapModal without crashing', () => {
  render(<BootstrapModal title="test" prompt_question="test" function={()=> {}}/>, container);
});

it('renders Checkout without crashing', () => {
  render(<Checkout/>, container);
});

it('renders CustomerConfirmLocation without crashing', () => {
  render(<CustomerConfirmLocation/>, container);
});

it('renders Request without crashing', () => {
  render(<Request/>, container);
});

it('renders ViewMySubscriptions without crashing', () => {
  render(
    <MemoryRouter>
      <ViewMySubscriptions/>
    </MemoryRouter>, 
    container
    );
});

// testing data is passed through as props and renders correctly
it("renders bootstrap modal with data", () => {
  act(() => {
    render(<BootstrapModal title="new-title" prompt_question="test" function={()=> {}}/>, container);
  });
  expect(container.textContent).toBe("new-title");

  // should test prompt_question AFTER button is clicked
});