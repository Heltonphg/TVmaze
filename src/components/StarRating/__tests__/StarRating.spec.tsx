import React from 'react';
import {StarRating} from '../StarRating';
import {render} from '@testing-library/react-native';

describe('StarRating', () => {
  it('should render correctly', () => {
    render(
      <StarRating
        rating={{
          average: 4.5,
        }}
      />,
    );
  });
});
