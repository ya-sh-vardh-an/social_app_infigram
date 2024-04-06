'use server'

import { revalidatePath } from "next/cache"

const clearCachesByServerAction = async (path: string, type: "layout" | "page" | undefined) => {
  try {
    if (path) revalidatePath(path, type)
    else {
      revalidatePath("/")
      revalidatePath("/profile/[id]", 'page')
    }
  } catch (error) {
    console.error('clearCachesByServerAction=> ', error)
  }
}


export default clearCachesByServerAction;