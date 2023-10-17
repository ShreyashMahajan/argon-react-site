import  React, { useState } from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
  } from "reactstrap";
import { SALES_DATA_ENUM, SALES_INFO_LIST } from './approval.constant';
import { StatusButton } from './Components/StatusButton/statusButton';

const Approval = () => {
    
    const [salesDataList, setSalesDataList] = useState(SALES_INFO_LIST);

    return  <div className="mt-5">
    <Col className="mb-5 mb-xl-0" xl="12">
      <Card className="shadow">
        <CardHeader className="border-0">
          <Row className="align-items-center">
            <div className="col">
              <h3 className="mb-0">Page visits</h3>
            </div>
            <div className="col text-right">
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                // size="sm"
              >
                Export
              </Button>
            </div>
          </Row>
        </CardHeader>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Date</th>
              <th scope="col">Sales Representative Name</th>
              <th scope="col">Dealer Name</th>
              <th scope="col">Part Number</th>
              <th scope="col">Location </th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
           {
            salesDataList.dataList.map( (salesItem) => {
                return  <tr>
                <th scope="row">{salesItem.s_no}</th>
                <td>{salesItem.sales_date}</td>
                <td>{salesItem.representative_name}</td>
                <td>{salesItem.dealer_name}</td>
                <td>{salesItem.part_name}</td>
                <td>{salesItem.location}</td>
                <td>
                <StatusButton />
                </td>
              </tr>
            } )
           }
          </tbody>
        </Table>
      </Card>
    </Col>
  </div>
}

export default Approval 