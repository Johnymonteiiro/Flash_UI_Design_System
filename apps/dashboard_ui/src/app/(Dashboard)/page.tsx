"use client";
import { posts } from "#site/content";
import { CodePreview } from "@/app/(Dashboard)/components/codePreview/code";
import { MDXContent } from "@/components/mdx-context/mdx-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { renderJson } from "@/util/json.convert";
import { Copy } from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(renderJson)
      .then(() => {
        toast({
          description: " Your tokens was copied!",
          action: (
            <ToastAction
              className="bg-green-500 border-0 hover:bg-green-600"
              altText="Goto schedule to undo"
            >
              Close
            </ToastAction>
          ),
        });
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  return (
    <div className="flex mx-auto h-full container">
      <section className="p-8">
        <h1 className="text-3xl">Installation</h1>
        <p className="my-6 text-zinc-400">
          To get started with our UI library, follow these simple steps to
          install and integrate it into your project. Whether you&apos;re
          building a new project from scratch or integrating our components into
          an existing codebase, our installation process is designed to be
          straightforward and hassle-free.
        </p>

        <h2 className="text-2xl my-20">Initialization</h2>

        {posts.map((install, index) => {
          return (
            <article
              key={index}
              className="
               prose prose-headings:text-zinc-200 prose-headings:font-normal prose-base
                prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-p:text-zinc-400
                prose-code:text-green-500 w-full max-w-full prose-figure:w-[479px]
                prose-li:text-blue-600 prose-li:text-lg
               "
            >
              <p>{install.title}</p>
              <MDXContent code={install.body} />
            </article>
          );
        })}

        <div className="flex mt-8 justify-start w-full">
          <div className="flex">
            <div className="w-full h-full  rounded-md">
              <ScrollArea>
                <div className="h-[500px]">
                  <CodePreview code={renderJson} language="javascript" />
                </div>
              </ScrollArea>
            </div>
            <div>
              <button
                className=" ml-3 flex text-lg text-zinc-400 items-center hover:text-zinc-100"
                onClick={copyToClipboard}
              >
                <Copy className="mr-1" /> Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
