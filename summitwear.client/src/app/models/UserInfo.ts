

export interface UserInfo {
  userInfoId: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  userId: string; // Foreign key for User
}
