import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import {useGetAllDataQuery} from '../../features/api/apiSlice';
import UserList from './UserList';
import {callChildFunction} from '../../dataType';

const Followers = forwardRef<callChildFunction, {}>((props, ref) => {
  useImperativeHandle(ref, () => ({
    updatepage() {
      //console.log('from parent');
      // setCurrentPage(currentPage => currentPage + 1);
      currentPage.current += 1;
      console.log('current', currentPage.current);
      refetch();
    },
  }));

  const currentPage = useRef(1);
  const hasNextRef = useRef(true);

  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetAllDataQuery({page: currentPage.current, pageSize: 14});
  if (pages?.page === pages?.totalPages) {
    hasNextRef.current = false;
  }

  return (
    <UserList
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      objData={pages}
      hasNextData={hasNextRef.current}
    />
  );
});
Followers.displayName = 'Followers';
export default Followers;
