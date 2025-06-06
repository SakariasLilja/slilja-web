// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

/** Identifier type for public.app_user */
export type AppUserId = string & { __brand: 'AppUserId' };

/** Represents the table public.app_user */
export default interface AppUserTable {
  id: ColumnType<AppUserId, AppUserId, AppUserId>;

  name: ColumnType<string, string, string>;

  email: ColumnType<string, string, string>;

  emailVerified: ColumnType<boolean, boolean, boolean>;

  image: ColumnType<string | null, string | null, string | null>;

  createdAt: ColumnType<Date, Date | string, Date | string>;

  updatedAt: ColumnType<Date, Date | string, Date | string>;
}

export type AppUser = Selectable<AppUserTable>;

export type NewAppUser = Insertable<AppUserTable>;

export type AppUserUpdate = Updateable<AppUserTable>;
