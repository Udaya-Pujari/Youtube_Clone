import React from "react";

const commentsData = [
  {
    name: "Udaya Pujari",
    text: "lorem epsum char ten hundred val of jfjgjfj",
    replies: "",
  },
  {
    name: "Udaya Pujari",
    text: "lorem epsum char ten hundred val of jfjgjfj",
    replies: [
      {
        name: "Udaya Pujari",
        text: "lorem epsum char ten hundred val of jfjgjfj",
        replies: [
          {
            name: "Udaya Pujari",
            text: "lorem epsum char ten hundred val of jfjgjfj",
            replies: [
              {
                name: "Udaya Pujari",
                text: "lorem epsum char ten hundred val of jfjgjfj",
                replies: [
                  {
                    name: "Udaya Pujari",
                    text: "lorem epsum char ten hundred val of jfjgjfj",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Udaya Pujari",
    text: "lorem epsum char ten hundred val of jfjgjfj",
    replies: [
      {
        name: "Udaya Pujari",
        text: "lorem epsum char ten hundred val of jfjgjfj",
        replies: [
          {
            name: "Udaya Pujari",
            text: "lorem epsum char ten hundred val of jfjgjfj",
            replies: [
              {
                name: "Udaya Pujari",
                text: "lorem epsum char ten hundred val of jfjgjfj",
                replies: [
                  {
                    name: "Udaya Pujari",
                    text: "lorem epsum char ten hundred val of jfjgjfj",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Udaya Pujari",
    text: "lorem epsum char ten hundred val of jfjgjfj",
    replies: [
      {
        name: "Udaya Pujari",
        text: "lorem epsum char ten hundred val of jfjgjfj",
        replies: [
          {
            name: "Udaya Pujari",
            text: "lorem epsum char ten hundred val of jfjgjfj",
            replies: [
              {
                name: "Udaya Pujari",
                text: "lorem epsum char ten hundred val of jfjgjfj",
                replies: [
                  {
                    name: "Udaya Pujari",
                    text: "lorem epsum char ten hundred val of jfjgjfj",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "sjfhsjfh",
    text: "djfhjdjgdjghjdgjdhgj",
    replies: "",
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-50 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="cmtuser"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

// const CommentsList = ({ comments }) => {
//   //Disclaimer: Don't use indexes as keys
//   return comments.map((comment, index) => (
//     <div>
//       <Comment key={index} data={comment} />
//       <div className="pl-5 border border-l-black ml-8">
//         {/* <CommentsList comments={comment.replies} /> */}
//       </div>
//     </div>
//   ));
// };

const CommentsList = ({ comments }) => {
  //Disclaimer: Don't use indexes as keys
  return (
    comments &&
    comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-gray ml-8">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ))
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-md font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
