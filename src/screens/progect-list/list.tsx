import { Table } from "antd";
import React from "react";
import { User } from "./search-pannel";

interface Progect {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ListProps {
  list: Progect[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, progect) {
            return (
              <span>
                {users.find((user) => user.id === progect.personId)?.name}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    ></Table>
  );
};
