// For api data type
export interface pagesData {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: userData[];
}
export interface callChildFunction {
  updatepage(): void;
}
export interface queryResData {
  objData?: pagesData;
  arrData?: tagsData[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
//For user Data
export interface userData {
  id?: string;
  name: string;
  username: string;
  isFollowing: boolean;
  avatar?: string;
}
export interface userFriendState {
  [key: string]: userData[];
  Followers: userData[];
  Following: userData[];
}
export interface searchData {
  keyword?: string | null;
  page: number | null;
  pageSize: number | null;
}

export interface tagsData {
  id: string;
  name: string;
  count: number;
}

export interface infoBoxProps {
  title?: string;
  secondary?: string;
  children?: JSX.Element;
}
