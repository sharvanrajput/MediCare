
const Button = ({ btntext, islight }) => {

    if (islight) {

        return (
            <button className="text-blue-600 bg-white shadow px-5 py-2 rounded-full">{btntext}</button>
        )
    } else {
        return (
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full">{btntext}</button>
        )

    }



}

export default Button