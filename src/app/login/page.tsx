export default function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <form className="flex flex-col m-5 p-4 border border-gray-400 bg-white w-[32rem] h-[32rem] shadow-lg rounded-lg">
                <div className="flex p-8 pl-6 gap-3 display flex-col">
                    <h1 className="text-3xl p-5 font-bold">Login</h1>
                    <label><b>Username: </b></label>
                    <input className="flex p-5" type="text" placeholder="Enter your username" name="username" required />

                    <label><b>Password: </b></label>
                    <input className="flex p-5" type="password" placeholder="Enter your password" name="pass" required />

                    <button className="mt-10 px-6 py-3 bg-orange-400 text-white rounded-lg" type="submit">Login</button>
                </div>
            </form >
        </div>
    )
}