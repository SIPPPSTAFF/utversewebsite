export const setUserStorage = (val) => {
  sessionStorage.setItem("user", JSON.stringify(val.user));
  sessionStorage.setItem("aplikasi", JSON.stringify(val.aplikasi));
  sessionStorage.setItem("token", "Bearer " + val.token);
};

export const getUserStorage = () => {
  const user = sessionStorage.getItem("user");
  const aplikasi = sessionStorage.getItem("aplikasi");
  const token = sessionStorage.getItem("token");
  return { user, token, aplikasi };
};
