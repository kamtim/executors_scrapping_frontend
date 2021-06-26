import React from 'react';
import {Image, Rate, Typography, List} from "antd";

import './Executor.css';
import {executor} from "./stub";

export const Executor = () => {
    return (
        <div className="Executor">
            <div className="Executor-Image">
                <Image
                    width={200}
                    src={executor.image}
                />
            </div>
            <div>
                <Typography.Title level={3}>{executor.name}</Typography.Title>
                <div className="Executor-Rating">
                    <Rate value={executor.score} />
                    <Typography.Title level={4}>{executor.score}</Typography.Title>
                </div>
                <Typography.Title level={4}>{executor.reviewsNumber} Отзывов</Typography.Title>
                <Typography.Link href={executor.url}>Ссылка на официальный источник</Typography.Link>

                <div className="Executor-Details">
                    <Typography.Title level={4}>О себе</Typography.Title>
                    {executor.details}
                </div>

                <div className="Executor-Education">
                    <Typography.Title level={4}>Образование</Typography.Title>
                    {/*{executor.education.map(item => (<div>{item}</div>))}*/}

                    <List
                        dataSource={executor.education}
                        renderItem={item => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}