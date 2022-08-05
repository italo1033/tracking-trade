import React from 'react'; // we need this to make JSX compile
import style from "../styles/Button.module.css";

type ButtonProps = {
  title: string,
}
export default function ButtonComponent(props:ButtonProps): JSX.Element {
    const {title}=props;
    return(
      <button className={style.buttonComponent}>{title}</button>
    );
  }