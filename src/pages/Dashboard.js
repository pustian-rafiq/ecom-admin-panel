import { FallOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import React from "react";
import ColumnChart from "../components/Dashboard/ColumnChart";
import RecentOrders from "../components/Dashboard/Recentorders";

const { Paragraph, Title } = Typography;
const Dashboard = () => {
  return (
    <div>
      <Row gutter={[16, 6]}>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
        >
          <Card>
            <div className="card-content">
              <div className="total">
                <p className="title">Total</p>
                <p className="amount">$1000</p>
              </div>
              <div className="compare-content">
                <p>
                  {" "}
                  <FallOutlined /> 32%
                </p>
                <p>Compared To April 2023</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
        >
          <Card>
            <div className="card-content">
              <div className="total">
                <p className="title">Total</p>
                <p className="amount">$1000</p>
              </div>
              <div className="compare-content">
                <p>
                  {" "}
                  <FallOutlined /> 32%
                </p>
                <p>Compared To April 2023</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 8,
          }}
        >
          <Card>
            <div className="card-content">
              <div className="total">
                <p className="title">Total</p>
                <p className="amount">$1000</p>
              </div>
              <div className="compare-content">
                <p>
                  {" "}
                  <FallOutlined /> 32%
                </p>
                <p>Compared To April 2023</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 6]} className="mt-3">
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}
        >
          <Title>Income Statistics</Title>
          <Card>
            <ColumnChart />
          </Card>
        </Col>
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}
        >
          <Title>Cost Statistics</Title>
          <Card>
            <ColumnChart />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 6]} className="mt-3">
        <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 18,
          }}
        >
          <Title>Recent Orders</Title>
          <Card>
            <RecentOrders />
          </Card>
        </Col>
        {/* <Col
          xs={{
            span: 24,
          }}
          lg={{
            span: 12,
          }}
        >
          <Title>Cost Statistics</Title>
          <Card>
            <ColumnChart />
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default Dashboard;
