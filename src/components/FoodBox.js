import { Card, Col, Button } from 'antd';

export default function FoodBox(props) {
  return (
    <div>
      <Col>
        <Card title={props.food.name} style={{ margin: 12 }}>
          <img src={props.food.image} height={60} alt='' />
          <p>Calories: {props.food.calories}</p>
          <p>Servings: {props.food.servings}</p>
          <p>
            <b>Total Calories: {props.food.calories * props.food.servings} </b>{' '}
            kcal
          </p>
          <Button
            onClick={() => props.handleDelete(props.food.name)}
            type='primary'
          >
            {' '}
            Delete{' '}
          </Button>
        </Card>
      </Col>
    </div>
  );
}
