import React, { useState } from 'react';
import { useFetch } from "../../hooks/useFetch";
import UserCard from "../../components/UserCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
import  Container  from "../../components/Container";
const Index = () => {
  const [page, setPage] = useState(1);
  const [{ data, loading }, getData] = useFetch({
    url: `/users?role=MANAGER&page=${page - 1}&size=5`,
    initData: {
      list: [],
      total: 1
    }
  });

  const [{loading: isRemoveLoading}, removeUser] = useFetch({
    instant: false,
    onCompleted: () => {
      getData()
    }
  })


  const handleSetPage = (event, newPage) => {
    getData({
      url: `/users?role=MANAGER&page=${newPage - 1}&size=5`
    });
    setPage(newPage);
  };

  return (
    <div>
      {loading || isRemoveLoading ? <CircularProgress/> : data.list.map(user => <UserCard removeUser={removeUser} key={user.id} user={user}/>)}
      <Pagination
        page={page}
        count={data.total / 5}
        onChange={handleSetPage}
      />
    </div>
  );

};
export default Index;
