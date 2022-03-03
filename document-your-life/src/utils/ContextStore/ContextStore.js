/* eslint-disable react/prop-types */

import React from 'react'

export const StoreContext = React.createContext(null)

export default function StoreProvider({ children }) {
    // store place
    const [sharing, setSharing] = React.useState([])

    const [isConnected, setIsConnected] = React.useState()

//  To call the context:
// -import: import { StoreContext } from 'relativeRoute/ContextStore'
// -useIt: const { ConnectionStatus } = React.useContext(StoreContext)
    const store = {
        sharing: [sharing, setSharing],

        ConnectionStatus: [isConnected, setIsConnected],
    }   

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}