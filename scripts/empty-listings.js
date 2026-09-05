// 空列表页兜底：为"没有文章"的分类页生成页面，避免导航 404，模板中显示"暂无文章"
// 说明：hexo-generator-category 只为"存在文章"的分类生成页面；
//      本脚本为未生成的导航分类补生成空页面，已存在的分类由内置生成器处理，互不冲突。

const NAV_CATEGORIES = ['articles', 'blog']; // 与 layout.ejs 导航一致

function makeEmptyPage(path, extra) {
  return {
    path: path,
    layout: ['category', 'archive', 'index'],
    data: Object.assign({
      title: (extra && extra.category) || '全部文章',
      posts: [],
      total: 0,
      current: 1,
      current_url: '/' + path.replace(/\/index\.html$/, '/'),
      prev: 0,
      next: 0
    }, extra || {})
  };
}

hexo.extend.generator.register('empty-listings', function (locals) {
  const pages = [];
  const categoryDir = hexo.config.category_dir || 'categories';

  // 1) 导航分类中没有文章时，生成空分类页（模板显示"暂无文章"）
  const existingCategories = new Set(locals.categories.map(c => c.name));
  NAV_CATEGORIES.forEach(function (name) {
    if (!existingCategories.has(name)) {
      pages.push(makeEmptyPage(categoryDir + '/' + name + '/index.html', { category: name }));
    }
  });

  // 2) 全站没有任何文章时，确保归档页存在
  if (locals.posts.length === 0) {
    pages.push(makeEmptyPage((hexo.config.archive_dir || 'archives') + '/index.html', {}));
  }

  return pages;
});
