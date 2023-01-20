import renderer from 'react-test-renderer';
import { LinkCmp } from './link';
 
it('Test on link component', () => {
  let
   component = renderer.create(<LinkCmp page="http://www.facebook.com">Facebook</LinkCmp>),
   tree = component.toJSON()
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});