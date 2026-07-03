# ChengFeiyang Blog

Hexo personal blog for <https://gitfirehappy.github.io/>.

## Commands

```powershell
npm install
npx hexo clean
npx hexo generate
npx hexo server
```

Open the local preview URL printed by `hexo server`.

## Writing

The current `source/_posts/init.md` is a placeholder post so the first deploy has a visible page. Replace or delete it after writing a real first post.

Create a post:

```powershell
npx hexo new post "Post Title"
```

`post_asset_folder: true` is enabled. Hexo creates a same-name folder beside each post:

```text
source/_posts/Post-Title.md
source/_posts/Post-Title/
```

Put post images in that folder and reference them from Markdown:

```markdown
![image alt](image.png)
```

## Deploy

The site deploys with GitHub Actions from `main` to GitHub Pages.

Create or confirm the public repository `gitfirehappy/gitfirehappy.github.io`, then push:

```powershell
git init
git branch -M main
git add .
git commit -m "Initialize Hexo blog"
git remote add origin https://github.com/gitfirehappy/gitfirehappy.github.io.git
git push -u origin main
```

In GitHub repository settings, set Pages source to GitHub Actions.
