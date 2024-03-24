import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = () => {
  const ContextValue = {
    food_list,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.chhokra}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
