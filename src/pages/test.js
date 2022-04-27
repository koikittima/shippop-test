import React from 'react'

function test() {

    const isName = (firstName, lastName) => {
        if (firstName === "Shippop") {
            return `Best Online Shipping Platform`
        } else {
            return `Hello Shippop, My name is ${firstName} ${lastName}`
        }
    }

    console.log(isName("Shippop", "koi"));

    return (
        <div>test</div>
    )
}

export default test