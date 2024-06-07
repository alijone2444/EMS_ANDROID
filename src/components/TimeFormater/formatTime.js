const formatDateString = (dateString) => {
    const date = new Date(dateString);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensure two digits
    const time = `${hours}:${minutes}`;

    return `${month} ${day}, ${year} : ${time}`;
};

const dateString = "2023-09-21T00:00:00.000Z";
const formattedDate = formatDateString(dateString);

export default formatDateString;
