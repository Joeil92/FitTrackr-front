import { LoginInputs } from "../../pages/login/form/loginForm";

export async function auth(inputs: LoginInputs): Promise<string> {
    const url = `http://localhost:8000/auth`;

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(inputs)
    }

    const res = await fetch(url, options);
    const data = await res.json();

    if(!res.ok) throw new Error(data.message);

    return data;
}