// import { useEffect, useState } from "react";
// import axios from "axios";

// export default () => {
//   const [postList, setPostList] = useState([]);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [id, setId] = useState(0);
//   const [selectPostId, setSelectPostId] = useState(-1);
//   const [isTitleEditMode, setIsTitleEditMode] = useState("");
//   const [isBodyEditMode, setIsBodyEditMode] = useState("");
//   const [editObject, setEditObject] = useState({});
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
//       console.log(response.data);
//       if (response && response.data) {
//         setPostList(response.data);
//       }
//     });
//   };
//   const onTitleChange = (event) => {
//     setTitle(event.target.value);
//   };
//   const onTitleEditModeChange = (event) => {
//     setIsTitleEditMode(event.target.value);
//   };
//   const onBodyChange = (event) => {
//     setBody(event.target.value);
//   };
//   const onBodyEditModeChange = (event) => {
//     setIsBodyEditMode(event.target.value);
//   };
//   const onEditObjectChangehandler = (event) => {
//     // const oldObj={
//     //     title:"a",
//     //     body:"b"
//     // }
//     // const titleNew={
//     //     title:oldObj.title,
//     //     body:oldObj.body,
//     //     title:"c"
//     // };

//     if (event) {
//       const { name, value } = event.target;
//       setEditObject({
//         ...editObject,
//         [name]: value,
//       });
//     }
//   };

//   const onFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(title, body);

//     if (!isEditMode) {
//       axios
//         .post("https://jsonplaceholder.typicode.com/posts", {
//           title,
//           body,
//           userId: 1,
//         })
//         .then((response) => {
//           console.log(response);
//           alert("Post Added");
//           //fetch data again
//           fetchData();
//           //reset form
//           setTitle("");
//           setBody("");
//         });
//     } else {
//       if (id > 0) {
//         axios
//           .put("https://jsonplaceholder.typicode.com/posts/" + id, {
//             title,
//             body,
//             id: 1,
//           })
//           .then((response) => {
//             if (response) {
//               console.log(response);
//               fetchData();
//               alert("Post Updated");
//               onResetClickHandler();
//             }
//           });
//       }
//     }
//   };
//   const onDeleteClickHandler = (id) => {
//     axios
//       .delete("https://jsonplaceholder.typicode.com/posts/" + id)
//       .then((response) => {
//         console.log(response);
//         fetchData();
//         alert("Post Deleted");
//       });
//   };
//   const onEditClickHandler = (postObject) => {
//     // setIsEditMode(true);
//     // setTitle(postObject.isTitle);
//     // setBody(postObject.body);
//     setEditObject({
//       ...postObject,
//     });
//     setId(postObject.id);
//     setSelectPostId(postObject.id);

//     setIsTitleEditMode(postObject.title);
//     setIsBodyEditMode(postObject.body);
//   };
//   const onResetClickHandler = (event) => {
//     if (event) {
//       event.preventDefault();
//     }
//     setIsEditMode(false);
//     setTitle("");
//     setBody("");
//   };

//   return (
//     <>
//       <h1>Data From Post</h1>
//       <h2>Post Form</h2>
//       <form onSubmit={onFormSubmit}>
//         <label>Title</label>
//         <input name="title" value={title} onChange={onTitleChange}></input>
//         <label>Body</label>
//         <input name="body" value={body} onChange={onBodyChange}></input>
//         <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
//         {isEditMode && <button onClick={onResetClickHandler}>Cancel</button>}
//       </form>
//       <table class="table table-striped">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Title</th>
//             <th>Body</th>
//             <th>Option</th>
//           </tr>
//         </thead>
//         <tbody>
//           {postList.map((post, index) => {
//             return (
//               <tr key={post.id}>
//                 <td>{post.id}</td>
//                 <td>
//                   {selectPostId === post.id ? (
//                     <input
//                       name={"title"}
//                       value={isTitleEditMode}
//                       onChange={onEditClickHandler}
//                     />
//                   ) : (
//                     post.title
//                   )}
//                 </td>
//                 <td>
//                   {selectPostId === post.Id ? (
//                     <input
//                       name={"body"}
//                       value={isBodyEditMode}
//                       onChange={onEditClickHandler}
//                     />
//                   ) : (
//                     post.body
//                   )}
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => {
//                       onDeleteClickHandler(post.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => {
//                       onEditClickHandler(post);
//                     }}
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// };
