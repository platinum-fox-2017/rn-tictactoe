import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import InputButton from './InputButton'

import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() })

const initialState = {
  title: 'test render',
  onPress: () => 'clicked'
}

describe('<InputButton title={ initialState.title } onPress={ initialState.onPress } />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<InputButton title={ initialState.title } onPress={ initialState.onPress } />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('it should render 1 View component', () => {
    const wrapper = shallow(<InputButton title={ initialState.title } onPress={ initialState.onPress } />);
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('it should render 1 Button component', () => {
    const wrapper = shallow(<InputButton title={ initialState.title } onPress={ initialState.onPress } />);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
})