"use server"

const LOCAL_ENDPOINT = "http://localhost:3000/api"
const API_ENDPOINT =
  "https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060"

import { Contacts } from "@/types/contacts"

export async function getContactsFromAPIData(): Promise<Contacts> {
  //@ts-ignore
  const data = await fetch(process.env.NEXT_PUBLIC_LOCAL_API_URL)
    .then((res) => res.json())
    .then((data: Contacts) => data)

  return data
}
