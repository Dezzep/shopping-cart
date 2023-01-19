const getOrderTime = async (o_id) => {
  const request = await fetch(`http://localhost:3000/api/orderTime`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: new URLSearchParams({
      o_id: o_id,
    }),
  });
  const data = await request.json();

  // copy data and change key name to value

  return data;
};

export default getOrderTime;
