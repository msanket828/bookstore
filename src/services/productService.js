export const getProductList = async (searchParams) => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products?name_like=${searchParams || ""}`
  );
  if (!response.ok) {
    const errorMessage = {
      message: response.statusText,
      status: response.status,
    };
    throw errorMessage;
  }
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products/${id}`
  );
  if (!response.ok) {
    const errorMessage = {
      message: response.statusText,
      status: response.status,
    };
    throw errorMessage;
  }
  const data = await response.json();
  return data;
};

export const getFeaturedProduct = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/featured_products`
  );
  if (!response.ok) {
    const errorMessage = {
      message: response.statusText,
      status: response.status,
    };
    throw errorMessage;
  }
  const data = await response.json();
  return data;
};
