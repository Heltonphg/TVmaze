import {showService} from '../showService';
import {api} from '../../api';
import {episodeList, epsode1, epsode2, epsode23, epsode22} from './mocks';
describe('showService', () => {
  describe('getEpisodes', () => {
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({
        data: episodeList,
      });
    });
    it('should return the correct seasons of episodes', async () => {
      const groupdEpisodes = await showService.getEpisodes('300');

      expect(groupdEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupdEpisodes.seasonNames.includes('2')).toBeTruthy();

      expect(groupdEpisodes.seasonNames.length).toBe(2);
    });

    it('when API return episode list, must have the episodes grouped by season', async () => {
      // jest.spyOn(api, 'get').mockImplementation(() =>
      //   Promise.resolve({
      //     data: episodeList,
      //   }),
      // );
      const groupdEpisodes = await showService.getEpisodes('300');

      const temp1 = groupdEpisodes.seasons['1'];
      const temp2 = groupdEpisodes.seasons['2'];

      expect(temp1.includes(epsode1)).toBeTruthy();
      expect(temp1.includes(epsode2)).toBeTruthy();

      expect(temp2.includes(epsode22)).toBeTruthy();
      expect(temp2.includes(epsode23)).toBeTruthy();
    });
  });
});
