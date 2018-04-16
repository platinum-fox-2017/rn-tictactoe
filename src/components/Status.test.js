import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Status from './Status'

import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() })

describe('<Status />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Status />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('it should render 1 view component', () => {
    const wrapper = shallow(<Status />);
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('it should render 1 text component', () => {
    const wrapper = shallow(<Status />);
    expect(wrapper.find('Text')).toHaveLength(1);
  });
})