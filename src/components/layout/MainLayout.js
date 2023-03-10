import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import {
  AiOutlineBgColors,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { FaBloggerB, FaClipboardList } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { RiCouponLine } from "react-icons/ri";
import { SiBrandfolder } from "react-icons/si";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "admin",
    icon: <AiOutlineDashboard className="fs-4" />,
    label: "Dashboard",
  },
  {
    key: "customers",
    icon: <AiOutlineUser className="fs-4" />,
    label: "Customers",
  },
  {
    key: "Catalog",
    icon: <AiOutlineShoppingCart className="fs-4" />,
    label: "Catalog",
    children: [
      {
        key: "product-add",
        icon: <AiOutlineShoppingCart className="fs-4" />,
        label: "Add Product",
      },
      {
        key: "products",
        icon: <AiOutlineShoppingCart className="fs-4" />,
        label: "Product List",
      },
      {
        key: "brand",
        icon: <SiBrandfolder className="fs-4" />,
        label: "Brand",
      },
      {
        key: "brands",
        icon: <SiBrandfolder className="fs-4" />,
        label: "Brand List ",
      },
      {
        key: "category",
        icon: <BiCategoryAlt className="fs-4" />,
        label: "Category",
      },
      {
        key: "categories",
        icon: <BiCategoryAlt className="fs-4" />,
        label: "Category List",
      },
      {
        key: "color",
        icon: <AiOutlineBgColors className="fs-4" />,
        label: "Color",
      },
      {
        key: "colors",
        icon: <AiOutlineBgColors className="fs-4" />,
        label: "Color List",
      },
    ],
  },
  {
    key: "orders",
    icon: <FaClipboardList className="fs-4" />,
    label: "Orders",
  },
  {
    key: "marketing",
    icon: <RiCouponLine className="fs-4" />,
    label: "Marketing",
    children: [
      {
        key: "add-oupon",
        icon: <ImBlog className="fs-4" />,
        label: "Add Coupon",
      },
      {
        key: "coupons",
        icon: <RiCouponLine className="fs-4" />,
        label: "Coupon List",
      },
    ],
  },
  {
    key: "blogs",
    icon: <FaBloggerB className="fs-4" />,
    label: "Blogs",
    children: [
      {
        key: "blog",
        icon: <ImBlog className="fs-4" />,
        label: "Add Blog",
      },
      {
        key: "blog-list",
        icon: <FaBloggerB className="fs-4" />,
        label: "Blog List",
      },
      {
        key: "blog-category",
        icon: <ImBlog className="fs-4" />,
        label: "Add Blog Category",
      },
      {
        key: "blog-category-list",
        icon: <FaBloggerB className="fs-4" />,
        label: "Blog Category List",
      },
    ],
  },
  {
    key: "enquiries",
    icon: <FaClipboardList className="fs-4" />,
    label: "Enquiries",
  },
];
const MainLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">ES</span>
            <span className="lg-logo">Ecom-Shop</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center  dropdown">
              <div
                style={{ height: "32px", width: "32px", marginTop: "-20px" }}
              >
                <img
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Navdeep</h5>
                <p className="mb-0">navdeepdahiya753@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
