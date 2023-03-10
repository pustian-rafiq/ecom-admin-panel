import { Table } from "antd";
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
const RecentOrders = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);

export default RecentOrders;
