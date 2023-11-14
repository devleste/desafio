import { toPayload } from "./mapper";
import { Button, Form } from "antd";
import { ModalForm } from "./ModalForm";
import { useState } from "react";
import { FloatButton } from "antd";
import { PlusOutlined } from '@ant-design/icons';

export function NewContact(props) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [form] = Form.useForm();

    function openNew() {
        setOpen(true);
    }

    function onFinish(e) {
        const createdData = toPayload(e);
        props.updateList(createdData);
        closeModal();
    }

    function closeModal() {
        setOpen(false);
        setEditing(false);
        form.resetFields();
    }

    return (
        <>
            {props.isMobile ?
                <FloatButton
                    onClick={openNew}
                    icon={<PlusOutlined />}
                    type="primary"
                />
                :
                <Button
                    onClick={openNew}
                    icon={<PlusOutlined />}
                    type="primary"
                    shape="square"
                >
                    New Contact
                </Button>
            }
            <>
                <ModalForm
                    form={form}
                    open={open}
                    closeModal={closeModal}
                    onFinish={onFinish}
                    editing={editing}
                    setEditing={setEditing}
                />
            </>
        </>
    )
}