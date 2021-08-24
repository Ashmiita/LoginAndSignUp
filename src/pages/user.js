import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from '../component/table';

function User() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const getData = await axios.get(
                'http://localhost:3001/signup/read'
            );
            setData(getData.data.readData);
        };
        fetchdata();
    }, []);
    return <Table data={data}></Table>;
}

export default User;
