import axios from 'axios';

const fetchTabContent = async () => {
    const response = await axios.get(`/api/1/short`);
    return response.data;
};

export default fetchTabContent;
