import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const btn = document.querySelector(".load-more");
const API_KEY = "37014640-9c46812dfd82041fe339e82c5";
const BASE_URL = "https://pixabay.com/api/";

export const getImages = async (photo, currentPage) => {
    const params = new URLSearchParams({
        key: API_KEY,
        q: photo,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: true,
        per_page: 40,
        page: currentPage,
    })
    return await axios(`${BASE_URL}?${params}`);
}






