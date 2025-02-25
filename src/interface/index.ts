import { Products } from "../api/types/productTypes";

export interface rentDaysInterface {
  id: number;
  text: string;
}

export interface getProducts {
  loading: "idle" | "loading" | "success" | "failed";
  success: boolean;
  error: string | null;
  data: Products[];
  execute: () => Promise<void>;
}
