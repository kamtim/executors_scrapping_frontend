import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, Rate, Select} from 'antd';

import './Executors.css';
import {sections} from "./stub";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
});

export const Executors = () => {
    const [executors, setExecutors] = useState([]);

    useEffect(() => {
        instance.get('/freelancers/')
            .then(response => {
                setExecutors(response.data.slice(70, response.length))
            })
    }, [])

    return (
        <div className="Executors">
            <div className="Executors-Select">
                <Select
                    showSearch
                    style={{width: 200}}
                    placeholder="Выберите раздел"
                    optionFilterProp="children"
                    onChange={() => console.log('hi')}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        sections.map(({slug, text}) => (
                            <Select.Option value={slug}>{text}</Select.Option>
                        ))
                    }
                </Select>
            </div>
            {
                executors.map(executor => (
                    <Card>
                        <div className="Executors-Item">
                            <img className="Executors-Image" src={executor.image} alt="234"/>
                            <div>
                                <div className="Executors-Name">
                                    <a
                                        href={executor.url}
                                        target="_blank"
                                    >
                                        {executor.name_text}
                                    </a>
                                    <Rate className="Executors-Rate" disabled defaultValue={5}/>
                                </div>
                                <div className="Executors-Skills">{executor.skills}</div>
                            </div>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}