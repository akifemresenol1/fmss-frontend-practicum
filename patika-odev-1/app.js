import axios from "axios";
const getUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
      const { data:user } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + userId
      );
      resolve(user);
    });
  };
  
  const getPosts = (userId) => {
    return new Promise(async (resolve, reject) => {
      const { data:post } = await axios(
        "https://jsonplaceholder.typicode.com/posts?userId=" + userId
      );
      resolve(post);
    });
  };
  
  async function getData(userId) {
      try {
          const users = await getUsers(userId);
          const posts = await getPosts(userId);

          const array = [users, posts] 
          return array; 
  
        } catch (e) {
          console.log(e);
        }
  }
  
  
  export default getData;