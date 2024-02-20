import { useEffect, useState } from 'react';
import BoardList from './BoardList';

const ListPage = () => {

    const [list, setList] = useState([]);

    useEffect(()=> {
        fetch("/api/board/reactList")
       .then(res => res.json())
       .then(res => setList(res))
    }, []);

    return (
        <>
        {list && list.map((info,idx)=>(
            <BoardList name={info} key={idx} />
        ))}
        </>
    )
}

export default ListPage;