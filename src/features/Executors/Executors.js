import React, {useEffect, useState} from "react";
import axios from "axios";
import { Card } from 'antd';

import './Executors.css';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
});

export const Executors = () => {
    const [executors, setExecutors] = useState([]);

    useEffect(() => {
        instance.get('/results/')
            .then(response => {
                setExecutors(response.data)
            })
    }, [])

    return (
        <div className="Executors">
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