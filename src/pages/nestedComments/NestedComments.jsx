import React, { useRef, useState } from "react";
import ImplementationButton from "../../common-components/implementation/ImplementationButton";
import "./styles.css";

const useUniqueId = () => {
  const ref = useRef(0);
  return () => {
    ref.current += 1;
    return ref.current;
  };
};
const Comment = ({ node, addComment }) => {
  const { commentId, text, children = [] } = node;
  return (
    <div className={"comment-container"} key={commentId}>
      <div className={"comment-box"}>
        <div className="comment-text">{text}</div>
        <button
          onClick={() => {
            addComment(node);
          }}
        >
          Comment
        </button>
      </div>
      {children.map((item) => {
        return <Comment node={item} addComment={addComment} />;
      })}
    </div>
  );
};

const useNestedComments = () => {
  const [commentTree, setCommentTree] = useState(null);
  const getId = useUniqueId();

  const getCommentObject = () => {
    return {
      commentId: getId(),
      text: "This is sample comment",
      children: [],
    };
  };

  const addComment = (node) => {
    const comm = getCommentObject();
    if (node === null) {
      setCommentTree(comm);
    } else {
      node.children.push(comm);
      const treeCopy = JSON.parse(JSON.stringify(commentTree));
      setCommentTree(treeCopy);
    }
  };

  return { commentTree, addComment };
};

const NestedComments = () => {
  const { commentTree, addComment } = useNestedComments();
  return (
    <div>
      <h1>Nested Comments</h1>
      {commentTree === null ? (
        <button
          onClick={() => {
            addComment(commentTree);
          }}
        >
          Add Comment
        </button>
      ) : (
        <Comment node={commentTree} addComment={addComment} />
      )}
      <ImplementationButton />
    </div>
  );
};

export default NestedComments;
