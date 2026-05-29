
import { useState } from "react"

interface Props {
    items: string[]
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup( { items, heading, onSelectItem }: Props) {

    const message = items.length === 0 && heading + " is empty";
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            {message}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li
                        className= { selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            items[index] && onSelectItem(items[index]);
                        }}>
                        {item}
                    </li>)}
            </ul>
        </>
    )
}

export default ListGroup