
const errorMessageConsole = (error) => {
    // eslint-disable-next-line no-console
    console.log('==============================');
    // eslint-disable-next-line no-console
    console.log('Status:', error.response.status);
    // eslint-disable-next-line no-console
    console.log('Message:', error.response.data.message);
    // eslint-disable-next-line no-console
    console.log('Error:', error.response);
    // eslint-disable-next-line no-console
    console.log('==============================');
}

const capitalizeFirstLetter = string => string ? string.charAt(0).toUpperCase() + string.slice(1) : '';


export{
    errorMessageConsole,
    capitalizeFirstLetter
}