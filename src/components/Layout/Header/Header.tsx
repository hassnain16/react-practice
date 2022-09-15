import React from 'react';
interface HeaderInterface {
    text: string;
}
const HeaderAsFC: React.FC<HeaderInterface> = (HeaderInterface) => {

    return (
        <h2>{HeaderInterface.text}</h2>
    )
}

export default HeaderAsFC