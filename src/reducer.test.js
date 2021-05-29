import reducer from './reducer';

import {
  addRestaurants,
  changeInputAttribute,
} from './actions';

describe('reducer', () => {
  describe('initialState', () => {
    it('checks initial state', () => {
      const state = reducer(undefined, { type: 'checkInitialState' });

      expect(state).not.toBeUndefined();
      expect(state.newId).not.toBeUndefined();
      expect(state.name).not.toBeUndefined();
      expect(state.type).not.toBeUndefined();
      expect(state.address).not.toBeUndefined();
      expect(state.restaurants).not.toBeUndefined();
    });
  });

  describe('changeName', () => {
    it('changes name', () => {
      const state = reducer(undefined, changeInputAttribute('changeName', '뽀식이'));

      expect(state.name).toBe('뽀식이');
    });
  });

  describe('changeType', () => {
    it('changes type', () => {
      const state = reducer(undefined, changeInputAttribute('changeType', '한식'));

      expect(state.type).toBe('한식');
    });
  });

  describe('changeAddress', () => {
    it('changes address', () => {
      const state = reducer(undefined, changeInputAttribute('changeAddress', '경기도 양평군'));

      expect(state.address).toBe('경기도 양평군');
    });
  });

  describe('addRestaurants', () => {
    function reduceAddRestaurants(name, type, address) {
      return reducer({
        newId: 100,
        name,
        type,
        address,
        restaurants: [],
      }, addRestaurants());
    }

    context('with name, type, address', () => {
      const state = reduceAddRestaurants('뽀식이네', '한식', '경기도 양평군');

      expect(state.restaurants).toHaveLength(1);
      expect(state.name).toBe('');
      expect(state.type).toBe('');
      expect(state.address).toBe('');
    });

    context('without name, type, address', () => {
      const state = reduceAddRestaurants();

      expect(state.restaurants).toHaveLength(0);
    });
  });
});
