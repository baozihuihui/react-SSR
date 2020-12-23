import fs from "fs";

type JSONIndex = number;

interface JSONObject<T> {
  [key: number]: T;
}

interface InputObject<T> {
  id: JSONIndex;
  data: T;
}

type ObjectList<T> = Array<InputObject<T>>;

class FileOperatePool {
  private constructor() {}
  private static fileOperates: FileOperate<any>[] = [];
  static getFileOperate<T>(path: string): FileOperate<T> {
    let instance = null;
    let fileOperate = FileOperatePool.fileOperates.find(
      (fileOperate) => fileOperate.path === path
    );
    if (!fileOperate) {
      fileOperate = new FileOperate<T>(path);
    }
    return fileOperate;
  }
}

class FileOperate<T> {
  // 初始化文件操作时检查文件是否存在，若不存在则创建！
  constructor(public path: string) {
    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, "{}");
    }
  }

  private read(): JSONObject<T> {
    return JSON.parse(fs.readFileSync(this.path, "utf-8"));
  }

  getData(): ObjectList<T> {
    const fileObject = this.read();
    let data: ObjectList<T> = [];
    for (let item in fileObject) {
      data.push({ id: parseInt(item, 10), data: fileObject[item] });
    }
    return data;
  }

  find(id: JSONIndex): InputObject<T> {
    const fileObject: JSONObject<T> = this.read();
    return { id, data: fileObject[id] };
  }

  input(content: InputObject<T>) {
    let fileobject = this.read();
    fileobject[content.id] = content.data;
    fs.writeFileSync(this.path, JSON.stringify(fileobject));
  }
}

export default FileOperatePool;
