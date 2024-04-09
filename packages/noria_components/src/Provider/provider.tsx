"use client"

import React, { ReactNode } from "react"

interface NoriaProviderProps {
  children: ReactNode
}

export default function NoriaProvider ({ children } : NoriaProviderProps) {

    return (
        <main>
           {/* {children} */}
        </main>
    )
}