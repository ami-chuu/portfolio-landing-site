import { createContext } from "react";
import { type PageData } from "../types/PageData";
import PageDataJson from "../data/home.json";

console.log(PageDataJson);
const DataContext = createContext<PageData>(PageDataJson as PageData);

export default DataContext;