## 记录
vscode内置typescript语法支持，库版本跟随vscode工具版本来，然后selet type 命令可以设置

在Workspace Settings(JSON)中配置"typescript.tsdk": "./node_modules/typescript/lib"，

出现函数实现重复等错误  在项目根目录添加配置文件tsconfig.json。 在项目根目录运行：
tsc --init

编译选项tsc xxx -w

工程下面直接添加tsc —init  tsconfig.json  空的{}也行
会对工程下面所有文件操作 tsc 或者tsc -w