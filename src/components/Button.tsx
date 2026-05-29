import { ReactNode, useState } from "react"

interface Props {
    children: ReactNode
    onButtonClicked: (state: number) => void
}

const Button = ({ children, onButtonClicked }: Props) => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={
                () => {
                    handleClick()
                    onButtonClicked(count)
                }
            }>
            {children}
        </button>
    )
}

export default Button
