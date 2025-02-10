import React from 'react'
import Input from '../input/Input'
import Button from '../button/Button'

const VerifyMailComponent = ({ onChangeOtp, onSubmitOtp, goToPrevPage }) => {
    return (
        <>
            <Button text={"back"} onClick={goToPrevPage} />
            <form onSubmit={onSubmitOtp}>
                <Input type="number" placeholder='enter otp' onChange={onChangeOtp} />
                <button>send</button>
            </form>

        </>
    )
}

export default VerifyMailComponent