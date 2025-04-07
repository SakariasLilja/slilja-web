// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

/** Identifier type for public.verification */
export type VerificationId = string & { __brand: 'VerificationId' };

/** Represents the table public.verification */
export default interface VerificationTable {
  id: ColumnType<VerificationId, VerificationId, VerificationId>;

  identifier: ColumnType<string, string, string>;

  value: ColumnType<string, string, string>;

  expiresAt: ColumnType<Date, Date | string, Date | string>;

  createdAt: ColumnType<Date, Date | string, Date | string>;

  updatedAt: ColumnType<Date, Date | string, Date | string>;
}

export type Verification = Selectable<VerificationTable>;

export type NewVerification = Insertable<VerificationTable>;

export type VerificationUpdate = Updateable<VerificationTable>;
