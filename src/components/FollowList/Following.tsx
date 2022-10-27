import React, {useRef} from 'react';
import {useGetFriendsQuery} from '../../features/api/apiSlice';
import UserList from './UserList';
import {UserData} from '../../dataType';

const Following: React.FC = () => {
  const pageSize = 10;
  const resultLists = useRef<UserData[]>([]);
  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
  } = useGetFriendsQuery({page: 1, pageSize: pageSize});
  function renderLists(successStatus: boolean, updateData: UserData[]) {
    if (successStatus) {
      resultLists.current = [...resultLists.current, ...updateData];
    }
  }
  renderLists(isSuccess, pages?.data ? pages?.data : []);
  return (
    <UserList
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      listData={resultLists.current}
    />
  );
};

export default Following;
