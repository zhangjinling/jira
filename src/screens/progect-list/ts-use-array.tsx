import React from "react";
import { useArray } from "utils";
interface person {
  name: string;
  age: number;
  sex: string;
}
export const TsuseArray = () => {
  const persons: person[] = [
    { name: "1", age: 11, sex: "nan" },
    { name: "2", age: 12, sex: "nan" },
    { name: "3", age: 13, sex: "nv" },
  ];
  const { initData, add, removeIndex, clearArr } = useArray(persons);
  console.log("data：", initData);

  return (
    <div>
      <div>
        <button
          onClick={() =>
            add({ name: Math.random().toString(), age: 11, sex: "nan" })
          }
        >
          add
        </button>
        <button onClick={() => removeIndex(0)}>remove</button>
        <button onClick={() => clearArr()}>clear</button>
      </div>
      <ul>
        {initData.map((item) => (
          <li key={item.name}>
            {item.name}-{item.age}={item.sex}
          </li>
        ))}
      </ul>
    </div>
  );
};
