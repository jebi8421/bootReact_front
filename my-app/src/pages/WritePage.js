import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Write = () => {
    const navigate = useNavigate();

    const [write, setWrite] = useState({
        title: "",
        content: ""
    });

    const changeValue = (e) => {
        setWrite({
            ...write,
            [e.target.name]: e.target.value
        });
    }

    const submitWrite = (e) => {
        e.preventDefault();
        fetch("/api/board/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(write)
        })
        .then(res => {
            if(res.status === 200) {
                return res.json();
            } else {
                return null;
            }
        })
        .then(data => {
            if(data !== null) {
                navigate("/");
            } else {
                alert("등록에 실패하였습니다.");
            }
        })
        .catch(error=>{
            console.log(error);
        });
    }

    return (
        <Form onSubmit={submitWrite}>
        <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" onChange={changeValue} name="title" />
        </Form.Group>
        <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={changeValue} name="content" />
        </Form.Group>

        <Button type="submit" variant="primary m-3">Save</Button>
        </Form>
    )
}

export default Write;