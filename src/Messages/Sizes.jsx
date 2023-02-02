import { Typeahead } from 'react-bootstrap-typeahead'
import { Col, Row } from 'reactstrap'
export default function Sizes({ options, onClick, onChange, multiSelections }) {
  return (
    <div>
      <Row className="" style={{ display: 'flex', alignItems: 'center' }}>
        <Col md={10}>
          <Typeahead
            id="basic-typeahead-multiple"
            labelKey="name"
            multiple
            // onChange={setMultiSelections}
            options={['Large Scale', 'Small Scale', 'fasdf', 'fasdf', 'fasdfs','fasfsd']}
           
            onChange={onChange}
            placeholder="Select Size."
            selected={multiSelections}
            name="farming type"
            className="input_field"
          />
        </Col>
        <Col md={2}>
          <button className="primary_button" onClick={onClick}>Add</button>
        </Col>
      </Row>
    </div>
  )
}