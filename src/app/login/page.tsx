export default function LoginPage() {
    return (
        <form className="login-form">
            <div className="flex items-center gap-3 display flex-col">
                <h1 className="text-3xl font-bold">Login</h1>
                <label><b>Username: </b></label>
                <input type="text" placeholder="Enter your username" name="username" required />

                <label><b>Password: </b></label>
                <input type="password" placeholder="Enter your password" name="pass" required />

                <button type="submit">Login</button>
            </div>
        </form >
    )
}