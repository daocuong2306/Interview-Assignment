import React, { useState } from 'react';
import { useGetUserDataQuery } from '@/api/userApi';
import { DataType } from '@/interface/user';
import TableComponents from '@/components/table';



const TableUser: React.FC = () => {


    const [page, setPage] = useState(1)
    const { data, isFetching } = useGetUserDataQuery<DataType>({ page, results: 10 });
        

    const newData = data?.results.map((user: any) => ({
        key: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        picture: user.picture.medium,
        login: user.login,
    }));


    return (
        <div className="w-1/2 mx-auto h-2/3">
            <TableComponents formattedData={newData} isLoading={isFetching} setPage={setPage} currentPage={page}/>
        </div>
    );
};


export default TableUser;
