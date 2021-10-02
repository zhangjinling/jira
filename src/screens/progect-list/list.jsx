import React from "react";
export const List = ({list, users}) => {

  return <table>
      <thead>
          <tr>
              <td>名称</td>
              <td>负责人</td>
          </tr>
      </thead>
      <tbody>
        {
            list.map(progect => 
            <tr key={progect.id}>
                <td>{progect.name}</td>
                <td>{users.find(user => user.id === progect.personId)?.name}</td>
            </tr>
            )
        }
      </tbody>
    </table>;
};
