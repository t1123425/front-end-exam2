import React, {useState, useRef} from 'react';
import {useGetFriendsQuery} from '../../features/api/apiSlice';
import UserList from './UserList';

const Following: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const hasNextRef = useRef(true);
  const pageSize = 10;
  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
  } = useGetFriendsQuery({page: currentPage, pageSize: pageSize});
  if (pages?.page === pages?.totalPages) {
    hasNextRef.current = false;
  }
  function goNextPage() {
    setCurrentPage(currentPage => currentPage + 1);
  }
  return (
    <UserList
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      objData={pages}
      hasNextData={hasNextRef.current}
      parentfunction={goNextPage}
    />
  );
};

export default Following;
