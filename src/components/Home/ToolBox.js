import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import Loading from '../Authentication/Loading';
import Tool from './Tool';

const ToolBox = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://limitless-island-64080.herokuapp.com/tools")
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    // console.log(data)
    const newTools = data.slice(data.length - 3, data.length)

    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                newTools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
            }


        </div>
    );
};

export default ToolBox;