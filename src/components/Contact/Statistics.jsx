import { Button, Card, Col, FloatButton, Modal, Row, Statistic } from "antd";
import { LineChartOutlined } from '@ant-design/icons';
import { useState } from "react";

export function Statistics(props) {
  const [open, setOpen] = useState(false);

  function openNew() {
    setOpen(true);
  }

  const languageCount = [...new Set(props.contactList?.map((e) => e["language"]))].length;
  const genderFount = props.contactList?.filter((e) => e.gender === "F").length;
  const genderMCount = props.contactList?.filter((e) => e.gender === "M").length;

  return (
    <>
      {props.isMobile ?
        <FloatButton
          onClick={openNew}
          icon={<LineChartOutlined />}
          type="primary"
        />
        :
        <Button
          onClick={openNew}
          icon={<LineChartOutlined />}
          type="primary"
        />
      }
      <Modal
        title={
          <div style={{ textAlign: "center" }}><span style={{ color: "#00906d" }}>Leste</span> Statistics</div>
        }
        centered
        open={open}
        onCancel={() => setOpen(false)}
        closeIcon={false}
        footer={<Button onClick={() => setOpen(false)} type="primary">OK</Button>}
        forceRender={true}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Card title={<div style={{ textAlign: "center" }}>Languages</div>}>
              <Statistic
                title={<div style={{ textAlign: "center" }}>Total</div>}
                value={languageCount}
                valueStyle={{ color: '#00906d', textAlign: "center" }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title={<div style={{ textAlign: "center" }}>Genders</div>}>
              <Row>
                <Col span={12}>
                  <Statistic
                    title={<div style={{ textAlign: "center" }}>Female</div>}
                    value={genderFount}
                    valueStyle={{ color: '#00906d', textAlign: "center" }}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title={<div style={{ textAlign: "center" }}>Male</div>}
                    value={genderMCount}
                    valueStyle={{ color: '#00906d', textAlign: "center" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
