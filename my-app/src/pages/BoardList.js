import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const BoardList = (props) => {
    const {id,title,content} = props.name;
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {content}
                </Card.Text>
                <Link to={`/detail/${id}`} className="btn btn-primary">상세보기</Link>
            </Card.Body>
        </Card>
    )
}

export default BoardList;