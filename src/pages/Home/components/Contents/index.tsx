import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import "./styles/contents.scss";

import { client } from "../../../../sanity/client";
import BlockContent from "@sanity/block-content-to-react";

interface Post {
  title: string;
  mainImage: {
    asset: {
      url: string;
      alt: string;
    };
  };
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  body: unknown;
}

const Contents = () => {
  const [postData, setPost] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          mainImage{
            asset->{
              _id,
              url
            },
          },
          author->{
            name,
            image{
              asset->{
                _id,
                url
              },
              alt
            }
          },
          publishedAt,
          body
        }`
      )
      .then((data) => setPost(data));
  }, []);

  return (
    <Box className="contents-homepage mt-56">
      <Container>
        <Box className="content-offer flex flex-col justify-center items-center md:flex-row">
          {postData.map((post, index) => {
            return (
              <Box className="p-4">
                <img
                  src={post.mainImage.asset.url}
                  alt={`image-${index}`}
                  className="w-full mb-4"
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  className="text-lg font-bold"
                >
                  {post.title}
                </Typography>
                <BlockContent
                  blocks={post.body}
                  projectId="kows5um3"
                  dataset="production"
                />
                <Box className="flex items-center mt-4">
                  <img
                    src={post.author.image.asset.url}
                    alt={`image-author-${index}`}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <Typography variant="body2" color="text.secondary">
                    {post.author.name}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export { Contents };
