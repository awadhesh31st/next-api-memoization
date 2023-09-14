import { UserProps } from "@/types/user";
import Image from "next/image";
import React from "react";

import style from "./card.module.css";

interface CardProps extends UserProps {
  handleSelect?: (user: UserProps) => void;
}

const Card: React.FC<CardProps> = ({
  name = "",
  image = "",
  username = "",
  id,
  handleSelect = () => {},
}) => {
  return (
    <section
      className={style.section}
      onClick={() => handleSelect({ name, username, id })}
    >
      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image src={image} alt={username} width={50} height={50} />
        </div>
        <div className={style.contentContainer}>
          <span className={style.username}>{username}</span>
          <span className={style.name}>{name}</span>
        </div>
      </div>
    </section>
  );
};

export default Card;
