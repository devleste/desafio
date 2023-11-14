import { ConfigProvider, Image, Layout } from "antd";
import "./App.css";
import Logo from "./assets/logoLesteContact.svg";
import { ContactList } from "./components/Contact/ContactList";

export function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00906d",
        },
        components: {
          Button: {
            colorPrimary: "#00906d",
          },
        },
      }}
    >
      <Layout>
        <Layout.Header style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20vh", backgroundColor: "#00906d" }}>
          <Image src={Logo} preview={false} height={"96px"} />
        </Layout.Header>
        <Layout.Content style={{ margin: "0 16px", height: "80vh" }}>
          <ContactList />
        </Layout.Content>
      </Layout>
    </ConfigProvider  >
  );
}
