import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

export default function Store({ children }) {
  const [items, setItems] = useState([
     {
      id: "2ad6b5e2-9c2b-4959-b740-9335c85eed74",
      title: "El principito",
      author: "Antoine de Saint-Exupéry",
      cover: "http://localhost:3000/img/cover01.jpg",
      intro: "",
      completed: false,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b76",
      title: "El hombre en busca de sentido",
      author: "Viktor Frankl",
      cover: "http://localhost:3000/img/cover05.jpg",
      intro: "",
      completed: false,
      review: "",
    },
    {
      id: "9942219d-eecc-42b5-a421-2d9b12736b72",
      title: "El increìble niño comelibros",
      author: "Oliver Jeffers",
      cover: "http://localhost:3000/img/cover03.jpg",
      intro: "",
      completed: false,
      review: "",
    },

   
  ]);

  function createItem(item) {
    const temp = [...items];

    temp.unshift(item);

    setItems([...temp]);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);

    return item;
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);

    const temp = [...items];

    temp[index] = { ...item };

    return true;
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
