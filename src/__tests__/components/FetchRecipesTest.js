import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDom from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React from 'react';

import Recipes from '../../components/recipesPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<Recipes />', () => {
  const store = configureMockStore([thunk])({
    recipes: {},
    categoryName: 'name',
    categoryId: 2,
  });
  const props = {
    fetchRecipes: jest.fn(() => Promise.resolve('fetchRecipes')),
    history: { push: jest.fn() },
    match: {
      params: {
        id: 1,
      },
    },
  };
  it('should render without crashing', () => {
    const { enzymeWrapper } = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Recipes {...props} />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should render without crashing', () => {
    expect(mount(
      <Provider store={store}>
        <MemoryRouter>
          <Recipes {...props} />
        </MemoryRouter>
      </Provider>,
    )).toHaveLength(1);
  });
});

