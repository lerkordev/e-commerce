"use client"

import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }){

    const data = {}

    return <AuthContext.Provider value={data}>
        <>Este es el context</>{ children }</AuthContext.Provider>;
}