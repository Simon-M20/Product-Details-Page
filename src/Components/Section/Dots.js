import React, { useState } from "react";

function Dots({ index }) {
    const [focus, setfocus] = useState(index === 0);

    return (
        <button onClick={() => setfocus(!focus)}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'>
                {focus ? (
                    <circle cx='7' cy='7' r='7' fill='#E73C17' />
                ) : (
                    <circle cx='7' cy='7' r='7' fill='#F4F5F8' />
                )}
            </svg>
        </button>
    );
}

export default Dots;
