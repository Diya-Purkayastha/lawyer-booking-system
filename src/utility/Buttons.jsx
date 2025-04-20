import React from 'react';


const Buttons = ({onclick, name}) => {
    return (
        <div>
            <button onClick={onclick}  className="cursor-pointer w-full py-2 text-xl text-center text-white transition-colors duration-300 hover:bg-green-400 rounded-full bg-[#0EA106] ease px-8 md:w-auto">
            {name}
            </button>
        </div>
    );
};

export default Buttons;