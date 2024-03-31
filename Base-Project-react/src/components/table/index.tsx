import React from 'react';
import { Spin, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { UserType } from '@/interface/user';
import Pagination from '../pagination';

interface Props {
    formattedData: UserType[];
    isLoading: boolean;
    setPage: (page: number) => void;
    currentPage: number
}

const columns: TableColumnsType<UserType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: UserType, b: UserType) => a.name.localeCompare(b.name),
    },
    {
        title: 'Picture',
        dataIndex: 'picture',
        key: 'picture',
        render: (url: string) => <img src={url} alt="User Avatar" style={{ width: 40 }} />,
    },
    {
        title: 'Username',
        dataIndex: ['login', 'username'],
        key: 'username',
    },
];

const TableComponents: React.FC<Props> = ({ formattedData, isLoading, setPage, currentPage }) => {
    return (
        <div className="mx-auto">
            {isLoading ? (
                <div className="m-auto flex justify-center">
                    <Spin />
                </div>
            ) : (
                <div>
                    <Table
                        columns={columns}
                        dataSource={formattedData}
                        loading={isLoading}
                        pagination={false}
                    />
                    <Pagination totalPages={10} setPage={setPage} currentPage={currentPage} />
                </div>
            )}
        </div>
    );
};

export default TableComponents;
