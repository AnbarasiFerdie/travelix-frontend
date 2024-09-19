import React, { useState,useEffect} from 'react';
import axios from 'axios';

const HotelAdminPage = () => {

    const [hotelForm, updateHotelForm] = useState({
        "name": "",
        "location": "",
        "price": "",
        "image": "",
        "destination": ""
    });
    const [isLoading, setLoading] = useState(false);

    const [hotelList, setHotelList] = useState([]);

    useEffect(() => {
        loadAllHotel();
    }, []);

    const handleInput = (event) => {
        updateHotelForm({ ...hotelForm, [event.target.name]: event.target.value })
    }

    const uploadImage = (event) => {
        const file = event.target.files[0];

        if (file !== null || file !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                updateHotelForm({ ...hotelForm, [event.target.name]: reader.result })
            }
        }
    }

    const submitHotelInfo = () => {
        // console.log(hotelForm);
        setLoading(true);
        const url = "https://travelix-backend-august.onrender.com/api/hotel/add";

        axios.post(url, hotelForm)
            .then((resposne) => {
                setLoading(false);
                alert(resposne.data);
                loadAllHotel();
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            })
    }

    const loadAllHotel = () => {
        const url = "https://travelix-backend-august.onrender.com/api/hotel/load";

        axios.get(url)
            .then((response) => {
                setHotelList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteHotel = (id) => {
        const url = "https://travelix-backend-august.onrender.com/api/hotel/delete/" + id;

        axios.delete(url)
            .then((response) => {
                alert(response.data);
                loadAllHotel();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Add New Hotel Record</h2>
            <div>
                <label>Enter Hotel Name</label>
                <input type="text" placeholder='Enter Hotel Name' name='name' onChange={handleInput} />
            </div>
            <div>
                <label>Enter Hotel Location</label>
                <input type="text" placeholder='Enter Hotel Location' name='location' onChange={handleInput} />
            </div>
            <div>
                <label>Enter Hotel Price</label>
                <input type="text" placeholder='Enter Hotel Price' name='price' onChange={handleInput} />
            </div>
            <div>
                <label>Upload Hotel Image</label>
                <input type="file" accept=".jpg, .png, .jpeg" name='image' onChange={uploadImage} />
            </div>
            <div>
                <label>Enter Hotel Destination</label>
                <input type="text" placeholder='Enter Hotel Destination' name='destination' onChange={handleInput} />
            </div>
            <div>
                <button onClick={() => submitHotelInfo()}>{isLoading ? "Loading..." : "Submit Hotel Information"}</button>
                {isLoading && <img src={require("../images/loader.gif")} width="50" />}
            </div>


            <div>
                <table className='destination-table '>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location </th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Destination</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hotelList.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.location}</td>
                                        <td>{value.price}</td>
                                        <td>
                                            <img src={value.image} width={100} />
                                        </td>
                                        <td>{value.destination}</td>
                                        <td>
                                        <button onClick={() => deleteHotel(value.id)}>Delete</button>
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

export default HotelAdminPage;