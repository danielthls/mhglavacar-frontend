import { useState } from 'react';
import './styles.css'

type Props = {
    onSearch: Function;
}

export default function SearchBar({ onSearch }: Props) {
    const [text, setText] = useState<string>("")


    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(text);
    }

    function handleResetClick() {
        setText("")
        onSearch(text)
    }

    function handleChange(event: any) {
        setText(event.target.value);
        //onSearch(text)
    }

    return (
        <form className="mhg-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input
                type="text"
                value={text}
                placeholder="Nome do produto"
                onChange={handleChange} />
            <button onClick={handleResetClick}>🗙</button>
        </form>
    );


}