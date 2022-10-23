// For api data type
export interface pagesData {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: userData[];
}
export interface queryResData {
  data: tagsData[] | pagesData | undefined;
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
  keyword?: string;
  pageSize: number;
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
