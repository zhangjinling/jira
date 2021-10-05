import React, { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import { List } from "./list";
import { SearchPannel } from "./search-pannel";
import { useHttp } from "utils/http";

export const ProgectListScreen = () => {
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp();
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 1000);
  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPannel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPannel>
      <List users={users} list={list}></List>
    </div>
  );
};
