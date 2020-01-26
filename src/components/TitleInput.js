import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import setTestTitle from '../redux/actions/title';

export default function TitleInput(params) {
    const testTitle = useSelector(state => state.testTitle);
    const [input, setInput] = useState(testTitle);
    const dispatch = useDispatch();

    return (
        <>
            <h4>{testTitle}</h4>
            <InputGroup>
                <Input onChange={e => setInput(e.target.value)} placeholder="Enter test title..." />
                <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={() => dispatch(setTestTitle(input))}>Изпрати!</Button>
                </InputGroupAddon>
            </InputGroup>
        </>
    )
}
