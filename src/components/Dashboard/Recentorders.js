import { Table } from "antd";
const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "Customer",
    dataIndex: "customer",
    sorter: {
      compare: (a, b) => a.customer - b.customer,
      multiple: 3,
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: {
      compare: (a, b) => a.date - b.date,
      multiple: 3,
    },
  },
  {
    title: "Total",
    dataIndex: "total",
    sorter: {
      compare: (a, b) => a.total - b.total,
      multiple: 2,
    },
  },
];
const data = [
  {
    key: "1",
    status: "Pending",
    country: "Bangladesh",
    customer: "Abdullah",
    date: "03-08-2023",
    total: "2000",
  },
  {
    key: "2",
    status: "Hold",
    country: "Bangladesh",
    customer: "Abdullah2",
    date: "03-08-2023",
    total: "23000",
  },
  {
    key: "3",
    status: "Canceled",
    country: "Bangladesh",
    customer: "Abdullah5",
    date: "03-08-2023",
    total: "6000",
  },
  {
    key: "4",
    status: "Completed",
    country: "Bangladesh",
    customer: "Abdullah",
    date: "03-08-2023",
    total: "2000",
  },
  {
    key: "5",
    status: "Pending",
    country: "Bangladesh",
    customer: "Abdullah",
    date: "03-08-2023",
    total: "2000",
  },
  {
    key: "6",
    status: "Pending",
    country: "Bangladesh",
    customer: "Abdullah",
    date: "03-08-2023",
    total: "2000",
  },
  {
    key: "7",
    status: "Pending",
    country: "Bangladesh",
    customer: "Abdullah",
    date: "03-08-2023",
    total: "2000",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const RecentOrders = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);

export default RecentOrders;
