import { useAuth } from "../../hooks/useAuth.ts";
import { useState } from "react";

export interface LoginProps {
    username: string;
    password: string;
}

export function login () {
    const [formData, setFormData] = useState<LoginProps>({
        username: "",
        password: "",
    })

    const{ signIn } = useAuth()
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                signIn(formData)
            }}>
                <input type="text" placeholder="Username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/>
                <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default login