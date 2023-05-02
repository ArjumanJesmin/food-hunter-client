/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

function ChefGroup() {

    const [allShef, setAllShef] = useState('');

    useEffect(() => {
        fetch('https://shef-sarver-side-arjumanjesmin.vercel.app/allData')
        .then(res=> res.json())
        .then(data=> setAllShef(data))
    }, [])

    return (
        <div>
            <h2>{allShef.length}</h2>
        </div>
    );
}

export default ChefGroup;