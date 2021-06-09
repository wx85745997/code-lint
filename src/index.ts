import path from "path"
import fs from "fs-extra"
import ora from "ora"

import { installEditorconfig } from "./tasks/editorconfig"

export const init = () => {
  const pkgPath = path.join(process.cwd(), "package.json")
  const pkg = fs.readJsonSync(pkgPath)

  if (!fs.existsSync(pkgPath)) {
    throw new Error(`can't find package.json in ${process.cwd()}`)
  }

  const spinner = ora(`Install ${pkg.name}`).start()

  const startTime = Date.now()

  const addFileTasks: Array<[string, string]> = []
}
