import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { LoginResponseData } from '@/types/api/user';
import createSelectors from '../createSelector';

enum PERMISSIONS {
  ALPHA = 1,
  BETA = 1 << 1,
  SG = 1 << 2,
}

interface ChanUser {
  uid: number;
  name: string;
  chanAccessToken: string | null;
  roles: number;

  setUserInfo: (_user: LoginResponseData) => void;
  setToken: (_token: string) => void;
  getToken: () => string | null;
  removeToken: () => void;
}

const useChanStoreBase = create<ChanUser>()(
  persist(
    (set, get) => ({
      uid: 0,
      name: ';',
      roles: 0,
      chanAccessToken: '',

      setUserInfo: (user: LoginResponseData) =>
        set({
          uid: user.uid,
          name: user.name,
          roles: user.roles,
          chanAccessToken: user.token,
        }),

      setToken: (token: string) => {
        set({
          chanAccessToken: token,
        });
      },

      getToken: (): string | null => {
        return get().chanAccessToken;
      },

      removeToken: () => {
        set({
          chanAccessToken: null,
        });
      },
    }),

    {
      name: 'chan-user-storage',
    }
  )
);

const useChanStore = createSelectors(useChanStoreBase);

export { useChanStore, useChanStoreBase };
