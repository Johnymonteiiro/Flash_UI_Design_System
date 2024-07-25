import { Theme } from "@/types/types";
import fs from "fs";
import path from "path";


interface RequestTypes {
  themes: Theme;
}

export async function POST(request: Request, res: Response) {
    
    const themes = await request.json();
    const filePath = path.join(process.cwd(),"src", "tokens", "tokens.json");

     fs.mkdirSync(path.dirname(filePath), { recursive: true });
     fs.writeFileSync(filePath, JSON.stringify(themes, null, 2));

     console.log("POST SIDE:", themes)
     
     return Response.json(themes)

}
