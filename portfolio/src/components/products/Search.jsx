import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

const Search = ({ searchHandler }) => {

    const [inputVal, setInputVal] = useState("");

    const [deboundecVal, setDeouncedVal] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDeouncedVal(inputVal);
        }, 800);
        return () => clearTimeout(timer);
    }, [inputVal]);


    useEffect(() => {
        if (deboundecVal === "") return;
        searchHandler(deboundecVal);
    }, [deboundecVal]);


    return (
        <Field orientation="horizontal">
            <Input
                onChange={(e) => setInputVal(e.target.value)}
                type="search"
                placeholder="Search..."
                value={inputVal}
            />
        </Field>
    )
}

export default Search;

