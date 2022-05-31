import { Col, Image, Popover, Row } from "antd";
import { Heart } from "phosphor-react";
import React from "react";
import s from "./styles.module.scss";

export const ProductCardList = (props) => {
  const data = props.data;

  return (
    <Row align="start" className={s.box__product} gutter={[0, 0]}>
      <Col span={6} className={s.box__product__image}>
        <Image src={data.image} alt="" />
      </Col>
      <Col span={18} className={s.box__product__content} push={1}>
        <Popover title={data.title} trigger="hover">
          <p className={s.box__product__title}>{data.title}</p>
        </Popover>
        <p className={s.box__product__desc}>{data.desc}</p>
        <p className={s.box__product__voucher}>20% Off</p>
        <p className={s.box__product__oldprice}>
          {data.oldPrice}
          <hr className={s.line} />
        </p>
        <p className={s.box__product__price}>{data.newPrice}</p>
        <div className={s.btn}>
          <Popover title="Add to wishlist" trigger="hover">
            <Heart color="#a94242" weight="thin" />
          </Popover>
          <button className={s.btnCart}>Add to cart</button>
        </div>
      </Col>
    </Row>
  );
};
