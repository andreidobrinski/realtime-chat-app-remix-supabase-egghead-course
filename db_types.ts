export type Json =
  | string
  | number
  | boolean
  | null
  | { [key:string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          id: string
          created_at: string
          content: string
        }
        Insert: {
          id?: string
          created_at?: string
          content: string
        }
        Update: {
          id?: string
          created_at?: string
          content?: string
        }
      }
    }
  }
}