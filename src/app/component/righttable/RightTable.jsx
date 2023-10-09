import { useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue } from "@nextui-org/react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const handleCell = (i) => {
    return alert(i)
}



const RightTable = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading } = useSWR(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
        keepPreviousData: true,
    });

    const rowsPerPage = 0;

    const pages = useMemo(() => {
        return data?.count ? Math.ceil(data.count) : 0;
    }, [data?.count]);

    const loadingState = isLoading || data?.results.length === 0 ? "loading" : "idle";
    return (
        <Table
            aria-label="Example table with client async pagination"
        //     bottomContent={
        //         pages > 0 ? (
        //             <div className="flex w-full justify-center">
        //                 <Pagination
        //                     isCompact
        //                     showControls
        //                     showShadow
        //                     color="primary"
        //                     page={page}
        //                     total={pages}
        //                     onChange={(page) => setPage(page)}
        //                 />
        //             </div>
        //         ) : null
        //     }
        // {...args}
        >
            <TableHeader>
                <TableColumn key="name">Name</TableColumn>
                <TableColumn key="height">Height</TableColumn>
                <TableColumn key="mass">Mass</TableColumn>
                <TableColumn key="birth_year">Birth year</TableColumn>
            </TableHeader>
            <TableBody
                items={data?.results ?? []}
                loadingContent={<Spinner />}
                loadingState={loadingState}
            >
                {(item) => (
                    <TableRow key={item?.name}>
                        {(columnKey) => 
                        <TableCell >
                            {/* {getKeyValue(item, columnKey)} */}
                            <input type="text" defaultValue={getKeyValue(item, columnKey)} ></input>
                            </TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default RightTable;