import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { getUserPosts } from "../../../../actions/getUserPosts";
import Hero from "@/components/Hero";
import ContentCard from "@/components/ContentCard";
import HomeCategoryBlock from "@/components/HomeCategoryBlock";

export default async function Home() {
  const userposts = await getUserPosts();

  return (
    <div className="container p-4 mb-12 sm:p-8 lg:mt-16 bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <Hero />

      <div>
        <h3 className="mt-4 mb-4 text-bhpink font-bold text-lg">Habari zote</h3>
      </div>
      <HomeCategoryBlock />
      <div>
        <h3 className="mt-4 mb-4 text-bhpink font-bold text-lg">
          Habari za wanaboda
        </h3>
      </div>

      <div className="grid grid-cols-1  mt-3 ">
        <div className=" ">
          <div className="grid grid-cols-1 gap-4 ">
            {userposts.map((userPost, index) => (
              <ContentCard
                key={index}
                postId={userPost.id}
                videoURL={userPost.videoURL}
                content={userPost.content}
                title={userPost.title}
                category={userPost.category}
                thumbnailURL={userPost.thumbnailURL}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-4">
            <div className="mb-">{/* <Leaderboard /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
