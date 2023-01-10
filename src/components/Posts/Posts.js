// import axios from "axios";
// import { useEffect, useState } from "react";

// const Posts = () => {
//     const [data, setData] = useState([]);
//     const [isFetch, setIsFetch] = useState(true);
//     const [page, setPage] = useState(1);
//     const [max, setMax] = useState(0);
 
//     useEffect(() => {
//         if(isFetch && (data.length < max || max === 0)) {
//             axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`).then( response => { 
//                 console.log(typeof page);
//                 const data = response.data.map( post => ({
//                     ...post,
//                     isReaded:false
//                 })); 
//                 setMax(+response.headers['x-total-count']);//responsi headernieri mejic vercnum enq posteri @ndhanur qanak@ ev pahum enq max state-i mej 
//                 setData( prevData => [...prevData, ...data]); 
//                 // setData(response.data.map( post => post));
//                 // console.log(data);
//             }).finally( () => {
//                 setIsFetch(false);
//             });
//         }
//     }, [isFetch]);


//     useEffect(() => {
//         window.addEventListener("scroll", scrollHandler); 
//     }, []);


//     function scrollHandler(e) {
//         let s_h = e.target.documentElement.scrollHeight; //scroll-i erkarutyun@
//         let s_t = e.target.documentElement.scrollTop; // scroll-i knopkayi verevi masi dirq@
//         let i_h = window.innerHeight;// veradarcnum e eji barcrutyun@, sksac eji 0-akan dirqic minchev nerqebv

//         // 1920 - 900 - 900 = 620
//         if(s_h - s_t - i_h < 400) {
//             setIsFetch(true);
//             setPage(page + 1);
            
//         }
//     }

//     // console.log(data);
//     return(
//         <div>
//             <h2>Posts ({data.length})</h2>
//             {data.map( (post, index) => {
//                 return (
//                     <div key={index}>
//                         <h3>{post.id} {post.title}</h3>
//                         <p>{post.body}</p>
//                         <hr />
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default Posts;


import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (isFetch && (data.length < max || max === 0)) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`
        )
        .then((response) => {
          const data = response.data.map((post) => ({
            ...post,
            isReded: false,
          }));
          setMax(+response.headers["x-total-count"]);
          setData((prevData) => [...prevData, ...data]);
        })
        .finally(() => {
          setIsFetch(false);
        });
    }
  }, [isFetch]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  function scrollHandler(e) {
    let s_h = e.target.documentElement.scrollHeight;
    let s_t = e.target.documentElement.scrollTop;
    let i_h = window.innerHeight;

    if (s_h - s_t - i_h < 400) {
      setIsFetch(true);
      setPage(page + 1);
    }
  }


  console.log(data);


  return (
    <div>
      <h2>Posts ({data.length})</h2>
      {data.map((post, index) => (
        <div style={{ backgroundColor: post.isReded ? "red" : "green" }} key={index}>
          <h3>
            {post.id} {post.title}
          </h3>
          <p>{post.body}</p>
          <button onClick={() => { 
            setData(data.map(item => {
             if(item.id === post.id) {
                return {
                    ...item,
                    isReded:!item.isReded
                }
              } else {
                return item;
              }
            }));
          }}>Reded</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;