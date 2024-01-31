export const getOrders = () => {
    return Promise.resolve({
      carts: [
        {
          id: 1,
          orderNumber: "ORD123456",
          orderDate: "2024-01-28T10:30:00",
          customerName: "John Doe",
          customerEmail: "john.doe@example.com",
          products: [
            {
              id: 59,
              title: "Spring and summer shoes",
              category: "Footwear",
              price: 20,
              quantity: 3,
              total: 60,
              discountPercentage: 8.71,
              discountedPrice: 55,
              thumbnail:
                "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
            },
            {
              id: 88,
              title: "TC Reusable Silicone Magic Washing Gloves",
              category: "Cleaning",
              price: 29,
              quantity: 2,
              total: 58,
              discountPercentage: 3.19,
              discountedPrice: 56,
              thumbnail:
                "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg",
            },
            // Add more products as needed
          ],
        },
        // Add more carts as needed
      ],
    });
  };
  
  export const getRevenue = () => {
    return Promise.resolve({
      carts: [
        // Add revenue data as needed
      ],
    });
  };
  
  export const getInventory = () => {
    return Promise.resolve({
      products: [
        {
          id: 1,
          title: "Product 1",
          category: "Electronics",
          price: 100,
          stock: 50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        },
        // Add more products as needed
      ],
    });
  };
  
  export const getCustomers = () => {
    return Promise.resolve({
      users: [
        {
          id: 1,
          name: "Alice Smith",
          email: "alice.smith@example.com",
          address: "123 Main St, Cityville",
          phone: "+1 123-456-7890",
        },
        // Add more customers as needed
      ],
    });
  };
  
  export const getComments = () => {
    return Promise.resolve({
      comments: [
        {
          id: 1,
          userId: 1,
          comment: "Great product!",
          date: "2024-01-28T12:45:00",
        },
        // Add more comments as needed
      ],
    });
  };
  