import axios from "axios";
import { DashboardItems } from "../domain/Dashboard";

export const GetDashboardItems = async (): Promise<DashboardItems[]> => {
    const data = await axios.get("https://c775-190-131-48-192.ngrok-free.app/api/Dashboard/get-initial", {headers: {
        "ngrok-skip-browser-warning":"asdads"
    }});
    return data.data as DashboardItems[];
}