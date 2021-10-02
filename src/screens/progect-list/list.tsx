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
    <table>
      <thead>
        <tr>
          <td>名称</td>
          <td>负责人</td>
        </tr>
      </thead>
      <tbody>
        {list.map((progect) => (
          <tr key={progect.id}>
            <td>{progect.name}</td>
            <td>{users.find((user) => user.id === progect.personId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
