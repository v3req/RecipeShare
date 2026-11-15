import { useNavigate } from "react-router";
import { logout } from "../../api/auth-api";

export default function Logout() {
const navigate = useNavigate()

    logout()
    
}
    