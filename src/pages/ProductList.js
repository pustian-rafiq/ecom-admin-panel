import { Card, Col, Row, Table, Typography } from "antd";
const { Title } = Typography;
const columns = [
  {
    title: "Sl No",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.customer - b.customer,
      multiple: 3,
    },
  },
  {
    title: "Product",
    dataIndex: "product",
    sorter: {
      compare: (a, b) => a.date - b.date,
      multiple: 3,
    },
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data = [
  {
    key: "1",
    name: "Abdullah",
    product: "Thai Apple",
    status: "Pending",
  },
  {
    key: "2",
    name: "Abdullah",
    product: "Thai Apple",
    status: "Pending",
  },
  {
    key: "3",
    name: "Abdullah",
    product: "Thai Apple",
    status: "Pending",
  },
  {
    key: "4",
    name: "Abdullah",
    product: "Thai Apple",
    status: "Pending",
  },
  {
    key: "5",
    name: "Abdullah",
    product: "Thai Apple",
    status: "Pending",
  },
  {
    key: "6",
    name: "Abdullah",
    product: "Thai Apple",
    status: "Pending",
  },
  {
    key: "7",
    name: "Abdullah",
    product: "Thai Apple",
    status: "Pending",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const ProductList = () => (
  <Row gutter={[16, 6]} className="mt-3">
    <Col
      xs={{
        span: 24,
      }}
      lg={{
        span: 24,
      }}
    >
      <Title>Product List</Title>
      <Card>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </Card>
    </Col>
  </Row>
);

export default ProductList;
