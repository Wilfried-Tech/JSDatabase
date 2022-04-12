import {fullSupportDatabases} from "@src/utils"

export const IDB_SUPPORT = fullSupportDatabases()
export const IS_WORKER = typeof (self as any).alert === "undefined"
