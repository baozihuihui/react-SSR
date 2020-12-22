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
  private static fileOperates: FileOperate[] = [];
  static getFileOperate(path: string): FileOperate {
    let instance = null;
    let fileOperate = FileOperatePool.fileOperates.find(
      (fileOperate) => fileOperate.path === path
    );
    if (!fileOperate) {
      fileOperate = new FileOperate(path);
    }
    return fileOperate;
  }
}

class FileOperate {
  // 初始化文件操作时检查文件是否存在，若不存在则创建！
  constructor(public path: string) {
    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, "{}");
    }
  }

  private read() {
    return JSON.parse(fs.readFileSync(this.path, "utf-8"));
  }

  getData<T>(): ObjectList<T> {
    const fileObject: JSONObject<T> = this.read();
    let data: ObjectList<T> = [];
    for (let item in fileObject) {
      data.push({ id: parseInt(item, 10), data: fileObject[item] });
    }
    return data;
  }

  find<T>(id: JSONIndex): InputObject<T> {
    const fileObject: JSONObject<T> = this.read();
    return { id, data: fileObject[id] };
  }

  input<T>(content: InputObject<T>) {
    let fileobject = this.read();
    fileobject[content.id] = content.data;
    fs.writeFileSync(this.path, JSON.stringify(fileobject));
  }
}

export default FileOperatePool;
