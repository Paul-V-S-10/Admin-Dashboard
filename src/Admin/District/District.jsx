import React, { useState } from 'react';
import './District.css';
import { FaTimes } from 'react-icons/fa';

const District = () => {
    const [district, setDistrict] = useState('');
    const [districts, setDistricts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (district.trim() !== '') {
            setDistricts([...districts, { id: districts.length + 1, name: district }]);
            setDistrict(''); // Reset the input field after submission
        }
    };

    const handleCancel = () => {
        setDistrict(''); // Reset the input field when cancel is clicked
    };

    const handleDelete = (id) => {
        const updatedDistricts = districts.filter(d => d.id !== id);
        // Reorder the serial numbers
        const reorderedDistricts = updatedDistricts.map((item, index) => ({
            ...item,
            id: index + 1
        }));
        setDistricts(reorderedDistricts);
    };

    return (
        <div className="form-container">
            <h2>Enter District Name</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="District Name"
                />
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>

            {districts.length > 0 && (
                <div className="table-container">
                    <h3>Submitted Districts</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>District</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {districts.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td className="delete-btn">
                                        <FaTimes onClick={() => handleDelete(item.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default District;