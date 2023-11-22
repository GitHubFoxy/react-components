import { ChangeEvent, useState } from "react"

export default function Dropdown()
{
const [isDark, setIsDark] = useState(false)
const [value, setValue] = useState('null')
const selectChanged = (event: ChangeEvent<HTMLSelectElement>) => 
{
        setValue(event.target.value);
}

return (
<>
    <div className={`transition p-4 flex flex-col w-[14rem] gap-2 border border-black ${isDark ? "bg-zinc-600" : ''}`}>
        <select className={`transition rounded-md border ${isDark ? 'bg-zinc-400 text-white' : 'text-black'}`} defaultValue={value} onChange={selectChanged}>
            <option disabled value={"null"}>Choose an option</option>
            <option value="value 1">value 1</option>
            <option value="value 2">value 2</option>
            <option value="value 3">value 3</option>
            <option value="value 4">value 4</option>
        </select>
        <button 
            className={`transition p-1 rounded-md ${isDark ? 'dark:bg-zinc-700 text-white' : 'bg-zinc-200 text-black'}`}
            onClick={() => {setIsDark(!isDark)}}>Toggle colors</button>
        <p className={`transition ${isDark ? 'text-white': 'text-black'}`}>
            State is {isDark ? 'dark' : 'light'}, {value ? value : 'null'}
        </p>
    </div>
</>
)
}