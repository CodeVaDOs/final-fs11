import React, {useState} from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {objectToFormData} from "../../utils/formData";
import api from "../../utils/api";


const TempHousesForm = () => {
    const [data, setData] = useState({
        location: 'Kyiv, Ukraine',
        equipment: 'Vse est, fen est',
        area: 'sto kvadratnyh metrov',
        description: 'Systhasnyi budinok, fen est',
        ownerId: 7,
        houseModelId: 1,
        images: []
    })


    return (
        <div>
            <ul>
                <input
                    accept="image/*"
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={(e) => {
                        const { files } = e.target;
                        setData({
                            ...data,
                            images: Object.keys(files).map(function(key) {
                                return files[key];
                            })
                        })
                    }}
                />
                <Button onClick={() => {
                    const formData = objectToFormData(data, '', ['images']);
                    data.images.forEach((file, index) => {
                        formData.append(`images[${index}]`, file, file.name)
                    })

                    api.post('houses', formData, {
                        headers: { "Content-Type": "multipart/form-data" },
                    })
                }}>Submit</Button>
            </ul>
        </div>
    );
};

export default TempHousesForm;