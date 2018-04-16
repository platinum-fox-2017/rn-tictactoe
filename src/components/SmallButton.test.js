import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SmallButton from './SmallButton'

import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() })

const initialState = {
  title: 'test render'
}

describe('<SmallButton />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<SmallButton title={ initialState.title } />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('it should render 1 view component', () => {
    const wrapper = shallow(<SmallButton title={ initialState.title } />);
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('it should render 1 button component', () => {
    const wrapper = shallow(<SmallButton title={ initialState.title } />);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
})