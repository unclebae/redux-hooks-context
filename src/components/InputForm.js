import React from "react";
import { useState } from "react";
import { click_main_action } from "layouts/MainLayoutRedux";
import { StateProvider, useStateValue } from "redux/StateContext";

const InputForm = () => {

	const [title, setTitle] = useState('');
    const [{ }, dispatch] = useStateValue();

    const onClickSetTitle = () => {
        dispatch(click_main_action(title));
        setTitle('');
    }

	return (
		<div>
			<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
			<button
				type="button"
				onClick={() => onClickSetTitle()}
			>
				클릭 
			</button>
		</div>
	);
};

export default InputForm;