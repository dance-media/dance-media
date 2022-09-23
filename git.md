1. 本地新建一个文件夹（project）
2. 命令行中进入这个文件夹
3. Git初始化环境

git init

4. 与远程项目地址建立关联

git remote add origin 远程项目地址

5. 本地新建与线上同名的dev分支，并拉取代码

git pull origin dev:dev

6. 本发切换到dev分支上

git checkout dev

7. 安装项目依赖

cnpm install --save

8. 运行项目

npm run dev

此时项目应该可以正常运行了，可对项目进行修改和编辑

9. 查看代码修改状态

git status

10. 添加所有修改

git add *

11. 提交修改并添加说明

git commit -m “update code”

12. 推送代码到远程的dev分支上

git push origin dev

13. 切换到master分支上

git checkout master

14. 拉取远程master分支上面代码

git pull origin master

15. 合并dev分支

git merge dev

16. 推送到远程序的master分支上

git push

如果是第一次，需要执行以下代码，提示中会有。

git push --set-upstream origin master

17. 切回到dev分支上，方便下次修改

git checkout dev
