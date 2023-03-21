import React from 'react';
import {StarRating} from '../StarRating';
import {render} from '@testing-library/react-native';

describe('StarRating', () => {
  describe('rating is passed', () => {
    it('show the average', () => {
      const {getByText} = render(<StarRating rating={{average: 4.5}} />);
      expect(getByText('4.5')).toBeTruthy();
    });
    it('show the star icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 4.5}} />);
      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });
  describe('rating is not passed', () => {
    it('not show the average', () => {
      const {queryByText} = render(<StarRating />);
      expect(queryByText('4.5')).toBeNull();
    });
    it('not show the star icon', () => {
      const {queryByTestId} = render(<StarRating />);
      expect(queryByTestId('starIcon')).toBeNull();
    });
  });
});
