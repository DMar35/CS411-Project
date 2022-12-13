const key = "user";

const setUser = (u: string) => {
  localStorage.setItem(key, u);
};

const getUser = () => {
  const user = localStorage.getItem(key) || "";
  return user;
};

export { setUser, getUser };
