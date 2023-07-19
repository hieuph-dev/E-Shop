import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          // đơn hàng đang được xử lí
          <h1 className="text-[20px]">Your Order is processing in shop.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          // đơn hàng đang trên đường giao cho đơn vị vận chuyển
          <h1 className="text-[20px]">
            Your Order is on the way for delivery partner.
          </h1>
        ) : data?.status === "Shipping" ? (
          // đơn hàng đã được đơn vị vận chuyển chuyển đi
          <h1 className="text-[20px]">
            Your Order is on the way with our delivery partner.
          </h1>
        ) : data?.status === "Received" ? (
          // đơn hàng đang ở trong thành phố, nhân viên giao hàng sẽ giao cho bạn
          <h1 className="text-[20px]">
            Your Order is in your city. Our Delivery man will deliver it.
          </h1>
        ) : data?.status === "On the way" ? (
          // đang trên đường giao
          <h1 className="text-[20px]">
            Our Delivery man is going to deliver your order.
          </h1>
        ) : data?.status === "Delivered" ? (
          // đã vận chuyển
          <h1 className="text-[20px]">Your order is delivered!</h1>
        ) : data?.status === "Processing refund" ? (
          // đơn hoàn đang được xử lý
          <h1 className="text-[20px]">Your refund is processing!</h1>
        ) : data?.status === "Refund Success" ? (
          // hoàn tiền thành công
          <h1 className="text-[20px]">Your Refund is success!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
