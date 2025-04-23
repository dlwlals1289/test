// // // // const commentUrl = `"https://jsonplaceholder.typicode.com/posts/${postId}/comments"`
// console.log("-------------------------");
// console.log("---------- p302 ---------");
const url = 'https://jsonplaceholder.typicode.com';
const jpfetch = url => fetch(url).then(res => res.json());
// const getUserInfo = userId => jpfetch(`${url}/users/${userId}`);
const getPostInfo = userId => jpfetch(`${url}/posts?userId=${userId}`);
// const getUserPosts = async userId => {
//     const {id, name} = await getUserInfo(userId);
//     const postData = await getPostInfo(userId);
//     return {
//                 id: id,
//                 name: name,
//                 // posts: postData
//                 posts: postData.map(({id, title, body}) => ({id, title}))
//     }
    
// }
// console.log(await getUserPosts(1));
// console.log(await getUserPosts(10));

// console.log("-------------------------");
// console.log("---------- p303 ---------");
// const getPosts = async userId => {
//     const results = [];

//     const postData = await getPostInfo(userId);
//     const postId = postData.map(p => p.id);

//     const res = postId.map(async id => {
//         const post = await jpfetch(`${url}/posts/${id}/comments`);
//         results.push({
//             postId : id,
//             titie : postData.
//         })
//     })
//     // console.log(postId);
//     // const res2 = await fetch(commentUrl);
//     // const commentData = await res2.json();

//     return {
//                 // id: userData.id,
//                 // name: userData.name,
//                 posts: postData
//     }
    
// }
// getPosts(1);