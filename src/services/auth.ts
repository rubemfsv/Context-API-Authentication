interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'dsdfo43peopkrpekeprkpewk3e0kre0wkr03k0wekr032prlpd',
                user: {
                    name: 'Rubem',
                    email: 'rubemfsv15@gmail.com',
                }
            });
        }, 2000);
    });
}