import React, {useState} from 'react';
import {useGetFriendsQuery} from '../../features/api/apiSlice';
import UserList from './UserList';

const Following: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetFriendsQuery(pageSize);
  return (
    <UserList
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      objData={pages}
    />
  );
};

export default Following;
