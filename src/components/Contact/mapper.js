import dayjs from "dayjs";
import { addContact, updateContact } from "../../services/ContactService";

export const toPayload = (form) => {
    const payload = {
        id: form.id ? parseInt(form.id) : undefined,
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        gender: form.gender,
        language: form.language,
        avatar: form.avatar,
        birthday: form.birthday.format("YYYY-MM-DD"),
    };

    if (form.id) {
        updateContact(payload);
    } else {
        addContact(payload);
    }

    return payload;
}

export const fromPayload = (payload) => {
    return {
        id: payload.id,
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        gender: payload.gender,
        language: payload.language,
        avatar: payload?.avatar,
        birthday: dayjs(payload.birthday),
    };
}