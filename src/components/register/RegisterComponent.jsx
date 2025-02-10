import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";


const RegisterComponent = ({
    register,
    onChangeFullName,
    onChangeUserName,
    onChangeEmail,
    onChangeConfrimPassword,
    onChangePassword,
    onChangePhoneNumber,
    goToBackPage
}) => {


    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form className="space-y-4 flex flex-col w-1/3 bg-blue-100 p-4 rounded-lg" onSubmit={register}>
                <Input
                    type="text"
                    name="fullName"
                    placeholder="fullName"
                    required={true}
                    onChange={onChangeFullName}
                />
                <Input
                    type="text"
                    name="userName"
                    placeholder="Username"
                    required={true}
                    onChange={onChangeUserName}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                    onChange={onChangeEmail}
                />
                    <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    required={true}
                    onChange={onChangePhoneNumber}
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={onChangeConfrimPassword}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    onChange={onChangePassword}
                />
                <Button type="submit" className="w-full" text={"Register"} />
            </form>
            <Button text={"nextPage"} onClick={goToBackPage}/> 
        </div>
        </div>
    );
};

export default RegisterComponent;