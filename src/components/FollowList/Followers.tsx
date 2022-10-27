import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {useGetAllDataQuery} from '../../features/api/apiSlice';
import UserList from './UserList';
import {CallChildFunction, UserData} from '../../dataType';

const Followers = forwardRef<CallChildFunction, {}>((props, ref) => {
  useImperativeHandle(ref, () => ({
    updatepage() {
      //console.log('from parent');
      // console.log('current', currentPage.current);
      if (hasNextRef.current) {
        currentPage.current += 1;
        updateStatus.current = true;
        //console.log('current', currentPage.current);
        refetch();
      }
    },
  }));
  const updateStatus = useRef(true);
  const currentPage = useRef(1);
  const hasNextRef = useRef(true);
  const resultLists = useRef<UserData[]>([]);
  const {
    data: pages,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetAllDataQuery({page: currentPage.current, pageSize: 14});

  function renderLists(
    successStatus: boolean,
    isUpdate: boolean,
    hasNext: boolean,
    updateData: UserData[]
  ) {
    if (successStatus && isUpdate && hasNext) {
      resultLists.current = [...resultLists.current, ...updateData];
      updateStatus.current = false;
      if (currentPage.current === pages?.totalPages) {
        hasNextRef.current = false;
      }
    }
  }
  renderLists(
    isSuccess,
    updateStatus.current,
    hasNextRef.current,
    pages?.data ? pages?.data : []
  );
  return (
    <UserList
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      listData={resultLists.current}
    />
  );
});
Followers.displayName = 'Followers';
export default Followers;
