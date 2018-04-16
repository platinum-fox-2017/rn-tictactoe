import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import End from './End.screen'
import { Provider } from 'react-redux'
import store from '../store'

import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() })

describe('<End />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Provider store={store}><End /></Provider>).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('it should render 1 View component', () => {
    const wrapper = shallow(<End store={store} />).dive();
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('it should render 1 Status component', () => {
    const wrapper = shallow(<End store={store} />).dive();
    expect(wrapper.find('Status')).toHaveLength(1);
  });

  it('it should render 1 InputButton component', () => {
    const wrapper = shallow(<End store={store} />).dive();
    expect(wrapper.find('InputButton')).toHaveLength(1);
  });
})