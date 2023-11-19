const orders = [
  {
    "order_id": "1001",
    "customer_name": "Alice Johnson",
    "email": "alice@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea2f", // Laptop
    "product_name": "Laptop",
    "quantity": 2,
    "price": 800,
    "order_date": "2023-01-10"
  },
  {
    "order_id": "1002",
    "customer_name": "Bob Smith",
    "email": "bob@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea30", // Smartphone
    "product_name": "Smartphone",
    "quantity": 1,
    "price": 500,
    "order_date": "2023-01-15"
  },
  {
    "order_id": "1003",
    "customer_name": "Charlie Brown",
    "email": "charlie@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea31", // Headphones
    "product_name": "Headphones",
    "quantity": 3,
    "price": 50,
    "order_date": "2023-01-20"
  },
  {
    "order_id": "1004",
    "customer_name": "David Lee",
    "email": "david@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea32", // Tablet
    "product_name": "Tablet",
    "quantity": 1,
    "price": 300,
    "order_date": "2023-02-05"
  },
  {
    "order_id": "1005",
    "customer_name": "Eve Wilson",
    "email": "eve@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea33", // Camera
    "product_name": "Camera",
    "quantity": 2,
    "price": 400,
    "order_date": "2023-02-10"
  },
  {
    "order_id": "1006",
    "customer_name": "Frank Brown",
    "email": "frank@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea34", // T-Shirt
    "product_name": "T-Shirt",
    "quantity": 5,
    "price": 20,
    "order_date": "2023-02-15"
  },
  {
    "order_id": "1007",
    "customer_name": "Grace Smith",
    "email": "grace@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea35", // Jeans
    "product_name": "Jeans",
    "quantity": 3,
    "price": 45,
    "order_date": "2023-02-20"
  },
  {
    "order_id": "1008",
    "customer_name": "Hannah Johnson",
    "email": "hannah@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea36", // Sneakers
    "product_name": "Sneakers",
    "quantity": 2,
    "price": 60,
    "order_date": "2023-02-25"
  },
  {
    "order_id": "1009",
    "customer_name": "Isabella Lee",
    "email": "isabella@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea37", // Dress
    "product_name": "Dress",
    "quantity": 4,
    "price": 80,
    "order_date": "2023-03-02"
  },
  {
    "order_id": "1010",
    "customer_name": "Jack Wilson",
    "email": "jack@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea38", // Socks
    "product_name": "Socks",
    "quantity": 10,
    "price": 5,
    "order_date": "2023-03-07"
  },
  {
    "order_id": "1011",
    "customer_name": "Liam Johnson",
    "email": "liam@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea39", // Coffee Maker
    "product_name": "Coffee Maker",
    "quantity": 2,
    "price": 60,
    "order_date": "2023-03-12"
  },
  {
    "order_id": "1012",
    "customer_name": "Mia Smith",
    "email": "mia@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea3a", // Cookware Set
    "product_name": "Cookware Set",
    "quantity": 1,
    "price": 120,
    "order_date": "2023-03-17"
  },
  {
    "order_id": "1013",
    "customer_name": "Noah Brown",
    "email": "noah@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea3b", // Vacuum Cleaner
    "product_name": "Vacuum Cleaner",
    "quantity": 2,
    "price": 150,
    "order_date": "2023-03-22"
  },
  {
    "order_id": "1014",
    "customer_name": "Olivia Lee",
    "email": "olivia@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea3c", // Cushion Covers
    "product_name": "Cushion Covers",
    "quantity": 5,
    "price": 10,
    "order_date": "2023-03-27"
  },
  {
    "order_id": "1015",
    "customer_name": "William Wilson",
    "email": "william@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea3d", // Toaster
    "product_name": "Toaster",
    "quantity": 3,
    "price": 30,
    "order_date": "2023-04-01"
  },
  {
    "order_id": "1016",
    "customer_name": "Sophia Johnson",
    "email": "sophia@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea3e", // Blender
    "product_name": "Blender",
    "quantity": 2,
    "price": 50,
    "order_date": "2023-04-06"
  },
  {
    "order_id": "1017",
    "customer_name": "Benjamin Smith",
    "email": "benjamin@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea3f", // Microwave
    "product_name": "Microwave",
    "quantity": 1,
    "price": 80,
    "order_date": "2023-04-11"
  },
  {
    "order_id": "1018",
    "customer_name": "Charlotte Brown",
    "email": "charlotte@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea40", // Refrigerator
    "product_name": "Refrigerator",
    "quantity": 1,
    "price": 400,
    "order_date": "2023-04-16"
  },
  {
    "order_id": "1019",
    "customer_name": "Daniel Lee",
    "email": "daniel@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea41", // Washing Machine
    "product_name": "Washing Machine",
    "quantity": 2,
    "price": 300,
    "order_date": "2023-04-21"
  },
  {
    "order_id": "1020",
    "customer_name": "Emily Wilson",
    "email": "emily@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea42", // Dishwasher
    "product_name": "Dishwasher",
    "quantity": 1,
    "price": 250,
    "order_date": "2023-04-26"
  },
  {
    "order_id": "1021",
    "customer_name": "Michael Johnson",
    "email": "michael@example.com",
    "product_id": "6557b2a8eb5b6addc8e4ea43", // Air Conditioner
    "product_name": "Air Conditioner",
    "quantity": 1,
    "price": 700,
    "order_date": "2023-05-01"
  }
]


module.exports = orders