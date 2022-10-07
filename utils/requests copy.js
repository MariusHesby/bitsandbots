const API_KEY = process.env.API_KEY;

export default {
    fetchAction: {
        title: 'Action',
        url: `/games?genres=4&key=${API_KEY}`,
    },
}