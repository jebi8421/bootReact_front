import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        content: ''
    });

    useEffect(()=>{
        fetch(`/api/reactBoard/${id}`)
        .then(res=>res.json())
        .then(res=>setBoard(res))
    }, []);

    const delBoard = () => {
        fetch(`/api/reactBoard/${id}`, {
            method: "DELETE"
        })
        .then(res=>{
            if(res.status === 200) {
                return res;
            } else {
                return null;
            }
        })
        .then(res=>{
            if(res != null) {
                navigate("/");
            }
        })
    }

    return (
        <div>
            <h1>상세보기</h1>
            <Button variant="primary">수정</Button>&nbsp;
            <Button variant="danger" onClick={delBoard}>삭제</Button>
            <hr/>
            <h3>{board.title}</h3>
            <h1>{board.content}</h1>
        </div>
    );
}

export default Detail;