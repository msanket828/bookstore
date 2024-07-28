export async function login(authDetails) {
  const requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authDetails),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/login`,
    requestData
  );
  console.log(response);
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
}

export async function register(authDetails) {
  const response = await fetch(`${process.env.REACT_APP_HOST}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(authDetails),
  });
  const data = await response.json();
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { message: response.statusText, status: response.status };
  }
  console.log("auth: " + JSON.stringify(data));
  return data;
}

export const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
};
