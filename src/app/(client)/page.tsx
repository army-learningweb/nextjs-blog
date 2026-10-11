"use client";

import ArticleFeatured from "@/components/client/home/ArticleFeatured";
import ArticleSideItem from "@/components/client/home/ArticleSideItem";
import ArticleSliderItem from "@/components/client/home/ArticleSliderItem";
import SectionPage from "@/components/client/layouts/SectionPage";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/placeholder-article";
import { useScroll } from "@/context/ScrollContext";

export default function Page() {
  const {
    topArticle,
    sportArticle,
    ecomicArticle,
    techArticle,
    healthArticle,
    scientArticle,
  } = useScroll();

  return (
    <div className="space-y-8">
      {/* top-article */}
      <SectionPage id="top-article" ref={topArticle}>
        <div className="flex gap-4">
          {/* Article Futured */}
          <div className="w-[60%] space-y-4">
            <ArticleFeatured />
          </div>

          {/* Article Side */}
          <div className="flex-1 space-y-3.75">
            {posts.map((item, index) => (
              <ArticleSideItem
                key={index}
                title={item.title}
                desc={item.desc}
                category={item.category}
                date={item.date}
              />
            ))}
            <div className="flex justify-end">
              <Button variant="link">
                <span>Xem tất cả</span>
                <ArrowUpRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </SectionPage>

      {/* sport-aricle */}
      <SectionPage title="Thể thao" id="sport-article" ref={sportArticle}>
        <div className="flex gap-4">
          {posts.map((item, index) => (
            <ArticleSliderItem
              key={index}
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
      </SectionPage>

      {/* ecomic-aricle */}
      <SectionPage title="Kinh tế" id="ecomic-article" ref={ecomicArticle}>
        <div className="flex gap-4">
          {posts.map((item, index) => (
            <ArticleSliderItem
              key={index}
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
      </SectionPage>

      {/* tech-aricle */}
      <SectionPage title="Công nghệ" id="tech-article" ref={techArticle}>
        <div className="flex gap-4">
          {posts.map((item, index) => (
            <ArticleSliderItem
              key={index}
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
      </SectionPage>

      {/* health-aricle */}
      <SectionPage title="Sức khỏe" id="health-article" ref={healthArticle}>
        <div className="flex gap-4">
          {posts.map((item, index) => (
            <ArticleSliderItem
              key={index}
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
      </SectionPage>

      {/* scient-aricle */}
      <SectionPage title="Khoa học" id="scient-article" ref={scientArticle}>
        <div className="flex gap-4">
          {posts.map((item, index) => (
            <ArticleSliderItem
              key={index}
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
      </SectionPage>
    </div>
  );
}
