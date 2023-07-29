import axios from "axios";

export const getData =async () => {

    try {
        const response = await axios.get("http://localhost:8080/getWordData");
        return response.data;
    }
    catch(error){
        return error;
    }
    
};