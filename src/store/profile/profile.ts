import { atom } from 'jotai';

export interface IProfile {
  id: number;
  email: any;
  email_verified_at: any;
  phone: string;
  phone_verified_at: string;
  status: string;
  last_login: string;
  created_at: string;
  profile: Profile;
  roles: Role[];
}

export interface Profile {
  id: number;
  full_name: string;
  avatar: Avatar;
}

export interface Avatar {
  id: number;
  url: string;
}

export interface Role {
  id: number;
  name: string;
}

// @ts-ignore
export const atomProfiole = atom<IProfile | null>({});
