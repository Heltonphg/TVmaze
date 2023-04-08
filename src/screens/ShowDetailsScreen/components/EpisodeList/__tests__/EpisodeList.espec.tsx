import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {EpisodeList} from '../EpisodeList';
import {mocks} from './mocks';
import {QueryClient, QueryClientProvider} from 'react-query';
import {showService} from '../../../../../services/show/showService';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});
const wrapper = ({children}: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('EpisodeList', () => {
  it('show all season one episodes at first', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.epsode1, mocks.epsode2],
        2: [mocks.epsode22, mocks.epsode23],
      },
    });
    const {findByText, getByText} = render(<EpisodeList show={mocks.show} />, {
      wrapper,
    });

    await findByText(mocks.epsode1.name);

    expect(getByText(mocks.epsode1.name)).toBeTruthy();
    expect(getByText(mocks.epsode2.name)).toBeTruthy();
  });
});
