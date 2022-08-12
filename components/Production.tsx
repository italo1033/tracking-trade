import React from 'react'; // we need this to make JSX compile
import style from "../styles/Button.module.css";

type Product = {
  title: string,
  marca: string,
  img: string,
  rpm: string
}
export default function Product(props:Product): JSX.Element {
    const {title,marca,img,rpm}=props;
    return(
        <div>
            <h4>{title}</h4>
            <h5>{marca}</h5>
            <h5>{rpm}</h5>
            <img url={img} style={{width:20, height:20}} />
        </div>
    );
  }