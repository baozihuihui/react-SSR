import "reflect-metadata";
import { Response } from "express";
import { controller, RequestConfig, use } from "../decorator";
import { BodyReauest } from "../common/interface";
import { Methods, getFilePath, FileType } from "../common/constant";
import getResponseData from "../common/function";
import FileOperatePool from "../util/FileOperate";
import checkLogin from "../customMiddleware/checkLogin";

interface HomeMessage {
  title: string;
  counter: number;
}

@controller("/api")
class TranslationController {
  @RequestConfig(Methods.GET, "/getTranslation")
  @use([checkLogin])
  getData(req: BodyReauest, res: Response): void {
    const fileOperate = FileOperatePool.getFileOperate<HomeMessage>(
      getFilePath(FileType.HOME)
    );
    res.json(getResponseData(fileOperate.getData()));
  }
}

export default TranslationController;
