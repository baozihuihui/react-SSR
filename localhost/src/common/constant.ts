import path from "path";
export enum Methods {
  GET = "get",
  POST = "post",
}

export enum FileType {
  HOME = "home",
}

export function getFilePath(fileType: FileType) {
  let filepath = "../../data";
  switch (fileType) {
    case FileType.HOME:
      filepath += "/home.json";
  }
  return path.resolve(__dirname, filepath);
}
