import React from 'react'
import Card from './components/card'

const App = () => {
  const orders = [
    {
      id: 1,
      image: "https://pngimg.com/uploads/jacket/jacket_PNG8053.png",
      title: "Tape Winter Coat",
      size: "M",
      price: "235",
      quantity: 2,
      total: "235",
      active: true,
    },
    {
      id: 2,
      image: "https://pngimg.com/uploads/jacket/jacket_PNG8053.png",
      title: "Stripe Winter Coat",
      size: "M",
      price: "368",
      quantity: 2,
      total: "736",
      active: false,
    },
    {
  id: 3,
  image: "https://pngimg.com/uploads/jacket/jacket_PNG8038.png",
  title: "Classic Black Jacket",
  size: "L",
  price: "199",
  quantity: 1,
  total: "199",
  active: true,
},
{
  id: 4,
  image: "https://pngimg.com/uploads/jacket/jacket_PNG8045.png",
  title: "Denim Winter Coat",
  size: "M",
  price: "289",
  quantity: 2,
  total: "578",
  active: false,
},
{
  id: 5,
  image: "https://pngimg.com/uploads/jacket/jacket_PNG8062.png",
  title: "Hooded Puffer Jacket",
  size: "XL",
  price: "320",
  quantity: 1,
  total: "320",
  active: true,
},
{
  id: 6,
  image: "https://pngimg.com/uploads/jacket/jacket_PNG8070.png",
  title: "Slim Fit Leather Coat",
  size: "M",
  price: "450",
  quantity: 1,
  total: "450",
  active: false,
},
{
  id: 7,
  image: "https://pngimg.com/uploads/jacket/jacket_PNG8081.png",
  title: "Casual Bomber Jacket",
  size: "S",
  price: "180",
  quantity: 3,
  total: "540",
  active: true,
}
  ];

  return (
    <div>
      {orders.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          size={item.size}
          price={item.price}
          quantity={item.quantity}
          total={item.total}
          active={item.active}
        />
      ))}
    </div>
  );
};

export default App;