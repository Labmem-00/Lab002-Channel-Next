import axios from 'axios';

//不设置baseURL，默认在当前路径寻找api，设置了的话生产环境会出现莫名的CROS错误
const Axios = axios.create({
    timeout: 10000,    
})

export default Axios
