const init = [
  {
    idTruyen: 1,
    comments: [
      {
        name: "nvcuong1904@gmail.com",
        comment: "Truyện này hay quá",
      },
      {
        name: "namngungoc@gmail.com",
        comment: "Truyện ra vào lúc mấy giờ",
      },
    ],
  },
  {
    idTruyen: 2,
    comments: [
      {
        name: "nvcuong1904@gmail.com",
        comment: "Truyện này hay quá",
      },
      {
        name: "namngungoc@gmail.com",
        comment: "Truyện ra vào lúc mấy giờ",
      },
    ],
  },
  {
    idTruyen: 3,
    comments: [
      {
        name: "nvcuong1904@gmail.com",
        comment: "Truyện này hay quá",
      },
      {
        name: "namngungoc@gmail.com",
        comment: "Truyện ra vào lúc mấy giờ",
      },
    ],
  },
  {
    idTruyen: 4,
    comments: [
      {
        name: "nvcuong1904@gmail.com",
        comment: "Truyện này hay quá",
      },
      {
        name: "namngungoc@gmail.com",
        comment: "Truyện ra vào lúc mấy giờ",
      },
    ],
  },
  {
    idTruyen: 5,
    comments: [
      {
        name: "nvcuong1904@gmail.com",
        comment: "Truyện này hay quá",
      },
      {
        name: "namngungoc@gmail.com",
        comment: "Truyện ra vào lúc mấy giờ",
      },
    ],
  },
  {
    idTruyen: 6,
    comments: [
      {
        name: "nvcuong1904@gmail.com",
        comment: "Truyện này hay quá",
      },
      {
        name: "namngungoc@gmail.com",
        comment: "Truyện ra vào lúc mấy giờ",
      },
    ],
  },
  {
    idTruyen: 7,
    comments: [
      {
        name: "nvcuong1904@gmail.com",
        comment: "Truyện này hay quá",
      },
      {
        name: "namngungoc@gmail.com",
        comment: "Truyện ra vào lúc mấy giờ",
      },
    ],
  },
  {
    idTruyen: 8,
    comments: [
      {
        name: "nvcuong1904@gmail.com",
        comment: "Truyện này hay quá",
      },
      {
        name: "namngungoc@gmail.com",
        comment: "Truyện ra vào lúc mấy giờ",
      },
    ],
  },
];
export const reComment = (state = init, action) => {
  switch (action.type) {
    case "addComment":
      const newcomment = state.map((item) => {
        if (action.payload.idTruyen === item.idTruyen) {
          return {
            ...item,
            comments: [
              { name: action.payload.name, comment: action.payload.comment },
              ...item.comments,
            ],
          };
        } else {
          return item;
        }
      });
      return newcomment;
    case "deleteComment":
      console.log("delete item: ", action.payload);
      const newcomments = state.map((item) => {
        if (action.payload.idTruyen === item.idTruyen) {
          const newcom = item.comments.map((comment) => {
            if (
              comment.name === action.payload.name &&
              comment.comment === action.payload.comment
            ) {
              return {name: "123-111"};
            } else {
              return comment;
            }
          });
          console.log("-------------------");
          console.log("delete dsdsdditem: ", newcom);
          var newww = []
          newcom.forEach((item) => {
            if(item.name != "123-111"){
                newww.push(item)
            }
          })
          console.log("-------------------");

          console.log("deletitem: ", newcom);
          console.log("-------------------");

          return { ...item, comments: newww };
        } else {
          return item;
        }
      });
      return newcomments;
    default:
      return state;
  }
};
export default reComment;
