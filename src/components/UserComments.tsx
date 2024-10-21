import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchUserComments } from "../api/comments.api";
import React from "react";

export const PostComments: React.FC = () => {
  const { id } = useParams();
  const comments = useQuery({queryKey: ["user-comments", id], queryFn: () => fetchUserComments({userId: Number(id)})});

  return (
  <>
    {(comments.data?.comments || []).map(el =>
      <div key={el.id} className="flex space-x-3 mb-2">
        <h6>{el.user.fullName}:</h6>
        <p>{el.body}</p>
      </div>
    )}
  </>
  )
}