import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  return (
    <Col>
      <Card title={'FOOD_NAME_HERE'}>
        <img src={'FOOD_IMAGE_HERE'} height={60} alt='food' />
        <p>Calories: FOOD_CALORIES_HERE</p>
        <p>Servings: FOOD_SERVINGS_HERE</p>
        <p>
          <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
        </p>
        <Button type='primary'> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
