const getSession = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token, cbid };
};
export const getUser = async () => {
  const { token, cbid } = getSession();
  const requestData = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${cbid}`,
    requestData
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
};

export const getUserOrders = async () => {
  const { token, cbid } = getSession();
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
};

export const createOrder = async (cartList, total, user) => {
  const { token, cbid } = getSession();
  const order = {
    cartList,
    amount_paid: total,
    qty: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
};
