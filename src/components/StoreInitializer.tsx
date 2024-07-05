"use client"
import { useContactStore } from "@/db/storage"
import { Contacts } from "@/types/contacts"
import { useEffect, useState } from "react"

interface StoreInitializerProps {
  data: Contacts
  children: React.ReactNode
}

export default function StoreInitializer({
  data,
  children,
}: StoreInitializerProps) {
  const [hydrated, setHydrated] = useState<boolean>(false)

  const { loaded, setLoaded, initializeStore } = useContactStore()

  useEffect(() => {
    setHydrated(true) // Hydrate our ContactStore to use it only when this have the right values
  }, [])

  if (loaded === false && hydrated) {
    // Populate the ContactStore with the API data when user first load the page
    initializeStore(data)
    setLoaded(true)
  }

  if (hydrated) {
    return children
  }
}
