import { useState } from 'react'
 
const RegistrationForm = () => {
    const [users, setUsers] = useState(
        { id: 1, firstName: "", lastName: "", email: "", password: "", mobile: "" }
    )
    const submitFormHandler = (event) => {
        event.preventDefault()
        console.log(users)
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUsers((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    return (
        <>
            <p>Hi, this is {users.firstName}</p>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Sign Up
                    </h1>

                    <form onSubmit={submitFormHandler} className="space-y-5">

                        <div>
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                First Name
                            </label>
                            <input
                                value={users.firstName}
                                onChange={handleInputChange}
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter First Name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Last Name
                            </label>
                            <input
                                value={users.lastName}
                                onChange={handleInputChange}
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter Last Name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                value={users.email}
                                onChange={handleInputChange}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <input
                                value={users.password}
                                onChange={handleInputChange}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="mobile"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Mobile Number
                            </label>
                            <input
                                value={users.mobile}
                                onChange={handleInputChange}
                                type="tel"
                                id="mobile"
                                name="mobile"
                                placeholder="Enter Mobile Number"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Sign Up
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm
