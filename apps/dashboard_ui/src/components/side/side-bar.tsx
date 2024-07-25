
import Link from "next/link";
export default function Sidebar() {
  const linksToken = [
    {
      name: "Color",
      link: "color",
    },
    {
      name: "Fontsize",
      link: "fontsize",
    },
    {
      name: "Size",
      link: "size",
    },
    {
      name: "Spacing",
      link: "spacing",
    },
    {
      name: "Shadows",
      link: "shadows",
    },
    {
      name: "Border-radius",
      link: "border_radius",
    },
  ];

  const linksComponents = [
    {
      name: "Button",
      link: "button",
    },
    {
      name: "Input",
      link: "input",
    },
  ];

  return (
    <aside className="sticky top-0 border-r border-zinc-600 w-2/12 px-4 pt-8">
      <div className="flex flex-col">
        <Link
          href="/"
          className="text-lg text-zinc-300 hover:text-zinc-50 mb-20"
        >
          Installation
        </Link>
        <div>
          <strong className="text-lg text-zinc-300">Tokens</strong>
          <div className="flex flex-col pl-3 my-3 border-l border-zinc-600">
            {linksToken.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={`/tokens/${link.link}`}
                  className="text-base text-zinc-300 hover:text-zinc-50 p-2"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <strong className="text-lg text-zinc-300">Components</strong>
          <div className="flex flex-col pl-3 my-3 border-l border-zinc-600">
            {linksComponents.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={`/components/${link.link}`}
                  className="text-base text-zinc-300 hover:text-zinc-50 p-2"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
