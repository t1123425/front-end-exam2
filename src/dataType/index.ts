/**
 * For search result & followers api data type
 * @interface PagesData
 */
export interface PagesData {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: UserData[];
}
/**
 * For calling updatepage function from parent component
 * @interface CallChildFunction
 */
export interface CallChildFunction {
  updatepage(): void;
}
/**
 * For RTK query callback status
 * @interface QueryResData
 * @objData {PagesData}
 */
export interface QueryResData {
  objData?: PagesData;
  arrData?: TagsData[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
/**
 * For rendering user box from api of search result & followers
 * @interface UserData
 */
export interface UserData {
  id?: string;
  name: string;
  username: string;
  isFollowing: boolean;
  avatar?: string;
}
/**
 * For RTk query search Data
 * @interface QuerySearchData
 */
export interface QuerySearchData {
  keyword?: string | null;
  page: number | null;
  pageSize: number | null;
}
/**
 * Data type for tags api data
 * @interface TagsData
 */
export interface TagsData {
  id: string;
  name: string;
  count: number;
}
/**
 * Data type for InfoBox props data
 * @interface InfoBoxProps
 */
export interface InfoBoxProps {
  title?: string;
  secondary?: string;
  children?: JSX.Element;
}
