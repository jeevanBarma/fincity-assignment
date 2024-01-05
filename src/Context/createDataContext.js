import React, { useReducer } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducer, action, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const boundActios = {};

    for (let key in action) {
      boundActios[key] = action[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActios }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
