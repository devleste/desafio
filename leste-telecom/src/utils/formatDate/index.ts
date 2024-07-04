export const formatDateEditForm = (value: string) => {
    // Remove tudo que não seja dígito
    value = value.replace(/\D/g, '');

    // Adiciona o traço para formatar a data
    if (value.length > 4 && value.length <= 6) {
        value = `${value.slice(0, 4)}-${value.slice(4)}`;
    } else if (value.length > 6) {
        value = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6)}`;
    }

    return value;
};

export const formatBirthdayAddContactForm = (value: string) => {
    const cleaned = value.replace(/\D+/g, '');
    const match = cleaned.match(/^(\d{4})(\d{0,2})(\d{0,2})$/);

    if (match) {
        return `${match[1]}${match[2] ? '-' + match[2] : ''}${match[3] ? '-' + match[3] : ''}`;
    }
    return value;
};