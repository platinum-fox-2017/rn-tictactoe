import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Board from './Board'

import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() })

describe('<Board />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Board />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('it should render 1 View component', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('View')).toHaveLength(1);
  });
})