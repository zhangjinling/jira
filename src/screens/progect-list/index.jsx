import React,{ useEffect, useState } from "react";
import { cleanObject } from "utils";
import { List } from "./list";
import { SearchPannel } from "./search-pannel";
import * as qs from "qs"

const apiUrl = process.env.REACT_APP_API_URL

export const ProgectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
      name: "",
      personId: "",
  });

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then((response) => {
      return response.json()
    }).then((data)=>{
      console.log('data,',data);
      setList(data)
    });
  }, [param]);

  useEffect(() => {
    fetch( `${apiUrl}/users`).then((response) => {
      return response.json()
    }).then((data)=>{
      console.log('data,',data);
      setUsers(data)
    });
  }, [])
  return (
    <div>
      <SearchPannel users={users} param={param} setParam={setParam}></SearchPannel>
      <List users={users}  list={list}></List>
    </div>
  );
};
