import { config } from 'dotenv'

config()

export const MODE_DEV = process.env.REACT_APP_MODE_DEV

export const BASE_API = process.env.REACT_APP_BASE_API
