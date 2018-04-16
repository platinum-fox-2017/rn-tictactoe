import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from './Login.screen'
import { Provider } from 'react-redux'
import store from '../store'

import renderer from 'react-test-renderer';
enzyme.configure({ adapter: new Adapter() })

describe('<Login />', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Provider store={store}><Login /></Provider>).toJSON();
    expect(rendered).toBeTruthy();
  });

  it('it should render 1 View component', () => {
    const wrapper = shallow(<Login store={store} />).dive();
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('it should render 2 InputText component', () => {
    const wrapper = shallow(<Login store={store} />).dive();
    expect(wrapper.find('InputText')).toHaveLength(2);
  });

  it('it should render 1 InputButton component', () => {
    const wrapper = shallow(<Login store={store} />).dive();
    expect(wrapper.find('InputButton')).toHaveLength(1);
  });

  it('it should render the InputText component if state.playerOne is pemainsatu', () => {
    const wrapper = shallow(<Login store={store} />).dive();
    wrapper.instance().onChangeTextPlayerOne('pemainsatu');
    expect(wrapper.instance().state.playerOne).toEqual('pemainsatu');
  });

  it('it should render the InputText component if state.playerTwo is pemaindua', () => {
    const wrapper = shallow(<Login store={store} />).dive();
    wrapper.instance().onChangeTextPlayerTwo('pemaindua');
    expect(wrapper.instance().state.playerTwo).toEqual('pemaindua');
  });

  // it('it should execute function onpress', () => {
    // const wrapper = shallow(<Login store={store} />).dive();
    // wrapper.instance().onPress()
    // console.log(wrapper.instance())
    // const mockCallback = jest.fn();
    // wrapper.instance().onChangeTextPlayerTwo('pemaindua');
    // expect(wrapper.instance().state.playerTwo).toEqual('pemaindua');
  // });
})