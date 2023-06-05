import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = "37014640-9c46812dfd82041fe339e82c5";
axios.defaults.baseURL = "https://pixabay.com/api/";

export const getImages = async (photo, currentPage) => { try {
    const { data } = await axios(`?key=${API_KEY}&q=${photo}&page=${currentPage}&image_type=photo&per_page=100&orientation=horizontal&safesearch=true`)
    return data;
} catch (error) {
    Notify.failure("We're sorry, but you've reached the end of search results.");
}
}



