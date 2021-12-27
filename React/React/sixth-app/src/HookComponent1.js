import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [postsList, setPostsList] = useState([]);

  const [title, setTitle] = useState("");

  // const [titleEditMode, setTitleEditMode] = useState("");

  const [body, setBody] = useState("");

  // const [bodyEditMode, setBodyEditMode] = useState("");

  const [postId, setPostId] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);

  const [editObject, setEditObject] = useState({});

  const [selectedPostId, setSelectedPostId] = useState(-1);
  const [postObject, setPostObject] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    //code to fetch data from server
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setPostsList(response.data);
      }
    });
  };

  const onEditObjectHandler = (event) => {
    //  const titleOld={
    //       title:0,
    //       body:0,
    // }
    // const titleNew = {
    //   title: titleOld.title,
    //   body: bodyOld.body,
    //   ...titleOld,
    //   title:const,
    // }

    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };

  // const onTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // const onTitleEditModeChange = (event) => {
  //   setTitleEditMode(event.target.value);
  // };

  // const onBodyChange = (event) => {
  //   setBody(event.target.value);
  // };

  // const onBodyEditModeChange = (event) => {
  //   setBodyEditMode(event.target.value);
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(title, body);
    if (!isEditMode) {
      //code to add new records
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          ...postObject,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added...!");
          //fetch the data again
          fetchData("");
          // //reset from
          // setTitle("");
          // setBody("");
          setPostObject({
            title: "",
            body: "",
          });
        });
    }
    // else {
    //   //code to edit the records
    //   if (postId > 0) {
    //     axios
    //       .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
    //         id: postId,
    //         ...postObject,
    //         postId: 1,
    //       })
    //       .then((response) => {
    //         if (response) {
    //           fetchData();
    //           alert("Updated...!");
    //           onResetClickHandler();
    //         }
    //       });
    //   }
    // }
  };

  const onPostObjectChangehandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setPostObject({
        ...postObject,
        [name]: value,
      });
    }
  };

  const onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        alert("Deleted...!");
        fetchData("");
      });
  };

  const onEditClickHandler = (postObject) => {
    console.log(postObject);

    // setIsEditMode(true);

    // // setTitle(postObject.title);
    // setTitleEditMode(postObject.title);

    // // setBody(postObject.body);
    // setBodyEditMode(postObject.body);
    // setPostId(postObject.id);
    // setSelectedPostId(postObject.id);

    setEditObject({
      ...postObject,
    });
    setPostId(postObject.id);
    setSelectedPostId(postObject.id);
  };
  const updateClickHandler = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
        id: postId,
        ...postObject,
        postId: 1,
      })
      .then((response) => {
        if (response) {
          fetchData();
          alert("Updated...!");
          resetClickHandler();
        }
      });
  };
  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    // setTitle("");
    // setBody("");
    setPostObject({
      title: "",
      body: "",
    });
  };
  const resetClickHandler = () => {
    setSelectedPostId(-1);
    setEditObject({
      title: "",
      body: "",
    });
  };

  return (
    <>
      <h1>From HooksSample</h1>
      <h2>Post Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Title:</label>
        <input
          name="title"
          value={postObject.title}
          onChange={onPostObjectChangehandler}
        />

        <label>Body:</label>
        <input
          name="body"
          value={postObject.body}
          onChange={onPostObjectChangehandler}
        />
        <br />
        <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onResetClickHandler}>Reset</button>}
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post, index) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>

                <td>
                  {" "}
                  {selectedPostId === post.id ? (
                    <input
                      name="title"
                      value={editObject.title}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    post.title
                  )}
                </td>

                <td>
                  {" "}
                  {selectedPostId === post.id ? (
                    <input
                      name="body"
                      value={editObject.body}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    post.body
                  )}
                </td>
                <td>
                  {selectedPostId === post.id ? (
                    <button onClick={updateClickHandler}>update</button>
                  ) : (
                    <button
                      onClick={() => {
                        onDeleteClickHandler(post.id);
                      }}
                    >
                      Delete
                    </button>
                  )}
                </td>

                <td>
                  {selectedPostId === post.id ? (
                    <button onClick={resetClickHandler}>Reset</button>
                  ) : (
                    <button
                      onClick={() => {
                        onEditClickHandler(post);
                      }}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
