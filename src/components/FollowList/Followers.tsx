import React, {useState} from 'react';
import {useGetAllDataQuery} from '../../features/api/apiSlice';
import UserList from './UserList';

const Followers: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetAllDataQuery({page: currentPage, pageSize: '14'});
  return (
    <UserList
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      objData={pages}
    />
  );
};

export default Followers;
