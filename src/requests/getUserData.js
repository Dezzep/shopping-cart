const userData = async (email) => {
  const request = await fetch(`http://localhost:3000/api/getAccount`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: new URLSearchParams({
      email: email,
    }),
  });
  const data = await request.json();
  return data;
};

export default userData;
