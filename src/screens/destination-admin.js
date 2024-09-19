import React, { useState, useEffect } from 'react';
import axios from "axios";

const DestinationAdminPage = () => {

    const [destinationForm, uploadDestinationForm] = useState({
        name: "",
        image: "",
        count: "",
        location: ""
    });
    const [isLoading, setLoading] = useState(false);

    const [destinationList, setDestinationList] = useState([]);

    useEffect(() => {
        loadAllDestination();
    }, []);

    const uploadImage = (event) => {
        //console.log(event.target.files);
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);

        reader.onload = () => {
            console.log(reader.result);
            uploadDestinationForm({ ...destinationForm, [event.target.name]: reader.result })
        }
    }

    const handleInput = (event) => {
        uploadDestinationForm({ ...destinationForm, [event.target.name]: event.target.value })
    }

    const uploadDestination = () => {
        // console.log(destinationForm);
        setLoading(true);
        const url = "https://travelix-backend-august.onrender.com/api/destinaiton/add";
        axios.post(url, destinationForm)
            .then((resposne) => {
                setLoading(false);
                alert(resposne.data);
                loadAllDestination();
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            })
    }

    const loadAllDestination = () => {
        const url = "https://travelix-backend-august.onrender.com/api/destination/load";

        axios.get(url)
            .then((response) => {
                setDestinationList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteDestination = (id) => {
        const url = "https://travelix-backend-august.onrender.com/api/destination/delete/" + id;

        axios.delete(url)
            .then((response) => {
                alert(response.data);
                loadAllDestination();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Destination Admin</h2>
            <div>
                <label>Enter Destination Name</label>
                <input type='text' placeholder='Destination Name' onChange={handleInput} name='name' />
            </div>
            <div>
                <label>Upload Destination Image</label>
                <input type='file' onChange={uploadImage} name='image' />
            </div>
            <div>
                <label>Enter Destination Count</label>
                <input type='text' placeholder='Destination Count' onChange={handleInput} name='count' />
            </div>
            <div>
                <label>Enter Destination Location</label>
                <input type='text' placeholder='Destination Location' name="location" onChange={handleInput} />
            </div>
            <div>
                <button onClick={() => uploadDestination()}>{isLoading ? "Loading..." : "Upload Destination"}</button>
                {isLoading && <img src={require("../images/loader.gif")} width="50" />}
            </div>
            <div>
                <table className='destination-table '>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location </th>
                            <th>Image</th>
                            <th>Count</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            destinationList.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.location}</td>
                                        <td>
                                            <img src={value.image} width={100} />
                                        </td>
                                        <td>{value.count}</td>
                                        <td>
                                            <button onClick={() => deleteDestination(value.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DestinationAdminPage;