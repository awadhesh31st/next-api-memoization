"use client";

import Card from "@/components/card";
import { UserProps } from "@/types/user";
import { quryClient } from "@/utils/fetch-data";
import React, { use, useState } from "react";

const Home = () => {
  const data = use(
    quryClient("users", () =>
      fetch("http://localhost:3000/api/users").then((res) => res.json())
    ) as Promise<UserProps[]>
  );

  const [selected, setSelected] = useState<UserProps>();

  const showSelectedUser =
    selected &&
    use(
      quryClient(["user", selected.id].join("-"), () =>
        fetch(`http://localhost:3000/api/users/${selected.id}`).then((res) =>
          res.json()
        )
      ) as Promise<UserProps>
    );

  return (
    <div className="cardContainer">
      {data.map((user, key) => {
        return <Card {...user} key={key} handleSelect={setSelected} />;
      })}
      {JSON.stringify(showSelectedUser)}
    </div>
  );
};

export default Home;
