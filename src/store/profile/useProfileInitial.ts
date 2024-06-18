import { useRequest } from 'ahooks';
import { useAtom } from 'jotai';

import { getProfile } from '@/services/profile';
import { IProfile, atomProfiole } from '@/store/profile/profile';

export const useProfileInitial = () => {
  const [, setProfile] = useAtom(atomProfiole);

  useRequest<IProfile, any>(getProfile, {
    onSuccess: (data) => {
      if (data.id) {
        setProfile(data);
      }
    },
  });
};
