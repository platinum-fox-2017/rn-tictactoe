import React from 'react'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Game from './Game.screen'
import { Provider } from 'react-redux'
import store from '../store'

import renderer from 'react-test-renderer';
import { wrap } from 'module';
enzyme.configure({ adapter: new Adapter() })

describe('<Game />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Provider store={store}><Game /></Provider>).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('it should render 1 View component', () => {
    const wrapper = shallow(<Game store={store} />).dive();
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('it should render 2 Status component', () => {
    const wrapper = shallow(<Game store={store} />).dive();
    expect(wrapper.find('Status')).toHaveLength(2);
  });

  it('it should render 1 Board component', () => {
    const wrapper = shallow(<Game store={store} />).dive();
    expect(wrapper.find('Board')).toHaveLength(1);
  });

  it('simulate onpress method', () => {
    const wrapper = shallow(<Game store={store} />).dive();
    console.log(wrapper.find('SmallButton'))
  //   // expect(wrapper.instance().onPress(0)).toEqual('tes')
  })
})