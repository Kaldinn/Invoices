import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
    const [dataFromServer, setDataFromServer] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/add_invoice');
                const data = response.data;
                setDataFromServer(data);
                console.log(dataFromServer)
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>{dataFromServer.daniel}</div>
    );
}

export default FetchData;
