import React, {createRef} from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';

describe('Season Modal', () => {
  it('show all season option', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={() => {}}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/Season/i).length).toEqual(3);
  });

  it('call onSelectSeason with correct season when season was pressed', () => {
    const modalizeRef = createRef<Modalize>();
    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    fireEvent.press(getByText(/season 1/i));

    expect(onSelectSeasonMock).toHaveBeenCalledWith('1');
  });
});
