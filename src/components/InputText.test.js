import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import InputText from './InputText'

import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() })

describe('<InputText />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<InputText />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('it should render 1 TextInput component', () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper.find('TextInput')).toHaveLength(1);
  });
})