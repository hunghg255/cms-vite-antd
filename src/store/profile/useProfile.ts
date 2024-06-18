import { useAtomValue } from 'jotai';

import { atomProfiole } from '@/store/profile/profile';

export const useProfile = () => {
  return useAtomValue(atomProfiole);
};
