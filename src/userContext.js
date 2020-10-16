import React from 'react';

const MainContext =React.createContext("default Context")

const MainProvider=MainContext.Provider
const MainConsumer=MainContext.Consumer

export {MainProvider, MainConsumer}
export default MainContext